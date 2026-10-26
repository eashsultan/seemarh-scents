import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Compass, Sparkles, SlidersHorizontal, Volume2, VolumeX, Eye, Flame } from 'lucide-react';
import { soundEngine } from '../utils/audio';

const TOTAL_FRAMES = 240;

export default function BackgroundFrameCanvas({ scrollProgress, activeSection, onFrameChange }) {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Motion mode: "flow" (continuous cinematic playback with scroll acceleration) or "scrub" (strict scroll lock)
  const [motionMode, setMotionMode] = useState('flow');
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentFrameDisplay, setCurrentFrameDisplay] = useState(1);
  const [showControls, setShowControls] = useState(false);
  const [soundActive, setSoundActive] = useState(false);

  const currentFrameRef = useRef(1);
  const targetFrameRef = useRef(1);
  const scrollVelocityRef = useRef(0);
  const lastScrollProgressRef = useRef(0);
  const lastScrollTimeRef = useRef(performance.now());
  const animFrameIdRef = useRef(null);

  // Preload all 240 frames
  useEffect(() => {
    let loaded = 0;
    const images = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      img.src = `/frames/ezgif-frame-${frameNum}.jpg`;

      img.onload = () => {
        loaded++;
        const percent = Math.round((loaded / TOTAL_FRAMES) * 100);
        setLoadProgress(percent);

        if (loaded === 1) {
          renderFrame(1);
        }
        if (loaded >= 30 && !isLoaded) {
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        loaded++;
        if (loaded >= 30 && !isLoaded) {
          setIsLoaded(true);
        }
      };

      images.push(img);
    }

    imagesRef.current = images;

    return () => {
      images.forEach(img => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, []);

  // Calculate scroll velocity & target position on scroll
  useEffect(() => {
    const now = performance.now();
    const dt = Math.max(1, now - lastScrollTimeRef.current);
    const dScroll = scrollProgress - lastScrollProgressRef.current;
    
    // Velocity in frames per ms
    scrollVelocityRef.current = (dScroll / dt) * 1000 * 25; // boost factor

    lastScrollProgressRef.current = scrollProgress;
    lastScrollTimeRef.current = now;

    // Calculate anchor frame from scroll (1 to 240)
    const target = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(scrollProgress * (TOTAL_FRAMES - 1)) + 1));
    targetFrameRef.current = target;
  }, [scrollProgress]);

  // Canvas render with aspect-ratio cover
  const renderFrame = useCallback((frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const clampedIndex = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(frameIndex)));
    const img = imagesRef.current[clampedIndex - 1];

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Object-fit: cover math
    const hRatio = width / img.naturalWidth;
    const vRatio = height / img.naturalHeight;
    const ratio = Math.max(hRatio, vRatio);

    const shiftX = (width - img.naturalWidth * ratio) / 2;
    const shiftY = (height - img.naturalHeight * ratio) / 2;

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(
      img,
      0, 0, img.naturalWidth, img.naturalHeight,
      shiftX, shiftY, img.naturalWidth * ratio, img.naturalHeight * ratio
    );

    ctx.restore();
  }, []);

  // Animation Loop (Continuous Fluid Motion + Scroll Acceleration)
  useEffect(() => {
    let lastTime = performance.now();

    const loop = (currentTime) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (isPlaying) {
        if (motionMode === 'flow') {
          // Continuous video playback at standard 24fps base speed
          let speed = 24; // base frames per second

          // Add scroll velocity impulse
          if (Math.abs(scrollVelocityRef.current) > 0.05) {
            speed += scrollVelocityRef.current * 1.5;
            // Decay scroll velocity smoothly
            scrollVelocityRef.current *= 0.88;
          }

          // Advance frame
          currentFrameRef.current += speed * delta;

          // Wrap seamlessly or bounce
          if (currentFrameRef.current > TOTAL_FRAMES) {
            currentFrameRef.current = 1;
          } else if (currentFrameRef.current < 1) {
            currentFrameRef.current = TOTAL_FRAMES;
          }
        } else {
          // Strict Scroll Scrubbing with high-momentum lerp
          const diff = targetFrameRef.current - currentFrameRef.current;
          currentFrameRef.current += diff * 0.16;
        }

        const frameToDraw = Math.round(currentFrameRef.current);
        renderFrame(frameToDraw);
        setCurrentFrameDisplay(frameToDraw);
        if (onFrameChange) {
          onFrameChange(frameToDraw);
        }
      }

      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    animFrameIdRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [isPlaying, motionMode, renderFrame, onFrameChange]);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      renderFrame(currentFrameRef.current);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [renderFrame]);

  const toggleSound = () => {
    const active = soundEngine.toggle();
    setSoundActive(active);
  };

  const handleManualScrub = (e) => {
    const val = parseInt(e.target.value, 10);
    setMotionMode('scrub');
    currentFrameRef.current = val;
    targetFrameRef.current = val;
    renderFrame(val);
  };

  return (
    <>
      {/* Luxury Minimal Preloader */}
      <AnimatePresence>
        {loadProgress < 25 && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07080a] text-center px-6"
          >
            <div className="relative mb-6">
              <div className="w-16 h-16 rounded-full border border-gold-400/30 border-t-gold-400 animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center text-gold-300 font-serif text-sm tracking-widest">
                S
              </div>
            </div>

            <h2 className="text-xl font-serif tracking-[0.3em] text-white uppercase mb-1">
              SEEMARH SCENTS
            </h2>
            <p className="text-[10px] uppercase tracking-[0.35em] text-gold-400/80 font-sans mb-6">
              Haute Parfumerie Film Stream
            </p>

            <div className="w-48 h-0.5 bg-neutral-900 rounded-full overflow-hidden">
              <div
                className="h-full bg-gold-400 transition-all duration-300"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
            <span className="mt-2 text-[10px] font-mono text-neutral-500 tracking-widest">
              {loadProgress}%
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fixed Fullscreen Motion Canvas */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#07080a]">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover block"
        />

        {/* Crisp, Crystal-Clear Dark Film so the Video is High Contrast & Vibrant */}
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />

        {/* Soft Luxury Vignette at edges */}
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, transparent 60%, rgba(0,0,0,0.75) 100%)'
          }}
        />

        {/* Subtle Warm Amber Studio Lighting Tone */}
        <div className="absolute inset-0 pointer-events-none opacity-10 mix-blend-color-dodge bg-gradient-to-t from-amber-700/30 via-transparent to-yellow-600/20" />
      </div>

      {/* Floating Modern Luxury Control Bar (Bottom Dock) */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel px-4 py-2 rounded-full flex items-center gap-3 shadow-2xl border border-white/10 backdrop-blur-xl"
        >
          {/* Sound Ambiance Toggle */}
          <button
            onClick={toggleSound}
            aria-label="Toggle ambient sound"
            className="p-1.5 rounded-full hover:bg-gold-500/20 transition-all text-gold-300 hover:text-white"
            title={soundActive ? "Mute Atmospheric Sound" : "Play Atmospheric Sound"}
          >
            {soundActive ? (
              <div className="flex items-center gap-1">
                <Volume2 className="w-3.5 h-3.5 text-gold-400" />
                <span className="flex gap-0.5 items-end h-3">
                  <span className="w-0.5 bg-gold-400 h-2 animate-pulse" />
                  <span className="w-0.5 bg-gold-400 h-3 animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <span className="w-0.5 bg-gold-400 h-1.5 animate-pulse" style={{ animationDelay: '0.4s' }} />
                </span>
              </div>
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-neutral-400" />
            )}
          </button>

          <div className="h-3.5 w-px bg-white/15" />

          {/* Mode Switcher: Flow vs Scrub */}
          <button
            onClick={() => setMotionMode(motionMode === 'flow' ? 'scrub' : 'flow')}
            className={`px-2.5 py-1 rounded-full text-[10px] font-sans tracking-widest uppercase transition-all flex items-center gap-1.5 ${
              motionMode === 'flow'
                ? 'bg-gold-500/20 text-gold-300 border border-gold-400/40'
                : 'bg-white/5 text-neutral-300 border border-white/10 hover:text-white'
            }`}
            title={motionMode === 'flow' ? "Mode: Continuous Video Motion (with scroll boost)" : "Mode: Strict Scroll Scrub"}
          >
            <Flame className="w-3 h-3 text-gold-400" />
            <span className="hidden sm:inline">{motionMode === 'flow' ? 'Continuous Motion' : 'Scroll Scrub'}</span>
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-full hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
            title={isPlaying ? "Freeze Motion" : "Resume Motion"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
          </button>

          {/* Expand Manual Scrubber */}
          <button
            onClick={() => setShowControls(!showControls)}
            className={`p-1.5 rounded-full transition-colors ${showControls ? 'text-gold-400 bg-gold-500/20' : 'text-neutral-400 hover:text-white'}`}
            title="Open Timeline Scrubber"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
          </button>

          {/* Frame Number */}
          <span className="hidden md:inline font-mono text-[10px] text-neutral-400">
            {String(currentFrameDisplay).padStart(3, '0')}/{TOTAL_FRAMES}
          </span>
        </motion.div>
      </div>

      {/* Expandable Manual Timeline Scrubber */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-6 left-6 md:left-auto md:w-96 z-40 glass-panel-gold p-4 rounded-2xl border border-gold-400/30 backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-gold-300 uppercase tracking-widest font-serif flex items-center gap-1.5 text-[11px]">
                <Compass className="w-3 h-3 text-gold-400" />
                Fragrance Cinema Timeline
              </span>
              <span className="font-mono text-[11px] text-gold-400">
                Frame {currentFrameDisplay} ({Math.round((currentFrameDisplay / TOTAL_FRAMES) * 100)}%)
              </span>
            </div>

            <input
              type="range"
              min={1}
              max={TOTAL_FRAMES}
              value={currentFrameDisplay}
              onChange={handleManualScrub}
              className="w-full accent-gold-400 h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer"
            />

            <div className="flex justify-between items-center text-[9px] text-neutral-400 uppercase tracking-widest mt-2">
              <span>01 Spray Mist</span>
              <span>02 Atomizer</span>
              <span>03 Awakening</span>
              <span>04 The Flacon</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

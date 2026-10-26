import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Compass, Sparkles, SlidersHorizontal, Volume2, VolumeX } from 'lucide-react';
import { soundEngine } from '../utils/audio';

const TOTAL_FRAMES = 240;

export default function BackgroundFrameCanvas({ scrollProgress, activeSection, onFrameChange }) {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlayingAuto, setIsPlayingAuto] = useState(false);
  const [currentFrameDisplay, setCurrentFrameDisplay] = useState(1);
  const [showControls, setShowControls] = useState(false);
  const [soundActive, setSoundActive] = useState(false);

  const currentFrameRef = useRef(1);
  const targetFrameRef = useRef(1);
  const animFrameIdRef = useRef(null);
  const autoPlayTimerRef = useRef(null);

  // Preload frames
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
          // Render first frame immediately
          renderFrame(1);
        }

        if (loaded >= 40 && !isLoaded) {
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        loaded++;
        if (loaded >= 40 && !isLoaded) {
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

  // Frame rendering with object-fit: cover
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

    // Cover math
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

  // Update target frame from scroll progress when not in auto-play
  useEffect(() => {
    if (!isPlayingAuto) {
      const target = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(scrollProgress * (TOTAL_FRAMES - 1)) + 1));
      targetFrameRef.current = target;
    }
  }, [scrollProgress, isPlayingAuto]);

  // Smooth lerp loop
  useEffect(() => {
    const loop = () => {
      if (isPlayingAuto) {
        currentFrameRef.current += 0.5;
        if (currentFrameRef.current > TOTAL_FRAMES) {
          currentFrameRef.current = 1;
        }
      } else {
        const diff = targetFrameRef.current - currentFrameRef.current;
        // Cinematic momentum interpolation
        currentFrameRef.current += diff * 0.12;
      }

      const frameToDraw = Math.round(currentFrameRef.current);
      renderFrame(frameToDraw);
      setCurrentFrameDisplay(frameToDraw);
      if (onFrameChange) {
        onFrameChange(frameToDraw);
      }

      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    animFrameIdRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [isPlayingAuto, renderFrame, onFrameChange]);

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
    setIsPlayingAuto(false);
    targetFrameRef.current = val;
    currentFrameRef.current = val;
    renderFrame(val);
  };

  return (
    <>
      {/* Loading Screen Overlay */}
      <AnimatePresence>
        {loadProgress < 30 && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07080a] text-center px-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative mb-8"
            >
              <div className="w-24 h-24 rounded-full border border-gold-500/30 flex items-center justify-center animate-spin" style={{ animationDuration: '10s' }}>
                <Sparkles className="w-8 h-8 text-gold-400" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs uppercase tracking-widest text-gold-300 font-serif">S</span>
              </div>
            </motion.div>

            <h2 className="text-2xl md:text-3xl font-serif tracking-[0.25em] text-gold-gradient uppercase mb-2">
              Seemarh Scents
            </h2>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-sans mb-8">
              Brewing Haute Parfumerie & Motion Frames...
            </p>

            {/* Progress Bar */}
            <div className="w-64 max-w-full h-1 bg-neutral-900 rounded-full overflow-hidden border border-gold-500/20">
              <motion.div
                className="h-full bg-gradient-to-r from-gold-600 via-gold-400 to-amber-200"
                style={{ width: `${loadProgress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
            <span className="mt-3 text-xs tracking-widest text-gold-400/80 font-mono">
              {loadProgress}%
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fixed Fullscreen Canvas */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#07080a]">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover block"
        />

        {/* Crisp Semi-Transparent Luxury Dark Film (ensures the motion video is vivid, bright, and clearly visible everywhere) */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-40" 
             style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.65) 100%)' }} />
        
        {/* Subtle Luxury Golden Hue */}
        <div className="absolute inset-0 pointer-events-none opacity-15 mix-blend-color-dodge bg-gradient-to-tr from-amber-600/20 via-transparent to-yellow-500/20" />
      </div>

      {/* Floating Interactive Frame & Motion Controls (Bottom Bar) */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="glass-panel px-4 py-2.5 rounded-full flex items-center gap-3 shadow-2xl border border-gold-500/30"
        >
          {/* Sound Ambiance Toggle */}
          <button
            onClick={toggleSound}
            aria-label="Toggle ambient sound"
            className="p-2 rounded-full hover:bg-gold-500/20 transition-all text-gold-300 hover:text-white"
            title={soundActive ? "Mute Atmospheric Sound" : "Play Atmospheric Sound"}
          >
            {soundActive ? <Volume2 className="w-4 h-4 text-gold-400 animate-pulse" /> : <VolumeX className="w-4 h-4 text-neutral-400" />}
          </button>

          <div className="h-4 w-px bg-neutral-700" />

          {/* Auto-Play Toggle */}
          <button
            onClick={() => setIsPlayingAuto(!isPlayingAuto)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-sans tracking-wider uppercase transition-all bg-gold-500/10 hover:bg-gold-500/20 text-gold-300 hover:text-gold-200 border border-gold-500/20"
            title={isPlayingAuto ? "Pause Auto Motion" : "Start Auto Motion"}
          >
            {isPlayingAuto ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span className="hidden sm:inline">Auto</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span className="hidden sm:inline">Motion</span>
              </>
            )}
          </button>

          {/* Expand Manual Scrubber Toggle */}
          <button
            onClick={() => setShowControls(!showControls)}
            className="p-2 rounded-full hover:bg-gold-500/20 transition-all text-gold-300"
            title="Toggle Timeline Scrubber"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>

          {/* Frame Counter Badge */}
          <div className="hidden md:flex items-center gap-1.5 text-[11px] font-mono text-neutral-400 pl-1">
            <span className="text-gold-400">{String(currentFrameDisplay).padStart(3, '0')}</span>
            <span>/</span>
            <span>{TOTAL_FRAMES}</span>
          </div>
        </motion.div>
      </div>

      {/* Expandable Manual Timeline Scrubber */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed bottom-24 right-6 left-6 md:left-auto md:w-96 z-40 glass-panel-gold p-4 rounded-2xl border border-gold-500/40"
          >
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-gold-300 uppercase tracking-widest font-serif flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-gold-400" />
                Fragrance Timeline Scrub
              </span>
              <span className="font-mono text-xs text-gold-400">
                Frame {currentFrameDisplay} ({Math.round((currentFrameDisplay / TOTAL_FRAMES) * 100)}%)
              </span>
            </div>

            <input
              type="range"
              min={1}
              max={TOTAL_FRAMES}
              value={currentFrameDisplay}
              onChange={handleManualScrub}
              className="w-full accent-gold-500 h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer"
            />

            <div className="flex justify-between items-center text-[10px] text-neutral-400 uppercase tracking-wider mt-2">
              <span>Spray Genesis</span>
              <span>Atomizer Mist</span>
              <span>Sensory Bloom</span>
              <span>Signature Flacon</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

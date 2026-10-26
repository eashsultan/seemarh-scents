import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Droplet, Sparkles, Layers, Zap } from 'lucide-react';

export default function AtomizerChapter() {
  return (
    <div id="atomizer" className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 py-24">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left column: Technical Engineering Story */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 flex flex-col text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-white/15 text-gold-300 text-[10px] font-mono tracking-[0.25em] uppercase w-fit mb-4">
            <Wind className="w-3.5 h-3.5 text-gold-400" />
            <span>Phase II • The Atomic Mist</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white uppercase tracking-wider font-light leading-tight mb-4">
            Acoustic Vortex
            <span className="block text-gold-gradient font-serif italic mt-1">
              Micro-Dispersion
            </span>
          </h2>

          <p className="text-sm text-neutral-300 font-sans leading-relaxed mb-6 font-light">
            When you press the hand-polished 24-karat gold-plated collar, a calibrated acoustic vortex atomizes pure fragrant extracts into over 30,000 microscopic floating droplets that remain suspended in ambient air.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-panel p-5 rounded-2xl border border-white/10 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-gold-300 mb-2">
                <Droplet className="w-4 h-4 text-gold-400" />
                <span className="font-serif text-sm tracking-wider uppercase">0.02μm Plume</span>
              </div>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                Ultralight suspension coats pulse points seamlessly without liquid accumulation or garment stains.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-white/10 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-gold-300 mb-2">
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span className="font-serif text-sm tracking-wider uppercase">Zero Alcohol Bite</span>
              </div>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                Organic botanical carrier alcohol lets top citrus and saffron notes bloom immediately.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right column: Interactive Dispersion Metrics */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 glass-panel-gold p-7 sm:p-9 rounded-3xl border border-gold-400/30 backdrop-blur-2xl"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-gold-400 font-mono block">Top Notes Volatility</span>
              <h3 className="text-xl font-serif text-white tracking-widest uppercase">The First Contact</h3>
            </div>
            <span className="text-[11px] font-mono text-gold-300 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20">
              00:00 - 00:30m
            </span>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-neutral-200 font-medium">Calabrian Sun Bergamot</span>
                <span className="text-gold-400 font-mono text-[11px]">96% Projection</span>
              </div>
              <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden border border-white/5">
                <div className="bg-gradient-to-r from-gold-500 to-amber-300 h-full w-[96%]" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-neutral-200 font-medium">Kashmir Crimson Saffron</span>
                <span className="text-gold-400 font-mono text-[11px]">89% Projection</span>
              </div>
              <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden border border-white/5">
                <div className="bg-gradient-to-r from-gold-500 to-amber-300 h-full w-[89%]" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-neutral-200 font-medium">Madagascar Pink Peppercorn</span>
                <span className="text-gold-400 font-mono text-[11px]">84% Projection</span>
              </div>
              <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden border border-white/5">
                <div className="bg-gradient-to-r from-gold-500 to-amber-300 h-full w-[84%]" />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
            <span className="flex items-center gap-1.5 text-gold-300 text-[11px]">
              <Layers className="w-3.5 h-3.5 text-gold-400" />
              Diffusion Angle: 160°
            </span>
            <span className="font-mono text-neutral-400 text-[11px]">60 FPS Slow-Motion Macro</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

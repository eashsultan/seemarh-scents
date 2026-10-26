import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Droplet, Sparkles, Zap, Layers } from 'lucide-react';

export default function AtomizerChapter() {
  return (
    <div id="atomizer" className="relative min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column: Micro-Mist Story */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="flex flex-col text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-gold-500/30 text-gold-300 text-[11px] tracking-[0.25em] uppercase w-fit mb-4">
            <Wind className="w-3.5 h-3.5 text-gold-400" />
            <span>Phase II • The Atomic Mist</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white uppercase tracking-wider font-light leading-tight mb-6">
            Engineered For
            <span className="block text-gold-gradient font-serif italic mt-1">
              Microscopic Suspension
            </span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed mb-8">
            The moment you press the 24k gold-plated atomizer, over 30,000 microscopic droplets burst into a frictionless plume. Designed with an acoustic pressure vortex that releases pure fragrant oils without bruising their delicate top notes.
          </p>

          {/* Feature Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-panel p-4 rounded-xl border border-gold-500/20">
              <div className="flex items-center gap-2.5 text-gold-400 mb-2">
                <Droplet className="w-4 h-4" />
                <span className="font-serif text-sm tracking-wider uppercase">0.02μm Micro-Droplets</span>
              </div>
              <p className="text-xs text-neutral-400 leading-normal">
                Disperses evenly across pulse points without heavy moisture stains or uneven pools.
              </p>
            </div>

            <div className="glass-panel p-4 rounded-xl border border-gold-500/20">
              <div className="flex items-center gap-2.5 text-gold-400 mb-2">
                <Sparkles className="w-4 h-4" />
                <span className="font-serif text-sm tracking-wider uppercase">Zero Alcohol Burn</span>
              </div>
              <p className="text-xs text-neutral-400 leading-normal">
                Triple-filtered grain spirit ensures instant scent unveiling without sharp alcoholic vapors.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right column: Interactive Notes Cloud */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="glass-panel-gold p-8 rounded-3xl border border-gold-500/30 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between border-b border-gold-500/20 pb-4 mb-6">
              <div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold-400 font-sans block">Top Notes Dispersion</span>
                <h3 className="text-xl font-serif text-white tracking-widest uppercase">The Initial Flash</h3>
              </div>
              <span className="text-xs font-mono text-gold-400/90 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20">
                00:00 - 00:30 Min
              </span>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-200 font-sans font-medium">Calabrian Sun Bergamot</span>
                <span className="text-gold-400 font-mono">Crisp & Effervescent</span>
              </div>
              <div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden">
                <div className="bg-gold-400 h-full w-[95%]" />
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-200 font-sans font-medium">Crimson Saffron Petals</span>
                <span className="text-gold-400 font-mono">Warm & Leathery</span>
              </div>
              <div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden">
                <div className="bg-gold-400 h-full w-[88%]" />
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-200 font-sans font-medium">Pink Peppercorn Mist</span>
                <span className="text-gold-400 font-mono">Electric & Spicy</span>
              </div>
              <div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden">
                <div className="bg-gold-400 h-full w-[82%]" />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gold-500/20 flex items-center justify-between text-xs text-neutral-400">
            <span className="flex items-center gap-1.5 text-gold-300">
              <Layers className="w-3.5 h-3.5" />
              Diffusion Arc: 180° Cone
            </span>
            <span className="font-mono text-gold-400">60 FPS Hydro-Acoustic Spray</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

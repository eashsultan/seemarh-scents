import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Compass, ShieldCheck } from 'lucide-react';

export default function HeroChapter() {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between p-6 sm:p-10 md:p-16 text-white pointer-events-none">
      {/* Top Editorial Row (Left: Collection tag, Right: Studio Coordinates) */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-16 sm:pt-20 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2.5 px-3.5 py-1 rounded-full glass-panel border border-white/10 text-xs font-mono tracking-widest uppercase text-neutral-300"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping" />
          <span className="text-gold-300">AUTUMN / WINTER 2026 ARCHIVE</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hidden md:flex items-center gap-6 text-[11px] font-mono tracking-[0.25em] uppercase text-neutral-400"
        >
          <span>43.6602° N, 6.9263° E • GRASSE</span>
          <span className="w-1 h-1 rounded-full bg-neutral-600" />
          <span className="text-gold-400">EXTRAIT DE PARFUM 32%</span>
        </motion.div>
      </div>

      {/* Middle Center: Left-Aligned Editorial Brand Statement (Leaving Center Completely Open for Model & Mist) */}
      <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pointer-events-auto py-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col"
        >
          {/* Subtle roman numeral */}
          <span className="text-[12px] font-serif tracking-[0.4em] uppercase text-gold-400 mb-2 block">
            ÉDITION PREMIÈRE • N° 01
          </span>

          {/* Monumental Editorial Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif uppercase tracking-[0.12em] font-light leading-[0.95] text-white">
            Seemarh
            <span className="block font-serif italic text-gold-gradient font-normal tracking-[0.08em] mt-1 text-4xl sm:text-6xl lg:text-7xl">
              Scents
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-sm sm:text-base text-neutral-300 font-sans font-light leading-relaxed">
            The architecture of modern desire. Formulated with rare hand-harvested botanicals and aged Cambodian agarwood, suspended in microscopic golden mist.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href="#showcase"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-amber-400 to-yellow-400 text-black font-sans font-semibold text-xs uppercase tracking-[0.2em] shadow-xl hover:shadow-gold-500/30 hover:scale-105 transition-all duration-300"
            >
              Acquire Flacon
            </a>
            <a
              href="#atomizer"
              className="px-7 py-3.5 rounded-full glass-panel hover:bg-white/10 text-neutral-200 border border-white/15 font-sans text-xs uppercase tracking-[0.2em] transition-all duration-300"
            >
              Explore Scent Notes
            </a>
          </div>
        </motion.div>

        {/* Floating Right Luxury Fact Capsule */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden lg:flex lg:col-span-5 flex-col justify-end"
        >
          <div className="glass-panel p-6 rounded-2xl border border-white/10 backdrop-blur-xl max-w-md ml-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-gold-400">
                Olfactive Profile
              </span>
              <span className="text-[10px] font-mono text-neutral-400">
                Sillage: Enormous
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-neutral-400 uppercase tracking-wider font-sans text-[11px]">Top Flash</span>
                <span className="text-neutral-200 font-serif">Calabrian Bergamot & Saffron</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-400 uppercase tracking-wider font-sans text-[11px]">Heart Soul</span>
                <span className="text-neutral-200 font-serif">Solar Damask Rose Absolute</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-400 uppercase tracking-wider font-sans text-[11px]">Base Aura</span>
                <span className="text-neutral-200 font-serif">Aged Oud & Black Vanilla</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-neutral-400">
              <span className="flex items-center gap-1.5 text-gold-300">
                <Sparkles className="w-3 h-3 text-gold-400" />
                Handcrafted Micro-Batch
              </span>
              <span className="font-mono text-neutral-300">18h+ Longevity</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Editorial Bar: Luxury Scroll Down Prompt */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/10 pt-6 pointer-events-auto">
        <div className="flex items-center gap-4 text-xs text-neutral-400 uppercase tracking-widest font-sans">
          <span className="w-2 h-2 rounded-full bg-gold-400" />
          <span>Continuous Kinetic Cinema Background</span>
        </div>

        <motion.a
          href="#atomizer"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex items-center gap-2 text-xs font-mono text-gold-300 hover:text-white transition-colors"
        >
          <span className="uppercase tracking-[0.25em]">Scroll to Atomize Scent</span>
          <ArrowDown className="w-3.5 h-3.5 text-gold-400" />
        </motion.a>
      </div>
    </div>
  );
}

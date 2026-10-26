import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Award, ShieldCheck, Flame } from 'lucide-react';

export default function HeroChapter() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Subtitle pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-gold-500/30 text-gold-300 text-xs tracking-[0.3em] uppercase mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>Haute Parfumerie Exclusive</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-[0.18em] uppercase text-gold-gradient font-light leading-tight mb-6 text-gold-glow"
        >
          Seemarh
          <span className="block font-serif italic text-3xl sm:text-5xl md:text-6xl text-white/90 tracking-widest mt-1">
            Scents
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-base sm:text-lg text-neutral-300 font-sans font-light tracking-wide leading-relaxed mb-10 drop-shadow-md"
        >
          An intoxicating synthesis of regal warmth, rare botanical essences, and enduring sillage. 
          Crafted for those who leave an unforgettable signature wherever they step.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#showcase"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-amber-400 to-yellow-500 text-black font-sans font-medium text-xs uppercase tracking-[0.2em] shadow-lg hover:shadow-gold-500/30 hover:scale-105 transition-all duration-300"
          >
            Acquire The Flacon
          </a>
          <a
            href="#atomizer"
            className="px-8 py-3.5 rounded-full glass-panel hover:bg-gold-500/10 text-gold-200 border border-gold-500/30 font-sans text-xs uppercase tracking-[0.2em] transition-all duration-300"
          >
            Explore The Anatomy
          </a>
        </motion.div>

        {/* Three luxury hallmarks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl pt-8 border-t border-gold-500/15"
        >
          <div className="flex flex-col items-center">
            <span className="text-gold-400 font-serif text-lg tracking-widest">32%</span>
            <span className="text-[11px] text-neutral-400 uppercase tracking-widest mt-1">Pure Extrait Concentration</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-gold-400 font-serif text-lg tracking-widest">18+ Hours</span>
            <span className="text-[11px] text-neutral-400 uppercase tracking-widest mt-1">Lingering Skin Sillage</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-gold-400 font-serif text-lg tracking-widest">Bespoke</span>
            <span className="text-[11px] text-neutral-400 uppercase tracking-widest mt-1">Numbered Artisanal Flacons</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-gold-400/70"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-sans">Scroll to Spray & Awaken</span>
        <ArrowDown className="w-4 h-4 text-gold-400" />
      </motion.div>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sun, Activity, Star } from 'lucide-react';

export default function SensoryChapter() {
  return (
    <div id="sensory" className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 py-24">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center">
        {/* Category Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-white/15 text-gold-300 text-[10px] font-mono tracking-[0.25em] uppercase mb-4"
        >
          <Heart className="w-3.5 h-3.5 text-pink-400" />
          <span>Phase III • The Sensory Awakening</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl md:text-6xl font-serif text-white uppercase tracking-wider font-light leading-tight mb-4 max-w-3xl"
        >
          An Intimate Scent
          <span className="block text-gold-gradient font-serif italic mt-1">
            Second Skin
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl text-neutral-300 font-sans text-sm sm:text-base leading-relaxed mb-14 font-light"
        >
          As the microscopic droplet mist touches warm skin, volatile citrus yields to an intoxicating, velvety floral resin heart that creates a memorable emotional signature.
        </motion.p>

        {/* 3 Sensory Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-gold-400/40 text-left flex flex-col justify-between backdrop-blur-xl transition-colors"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-gold-400 mb-4">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-white uppercase tracking-wider mb-2">Solar Damask Rose</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                Hand-harvested at dawn in Grasse, preserving volatile floral nectar that radiates a dewy, velvety warmth.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-white/10 flex justify-between text-[11px] text-neutral-400 font-mono">
              <span>Floral Concentration</span>
              <span className="text-gold-400">14.5% Net</span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-panel-gold p-6 sm:p-7 rounded-3xl border border-gold-400/40 text-left flex flex-col justify-between backdrop-blur-2xl shadow-xl shadow-gold-950/20"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-gold-400/20 border border-gold-400/30 flex items-center justify-center text-gold-300 mb-4">
                <Activity className="w-5 h-5 text-gold-400" />
              </div>
              <h3 className="font-serif text-lg text-white uppercase tracking-wider mb-2">12-Year Cambodian Oud</h3>
              <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                Aged in darkened French oak barrels to impart noble balsamic resonance with whispers of antique leather.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-gold-400/20 flex justify-between text-[11px] text-gold-300 font-mono">
              <span>Precious Resin Fixative</span>
              <span className="text-gold-400">Aged 12 Yrs</span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-gold-400/40 text-left flex flex-col justify-between backdrop-blur-xl transition-colors"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-gold-400 mb-4">
                <Star className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-white uppercase tracking-wider mb-2">Bourbon Vanilla Pod</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                Slow-cured black vanilla pods infused with natural ambergris, crafting an unforgettable sillage that lasts until dawn.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-white/10 flex justify-between text-[11px] text-neutral-400 font-mono">
              <span>Projection Radius</span>
              <span className="text-gold-400">3.5 Meters</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

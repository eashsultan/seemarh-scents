import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sun, Activity, Star, Eye } from 'lucide-react';

export default function SensoryChapter() {
  return (
    <div id="olfactive" className="relative min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center">
        {/* Category Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass-panel border border-gold-500/30 text-gold-300 text-[11px] tracking-[0.25em] uppercase mb-6"
        >
          <Heart className="w-3.5 h-3.5 text-pink-400" />
          <span>Phase III • The Sensory Awakening</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-3xl sm:text-5xl md:text-6xl font-serif text-white uppercase tracking-wider font-light leading-tight mb-6 max-w-3xl"
        >
          A Breath of Pure
          <span className="block text-gold-gradient font-serif italic mt-1">
            Opulent Intimacy
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="max-w-2xl text-neutral-300 font-sans text-sm sm:text-base leading-relaxed mb-16"
        >
          As the fragrance touches body heat, the delicate top notes melt into an intoxicating, velvety heart. 
          Rare floral absolutes fuse seamlessly with smoked resins, creating a scent aura that feels like an emotional second skin.
        </motion.p>

        {/* 3 Sensory Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-panel p-6 rounded-2xl border border-gold-500/20 text-left flex flex-col justify-between hover:border-gold-500/40 transition-colors"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 mb-4">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-white uppercase tracking-wider mb-2">Solar Damask Rose</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Hand-harvested at dawn in Grasse, preserving volatile floral nectar that radiates a dewy, velvety warmth on the skin.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-neutral-800 flex justify-between text-[11px] text-neutral-400">
              <span>Heart Concentration</span>
              <span className="text-gold-400 font-mono">14.5% Net</span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-panel-gold p-6 rounded-2xl border border-gold-500/40 text-left flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-500/30 flex items-center justify-center text-gold-300 mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-white uppercase tracking-wider mb-2">Smoked Cambodian Oud</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Aged 12 years in darkened oak barrels. Imparts a noble, resinous depth with whispers of honey, dry wood, and antique leather.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-gold-500/20 flex justify-between text-[11px] text-gold-300">
              <span>Base Resin Fixative</span>
              <span className="text-gold-400 font-mono">Aged 12 Yrs</span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass-panel p-6 rounded-2xl border border-gold-500/20 text-left flex flex-col justify-between hover:border-gold-500/40 transition-colors"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 mb-4">
                <Star className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-white uppercase tracking-wider mb-2">Bourbon Vanilla & Amber</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Slow-cured black vanilla pods infused with crystalline ambergris, crafting an unforgettable trail that turns heads for hours.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-neutral-800 flex justify-between text-[11px] text-neutral-400">
              <span>Projection Radius</span>
              <span className="text-gold-400 font-mono">3.5 Meters</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Clock, Flame, Wind } from 'lucide-react';

const PYRAMID_DATA = [
  {
    tier: 'Top Notes',
    duration: 'First 15-30 minutes',
    icon: Wind,
    color: 'from-amber-200 to-yellow-400',
    description: 'The immediate impression upon misting. Crisp, vibrant, and designed to awaken the senses with radiant citrus and regal spice.',
    notes: [
      { name: 'Calabrian Bergamot', origin: 'Southern Italy', trait: 'Sun-drenched, zestful, crisp citrus effervescence' },
      { name: 'Pink Peppercorn', origin: 'Madagascar', trait: 'Sparkling, spicy-floral, energetic lift' },
      { name: 'Crimson Saffron', origin: 'Kashmir', trait: 'Golden leathery hue with subtle honeyed nuance' }
    ]
  },
  {
    tier: 'Heart Notes',
    duration: '2 to 6 hours after spray',
    icon: Sparkles,
    color: 'from-pink-300 to-rose-400',
    description: 'The true personality and soul of Seemarh Scents. Rich florals and rare woods unfold as skin warms the precious oils.',
    notes: [
      { name: 'Damask Rose Absolute', origin: 'Grasse, France', trait: 'Deep velvety petals, romantic and voluptuous' },
      { name: 'Egyptian Jasmine Sambac', origin: 'Nile Delta', trait: 'Night-blooming, narcotic sweetness' },
      { name: 'Smoked Frankincense', origin: 'Oman', trait: 'Sacred resinous tears, mystical and meditative' }
    ]
  },
  {
    tier: 'Base Notes',
    duration: '8 to 24+ hours on skin',
    icon: Flame,
    color: 'from-yellow-600 to-amber-700',
    description: 'The deep fixatives and anchors that linger indefinitely on fabric, skin, and in the memory of everyone around you.',
    notes: [
      { name: 'Aged Cambodian Oud', origin: 'Koh Kong', trait: 'Dark balsamic resin, regal, complex, and smokey' },
      { name: 'Bourbon Black Vanilla', origin: 'Madagascar', trait: 'Gourmand warmth, creamy orchid sweetness' },
      { name: 'Crystalline Ambergris', origin: 'Atlantic Currents', trait: 'Marine warmth, magnetic fixative and sensual aura' }
    ]
  }
];

export default function OlfactoryPyramid() {
  const [activeTier, setActiveTier] = useState(0);

  return (
    <section className="relative py-28 px-6 bg-[#07080a]/90 border-t border-gold-500/15">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-gold-400 block mb-2">
            The Scent Architecture
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white uppercase tracking-wider font-light">
            The Olfactory Pyramid
          </h2>
          <p className="text-sm text-neutral-400 font-sans mt-4">
            A three-tier chronological evolution engineered so each chapter of the fragrance reveals itself at the precise moment of luxury.
          </p>
        </div>

        {/* Tier Tabs */}
        <div className="flex justify-center gap-3 mb-10 overflow-x-auto pb-2">
          {PYRAMID_DATA.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeTier === idx;
            return (
              <button
                key={item.tier}
                onClick={() => setActiveTier(idx)}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-sans uppercase tracking-widest transition-all duration-300 border ${
                  isSelected
                    ? 'bg-gold-500 text-black border-gold-400 font-semibold shadow-lg shadow-gold-500/20 scale-105'
                    : 'glass-panel text-neutral-300 border-gold-500/20 hover:border-gold-500/40 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.tier}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tier Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTier}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="glass-panel-gold p-8 rounded-3xl border border-gold-500/30 max-w-4xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gold-500/20 pb-4 mb-6">
              <div>
                <h3 className="text-2xl font-serif text-white tracking-widest uppercase">
                  {PYRAMID_DATA[activeTier].tier}
                </h3>
                <span className="text-xs text-gold-400/90 font-sans tracking-wide">
                  {PYRAMID_DATA[activeTier].description}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-gold-300 mt-2 sm:mt-0">
                <Clock className="w-4 h-4 text-gold-400" />
                <span>{PYRAMID_DATA[activeTier].duration}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PYRAMID_DATA[activeTier].notes.map((note) => (
                <div
                  key={note.name}
                  className="p-5 rounded-2xl bg-black/40 border border-gold-500/15 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-widest text-gold-400/80 block mb-1">
                      {note.origin}
                    </span>
                    <h4 className="text-base font-serif text-white uppercase tracking-wider mb-2">
                      {note.name}
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                      {note.trait}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

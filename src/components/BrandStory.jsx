import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Sparkles, HeartHandshake } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="story" className="relative py-28 px-6 bg-[#07080a] border-t border-gold-500/15">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-gold-400 block mb-3">
              Maison Seemarh Heritage
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-white uppercase tracking-wider font-light leading-tight mb-6">
              Scent Is An Invisible
              <span className="block text-gold-gradient font-serif italic mt-1">
                Crown of Sovereignty
              </span>
            </h2>

            <div className="space-y-4 text-sm text-neutral-300 font-sans leading-relaxed">
              <p>
                Founded on the belief that true luxury is sensory, <strong>Seemarh Scents</strong> was conceived to celebrate confidence, grace, and regal distinction. 
                We craft each perfume not merely as a fragrance, but as an invisible architecture that envelops you in charisma.
              </p>
              <p>
                Every formulation is developed alongside master perfumers in Grasse and Dubai, marrying ancient Middle Eastern agarwood traditions with French Haute Parfumerie distillation methods.
              </p>
              <p>
                From the moment you receive our signature blush pink shopping bag to the final lingering whisper of vanilla and ambergris at midnight, Seemarh is an unforgettable memory.
              </p>
            </div>

            {/* Hallmarks */}
            <div className="grid grid-cols-2 gap-6 mt-8 pt-6 border-t border-gold-500/15">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-serif text-white uppercase tracking-wider">Cruelty-Free</h4>
                  <p className="text-xs text-neutral-400 mt-1">100% vegan floral absolutes with ethical amber substitutes.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-serif text-white uppercase tracking-wider">Numbered Reserve</h4>
                  <p className="text-xs text-neutral-400 mt-1">Only 500 bottles per seasonal batch to preserve potency.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-panel-gold p-4 border border-gold-500/30">
              <img
                src="/frames/ezgif-frame-220.jpg"
                alt="Seemarh Scents Flacon and Boutique Packaging"
                className="w-full h-[440px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl" />

              <div className="absolute bottom-8 left-8 right-8 glass-panel p-5 rounded-2xl border border-gold-500/25">
                <p className="text-xs text-gold-200 font-serif italic text-center">
                  "Seemarh Scents redefines the modern scent trail—luxurious, enduring, and endlessly captivating."
                </p>
                <div className="mt-3 flex items-center justify-center gap-2 text-[10px] text-neutral-400 uppercase tracking-widest font-sans">
                  <span>Haute Parfumerie Review</span>
                  <span>•</span>
                  <span className="text-gold-400">Edition 2026</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

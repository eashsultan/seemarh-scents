import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Sparkles, Star } from 'lucide-react';
import confetti from 'canvas-confetti';

const FRAGRANCES = [
  {
    id: 'lor-nocturne',
    title: "L'Or Nocturne",
    subtitle: "Extrait de Parfum • 50ml",
    desc: "Golden Amber, Smoked Cambodian Oud & Bourbon Vanilla. The signature embodiment of regal nocturnal elegance.",
    price: 175,
    tag: "Signature",
    accords: ["Amber", "Oud", "Vanilla", "Warm Spice"],
    frameIndex: 200,
    rating: 4.98
  },
  {
    id: 'rose-imperiale',
    title: "Rose Impériale",
    subtitle: "Extrait de Parfum • 50ml",
    desc: "Dewy Damask Rose, Raspberry Nectar, Candied Violet & Smoked Cashmere. Romantic, opulent and magnetic.",
    price: 185,
    tag: "Limited Batch",
    accords: ["Floral", "Dewy Rose", "Woody", "Fruity"],
    frameIndex: 140,
    rating: 4.95
  },
  {
    id: 'blanc-selene',
    title: "Blanc Séléné",
    subtitle: "Extrait de Parfum • 50ml",
    desc: "White Tea Buds, Silver Tuscan Iris, Cardamom Pods & Silken Musk. An ethereal, clean skin scent of pure serenity.",
    price: 165,
    tag: "Subtle Luxury",
    accords: ["Clean Musk", "Powdery Iris", "Fresh Tea"],
    frameIndex: 80,
    rating: 4.92
  },
  {
    id: 'soleil-dor',
    title: "Soleil d'Or",
    subtitle: "Extrait de Parfum • 50ml",
    desc: "Calabrian Neroli, Bergamot Blossom, Warm Solar Amber & Atlas Cedar. Radiance captured in liquid sunlight.",
    price: 170,
    tag: "Daytime Glow",
    accords: ["Solar Citrus", "Neroli", "Cedarwood"],
    frameIndex: 1,
    rating: 4.94
  }
];

export default function CollectionGrid({ onAddToCart }) {
  const handleQuickAdd = (fragrance) => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#c59d4c', '#e5d1a7', '#ffb6c1']
    });

    onAddToCart({
      id: `${fragrance.id}-50ml`,
      title: fragrance.title,
      subtitle: fragrance.subtitle,
      size: "50ml",
      sizeName: "Signature Flacon",
      price: fragrance.price,
      engraving: null,
      giftWrap: true,
      image: `/frames/ezgif-frame-${String(fragrance.frameIndex).padStart(3, '0')}.jpg`
    });
  };

  return (
    <section id="collection" className="relative py-28 px-6 bg-[#07080a]/95 border-t border-gold-500/15">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-gold-400 block mb-2">
              Maison Seemarh Fragrance Library
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-white uppercase tracking-wider font-light">
              The Grand Collection
            </h2>
          </div>
          <p className="text-sm text-neutral-400 font-sans max-w-md mt-4 md:mt-0">
            Each flacon contains pure artisanal perfume oil aged for a minimum of 9 months to achieve sublime olfactory harmony.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FRAGRANCES.map((frag, idx) => (
            <motion.div
              key={frag.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-3xl border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="w-full h-48 rounded-2xl overflow-hidden relative mb-5 bg-neutral-900 border border-gold-500/15">
                  <img
                    src={`/frames/ezgif-frame-${String(frag.frameIndex).padStart(3, '0')}.jpg`}
                    alt={frag.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-gold-500/30 text-[10px] font-sans uppercase tracking-wider text-gold-300">
                    {frag.tag}
                  </span>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[11px] text-amber-300 font-mono">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{frag.rating}</span>
                  </div>
                </div>

                {/* Title & Info */}
                <h3 className="text-xl font-serif text-white uppercase tracking-wider mb-1 group-hover:text-gold-300 transition-colors">
                  {frag.title}
                </h3>
                <span className="text-[11px] font-sans text-gold-400/80 uppercase tracking-widest block mb-3">
                  {frag.subtitle}
                </span>

                <p className="text-xs text-neutral-400 font-sans leading-relaxed mb-4">
                  {frag.desc}
                </p>

                {/* Accords tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {frag.accords.map((accord) => (
                    <span
                      key={accord}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-gold-500/10 text-gold-300/90 border border-gold-500/20 font-sans"
                    >
                      {accord}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Price & Add */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <div>
                  <span className="text-xl font-serif text-white">${frag.price}</span>
                  <span className="text-[10px] text-neutral-500 block uppercase">Includes Gift Bag</span>
                </div>
                <button
                  onClick={() => handleQuickAdd(frag)}
                  className="p-3 rounded-full bg-gold-500/10 hover:bg-gold-500 hover:text-black text-gold-300 border border-gold-500/30 transition-all duration-300 group/btn"
                  title="Quick Add to Bag"
                >
                  <ShoppingBag className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

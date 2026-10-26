import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, ShoppingBag, Check, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { createWhatsAppOrderLink } from '../utils/whatsapp';

const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    src: '/products/IMG-20261022-WA0149.jpg',
    title: '9pm Night Out Extrait',
    category: 'Haute Parfumerie',
    desc: 'Deep black bottle textured flacon. Wild lavender, cinnamon, and warm amber vanilla.',
    price: 185
  },
  {
    id: 'gal-2',
    src: '/products/IMG-20261022-WA0194.jpg',
    title: 'Mosuf Luxe Sapphire Flacon',
    category: 'Eau de Parfum',
    desc: 'Opulent royal blue crystal with metallic purple presentation box.',
    price: 145
  },
  {
    id: 'gal-3',
    src: '/products/IMG-20261022-WA0188.jpg',
    title: 'Bakarat Rouge 540 Chandelier',
    category: 'Perfumed Body Spray',
    desc: 'Golden chandelier artwork with signature luminous amber-saffron accords.',
    price: 75
  },
  {
    id: 'gal-4',
    src: '/products/IMG-20261022-WA0171.jpg',
    title: 'Royal Black Attar in Atelier',
    category: 'Boutique Display',
    desc: 'Maison Seemarh flagship store presentation with 25ml non-alcoholic roll-on.',
    price: 85
  },
  {
    id: 'gal-5',
    src: '/products/IMG-20261022-WA0170.jpg',
    title: 'Asad Black & Yara Candy Quad',
    category: 'Lattafa Luxury Set',
    desc: 'The iconic quartet: Asad Bourbon, Asad Black, Yara White & Yara Candy.',
    price: 195
  },
  {
    id: 'gal-6',
    src: '/products/IMG-20261022-WA0196.jpg',
    title: 'GK For Men Frosted Crystal',
    category: 'Eau de Parfum',
    desc: 'Frosted matte glass with polished chrome collar. Oceanic cedarwood matrix.',
    price: 130
  },
  {
    id: 'gal-7',
    src: '/products/IMG-20261022-WA0185.jpg',
    title: 'Grand Attar Vault (18 Concentrates)',
    category: 'Artisanal Oils',
    desc: 'Complete collection of pure perfume oils including Badel Oudh, Black Opium, and Rijali Misk.',
    price: 260
  },
  {
    id: 'gal-8',
    src: '/products/IMG-20261022-WA0173.jpg',
    title: 'Lamsa Floral Roll-On',
    category: 'Naseem Perfumes',
    desc: 'Pink damask filigree packaging with velvet touch jasmine attar.',
    price: 65
  },
  {
    id: 'gal-9',
    src: '/products/IMG-20261022-WA0187.jpg',
    title: 'Burmi Oudh Botanical Presentation',
    category: 'Pure Agarwood',
    desc: 'Aged Burmese agarwood in carved gold crystal applicator with decorative bonsai.',
    price: 95
  },
  {
    id: 'gal-10',
    src: '/products/IMG-20261022-WA0192.jpg',
    title: 'Mousuf Green & Riggs London',
    category: 'Body Mist & Spray Set',
    desc: 'Pistachio crush body mist paired with Riggs London Armour deodorant.',
    price: 120
  },
  {
    id: 'gal-11',
    src: '/products/IMG-20261022-WA0190.jpg',
    title: 'Mosuf Wardi & Sara Deodorant',
    category: 'Floral Splendor',
    desc: 'Soft candied rose and berry mist with matching perfumed spray.',
    price: 90
  },
  {
    id: 'gal-12',
    src: '/products/IMG-20261022-WA0168.jpg',
    title: '9pm Rebel & Ameer Al Oudh Lineup',
    category: 'Global Fragrances',
    desc: 'Vintage Radio, Club de Nuit, and 9pm Rebel luxury deodorant display.',
    price: 55
  },
  {
    id: 'gal-13',
    src: '/products/IMG-20261022-WA0164.jpg',
    title: 'Be Sugar Sunflower Display',
    category: 'Gourmand Attar',
    desc: 'Sunlit mirror reflection featuring Naseem Be Sugar vanilla confection oil.',
    price: 48
  },
  {
    id: 'gal-14',
    src: '/products/IMG-20261022-WA0158.jpg',
    title: 'Maruf Pink Dual Flacons',
    category: 'Body Spray',
    desc: 'Pair of textured pink aerosol flacons with floral deodorizing protection.',
    price: 45
  },
  {
    id: 'gal-15',
    src: '/products/IMG-20261022-WA0150.jpg',
    title: 'Genie Baccarat & Vanilla Crush Set',
    category: 'Luxury Trio',
    desc: 'Genie Collection miniature Eau de Parfum, perfume oil, and Lasgidi body mist.',
    price: 110
  },
  {
    id: 'gal-16',
    src: '/products/IMG-20261022-WA0200.jpg',
    title: 'Seemarh Scents Royal Gold Emblem',
    category: 'Official Maison Identity',
    desc: 'The official circular gold seal of Seemarh Scents Haute Parfumerie.',
    price: 240
  }
];

export default function GallerySection({ onAddToCart }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  };

  const handlePrev = () => {
    setSelectedImageIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  const handleBuyCurrent = (item) => {
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#c59d4c', '#e5d1a7', '#ffb6c1']
    });

    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);

    onAddToCart({
      id: item.id,
      title: item.title,
      subtitle: item.category,
      size: "Original Flacon",
      sizeName: item.category,
      price: item.price,
      engraving: null,
      giftWrap: true,
      image: item.src
    });
  };

  const currentItem = selectedImageIndex !== null ? GALLERY_ITEMS[selectedImageIndex] : null;

  return (
    <section id="gallery" className="relative py-28 px-6 sm:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-white/10 text-gold-300 text-[10px] font-mono tracking-[0.25em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Maison Seemarh Lookbook</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white uppercase tracking-wider font-light">
            Artisanal Scent Gallery
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-3 font-light leading-relaxed">
            Explore the authentic photography of our physical collection. Click on any fragrance to inspect its formulation details or reserve a bottle.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
              onClick={() => openLightbox(index)}
              className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-gold-400/50 cursor-pointer aspect-square bg-black/40 backdrop-blur-xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-gold-950/40"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-5" />

              {/* Hover Overlay Content */}
              <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="flex justify-between items-start">
                  <span className="text-[9px] uppercase font-mono tracking-widest text-gold-300 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10">
                    {item.category}
                  </span>
                  <div className="p-2 rounded-full bg-black/60 text-white">
                    <Maximize2 className="w-3.5 h-3.5 text-gold-400" />
                  </div>
                </div>

                <div>
                  <h4 className="text-sm sm:text-base font-serif text-white uppercase tracking-wider mb-1">
                    {item.title}
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-serif text-gold-300 font-medium">
                      ${item.price}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">
                      Tap to View
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 240 }}
              className="relative max-w-4xl w-full glass-panel-gold rounded-3xl border border-gold-400/30 overflow-hidden shadow-2xl flex flex-col md:flex-row bg-[#0c0d10]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev / Next buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/70 hover:bg-neutral-800 text-gold-300 transition-colors border border-white/10 hidden sm:flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/70 hover:bg-neutral-800 text-gold-300 transition-colors border border-white/10 hidden sm:flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Image Preview */}
              <div className="md:w-1/2 h-80 md:h-[500px] relative bg-black/50 flex items-center justify-center overflow-hidden">
                <img
                  src={currentItem.src}
                  alt={currentItem.title}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              {/* Details & Actions */}
              <div className="md:w-1/2 p-6 sm:p-10 flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold-400">
                      {currentItem.category}
                    </span>
                    <span className="text-neutral-600">•</span>
                    <span className="text-[10px] font-mono text-neutral-400">
                      {selectedImageIndex + 1} of {GALLERY_ITEMS.length}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif text-white uppercase tracking-wider mb-3">
                    {currentItem.title}
                  </h3>

                  <div className="text-2xl font-serif text-gold-gradient font-light mb-4">
                    ${currentItem.price}
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed mb-6 font-light">
                    {currentItem.desc}
                  </p>

                  <div className="p-3.5 rounded-xl glass-panel border border-white/10 text-xs text-neutral-300 space-y-1 mb-6">
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Collection Origin</span>
                      <span className="text-white font-serif">Maison Seemarh Atelier</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Packaging</span>
                      <span className="text-pink-300">Seemarh Boutique Gift Wrap</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2.5">
                  <button
                    onClick={() => handleBuyCurrent(currentItem)}
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-amber-400 to-yellow-400 text-black font-sans font-semibold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-xl hover:brightness-110 transition-all duration-300"
                  >
                    {addedAnimation ? (
                      <>
                        <Check className="w-4 h-4 stroke-[3]" />
                        <span>Added to Luxury Bag!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Bag • ${currentItem.price}</span>
                      </>
                    )}
                  </button>

                  <a
                    href={createWhatsAppOrderLink({
                      title: currentItem.title,
                      subtitle: currentItem.category,
                      size: "Standard Flacon",
                      price: currentItem.price,
                      image: currentItem.src
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-sans font-semibold text-xs uppercase tracking-[0.18em] flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Order on WhatsApp (09025728209)</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

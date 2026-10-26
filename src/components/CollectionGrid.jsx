import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Star, Sparkles, Filter, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export const SEEMARH_COLLECTION = [
  {
    id: '9pm-night-out',
    title: "9pm Night Out",
    subtitle: "Afnan • Extrait de Parfum (100ml)",
    category: "parfum",
    categoryLabel: "Eau de Parfum",
    desc: "A magnetic nocturnal blend of crisp wild apple, spicy cinnamon, wild lavender, and rich amber vanilla.",
    price: 185,
    tag: "Bestseller",
    rating: 4.98,
    image: "/products/IMG-20261022-WA0149.jpg",
    accords: ["Amber", "Vanilla", "Spicy Cinnamon", "Wild Apple"]
  },
  {
    id: 'mosuf-luxe',
    title: "Mosuf Luxe",
    subtitle: "Mousuf Paris • Eau de Parfum (50ml)",
    category: "parfum",
    categoryLabel: "Eau de Parfum",
    desc: "Precious sapphire bottle. Radiant Damascus floral notes with velvety oud and caramel amber undertones.",
    price: 145,
    tag: "Exclusive",
    rating: 4.96,
    image: "/products/IMG-20261022-WA0194.jpg",
    accords: ["Floral Amber", "Caramel", "Oud Resin", "Clean Musk"]
  },
  {
    id: 'bakarat-rouge-540',
    title: "Bakarat Rouge 540",
    subtitle: "Smart Chandelier Edition • Spray (200ml)",
    category: "spray",
    categoryLabel: "Body Spray",
    desc: "The legendary amber-floral crystal aroma with radiant saffron, jasmine sambac, and warm cedarwood.",
    price: 75,
    tag: "Iconic",
    rating: 4.99,
    image: "/products/IMG-20261022-WA0188.jpg",
    accords: ["Ambergris", "Saffron Glow", "Cedarwood", "Jasmine"]
  },
  {
    id: 'gk-for-men',
    title: "GK For Men",
    subtitle: "Eau de Parfum (50ml)",
    category: "parfum",
    categoryLabel: "Eau de Parfum",
    desc: "Crisp architectural frosted flacon. Refreshing Italian bergamot, aquatic ocean breeze, and woody musk.",
    price: 130,
    tag: "New Arrival",
    rating: 4.93,
    image: "/products/IMG-20261022-WA0196.jpg",
    accords: ["Bergamot", "Ocean Fresh", "Cedar", "White Musk"]
  },
  {
    id: 'royal-black-attar',
    title: "Royal Black",
    subtitle: "Almas Perfume • Attar Roll-On (25ml)",
    category: "attar",
    categoryLabel: "Concentrated Attar",
    desc: "Pure concentrated non-alcoholic royal attar. Smoked dark oud, antique leather, and resinous amber.",
    price: 85,
    tag: "Alcohol-Free",
    rating: 4.97,
    image: "/products/IMG-20261022-WA0171.jpg",
    accords: ["Smoked Oud", "Black Leather", "Dark Amber", "Herbal"]
  },
  {
    id: 'mosuf-wardi',
    title: "Mosuf Wardi & Sara",
    subtitle: "Tom & Darin • Perfumed Spray & Parfum",
    category: "spray",
    categoryLabel: "Body Spray",
    desc: "Delicate candied pink rose petals, sparkling wild berries, and soft cashmeran vanilla.",
    price: 90,
    tag: "Trending",
    rating: 4.94,
    image: "/products/IMG-20261022-WA0190.jpg",
    accords: ["Pink Rose", "Candied Berry", "Vanilla Orchid", "Musk"]
  },
  {
    id: 'mousuf-green-armour',
    title: "Mousuf Green & Armour",
    subtitle: "Riggs London & Pistachio Crush Set",
    category: "set",
    categoryLabel: "Luxury Set",
    desc: "Fresh botanical greenery, roasted pistachio mist, and charismatic masculine wood notes.",
    price: 120,
    tag: "Curated Set",
    rating: 4.92,
    image: "/products/IMG-20261022-WA0192.jpg",
    accords: ["Pistachio", "Green Leaves", "Fresh Cedar", "Amber"]
  },
  {
    id: 'asad-yara-collection',
    title: "Asad & Yara Luxe Edition",
    subtitle: "Lattafa Quad • Asad Black & Yara Candy",
    category: "parfum",
    categoryLabel: "Eau de Parfum",
    desc: "The viral luxury sensation. Smoky black pepper, bourbon vanilla, whipped strawberry cream, and tropical fruits.",
    price: 195,
    tag: "Viral Sensation",
    rating: 5.0,
    image: "/products/IMG-20261022-WA0170.jpg",
    accords: ["Bourbon Vanilla", "Whipped Cream", "Black Pepper", "Oud"]
  },
  {
    id: 'lamsa-roll-on',
    title: "Lamsa Roll-On",
    subtitle: "Naseem Perfumes • Attar Roll-On (24ml)",
    category: "attar",
    categoryLabel: "Concentrated Attar",
    desc: "Sensual floral touch with blooming white jasmine, ripe peaches, and powdered silken musk.",
    price: 65,
    tag: "Pure Oil",
    rating: 4.91,
    image: "/products/IMG-20261022-WA0173.jpg",
    accords: ["Jasmine", "Sweet Peach", "Powder Musk", "Honey"]
  },
  {
    id: 'bushra-roll-on',
    title: "Bushra Attar",
    subtitle: "Almas Perfume • Roll-On (25ml)",
    category: "attar",
    categoryLabel: "Concentrated Attar",
    desc: "Radiant celebration fragrance. Saffron strands, sweet amber resin, and warm sandalwood.",
    price: 70,
    tag: "Oriental",
    rating: 4.95,
    image: "/products/IMG-20261022-WA0175.jpg",
    accords: ["Golden Amber", "Saffron", "Sandalwood", "Rose"]
  },
  {
    id: 'azhar-roll-on',
    title: "Azhar Attar",
    subtitle: "Naseem Perfumes • Roll-On (24ml)",
    category: "attar",
    categoryLabel: "Concentrated Attar",
    desc: "Spring blossoms in liquid gold. Neroli, orange blossom, cardamom, and soft woody amber.",
    price: 68,
    tag: "Floral Glow",
    rating: 4.89,
    image: "/products/IMG-20261022-WA0177.jpg",
    accords: ["Orange Blossom", "Neroli", "Cardamom", "Amber"]
  },
  {
    id: 'burmi-oudh',
    title: "Burmi Oudh",
    subtitle: "Almas Perfume • Pure Attar (6ml)",
    category: "attar",
    categoryLabel: "Concentrated Attar",
    desc: "Authentic Burmese agarwood distillation. Deep, woody, mystical, and long-lasting for 24+ hours.",
    price: 95,
    tag: "Rare Oudh",
    rating: 4.97,
    image: "/products/IMG-20261022-WA0187.jpg",
    accords: ["Burmese Oudh", "Smoked Wood", "Balsam", "Resin"]
  },
  {
    id: 'maruf-pink',
    title: "Maruf Pink Deodorant",
    subtitle: "Tom & Darin • Spray (200ml)",
    category: "spray",
    categoryLabel: "Body Spray",
    desc: "Instant refreshing burst of sweet florals and pink fruits with all-day deodorizing protection.",
    price: 45,
    tag: "Daily Luxury",
    rating: 4.88,
    image: "/products/IMG-20261022-WA0158.jpg",
    accords: ["Pink Rose", "Fruity Floral", "Clean Cotton"]
  },
  {
    id: 'global-fragrance-9pm',
    title: "9pm Rebel & Ameer Al Oudh",
    subtitle: "Global Collection • Deodorant (200ml)",
    category: "spray",
    categoryLabel: "Body Spray",
    desc: "The rebellious duo. Bold spiced woods and rich oriental oud in a high-diffusion spray.",
    price: 55,
    tag: "High Projection",
    rating: 4.92,
    image: "/products/IMG-20261022-WA0168.jpg",
    accords: ["Ameer Oudh", "Spiced Rebel", "Amber", "Woods"]
  },
  {
    id: 'be-sugar',
    title: "Be Sugar Roll-On",
    subtitle: "Naseem Perfumes • Attar (6ml)",
    category: "attar",
    categoryLabel: "Concentrated Attar",
    desc: "Gourmand confection ecstasy. Spun sugar, marshmallow nectar, and warm Madagascan vanilla.",
    price: 48,
    tag: "Sweet Gourmand",
    rating: 4.94,
    image: "/products/IMG-20261022-WA0164.jpg",
    accords: ["Spun Sugar", "Vanilla", "Caramel", "Marshmallow"]
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Scents' },
  { id: 'parfum', label: 'Eau de Parfum' },
  { id: 'attar', label: 'Concentrated Attars' },
  { id: 'spray', label: 'Body Sprays' },
  { id: 'set', label: 'Curated Sets' },
];

export default function CollectionGrid({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? SEEMARH_COLLECTION
    : SEEMARH_COLLECTION.filter(p => p.category === activeCategory);

  const handleQuickAdd = (product) => {
    confetti({
      particleCount: 60,
      spread: 65,
      origin: { y: 0.8 },
      colors: ['#c59d4c', '#e5d1a7', '#ffb6c1']
    });

    onAddToCart({
      id: product.id,
      title: product.title,
      subtitle: product.subtitle,
      size: product.subtitle.match(/\((.*?)\)/)?.[1] || "Full Flacon",
      sizeName: product.categoryLabel,
      price: product.price,
      engraving: null,
      giftWrap: true,
      image: product.image
    });
  };

  return (
    <section id="collection" className="relative py-28 px-6 sm:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold-400">
                Seemarh Fragrance Archive
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-white uppercase tracking-wider font-light">
              The Grand Collection
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-300 font-sans max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            Authentic Seemarh Scents photographed directly from our atelier shelves. Each formulation features pure essences aged to perfection.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <Filter className="w-3.5 h-3.5 text-neutral-500 mr-2 flex-shrink-0" />
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-[11px] font-sans tracking-widest uppercase transition-all duration-300 whitespace-nowrap border ${
                activeCategory === cat.id
                  ? 'bg-gold-500 text-black border-gold-400 font-semibold shadow-lg shadow-gold-500/20'
                  : 'glass-panel text-neutral-300 border-white/10 hover:border-gold-400/40 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid (10 - 15 Real Scents) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="glass-panel p-5 rounded-3xl border border-white/10 hover:border-gold-400/50 transition-all duration-300 flex flex-col justify-between group backdrop-blur-xl hover:shadow-2xl hover:shadow-gold-950/30"
              >
                <div>
                  {/* Real Product Image Container */}
                  <div className="w-full h-56 rounded-2xl overflow-hidden relative mb-4 bg-black/40 border border-white/10 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                    
                    {/* Badge */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-gold-400/30 text-[9px] font-mono uppercase tracking-wider text-gold-300">
                      {product.tag}
                    </span>

                    {/* Rating */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[11px] text-amber-300 font-mono">
                      <Star className="w-3 h-3 fill-current" />
                      <span>{product.rating}</span>
                    </div>
                  </div>

                  {/* Scent Title */}
                  <h3 className="text-lg font-serif text-white uppercase tracking-wider mb-0.5 group-hover:text-gold-300 transition-colors">
                    {product.title}
                  </h3>

                  <span className="text-[10px] font-mono text-gold-400/90 uppercase tracking-widest block mb-2.5">
                    {product.subtitle}
                  </span>

                  <p className="text-xs text-neutral-400 font-sans leading-relaxed mb-4 line-clamp-2">
                    {product.desc}
                  </p>

                  {/* Accords tags */}
                  <div className="flex flex-wrap gap-1 mb-5">
                    {product.accords.map((accord) => (
                      <span
                        key={accord}
                        className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 text-neutral-300 border border-white/10 font-sans"
                      >
                        {accord}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Price & Add to Bag */}
                <div className="pt-3.5 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-xl font-serif text-white font-medium">${product.price}</span>
                    <span className="text-[9px] text-neutral-400 block font-mono">Official Box Included</span>
                  </div>

                  <button
                    onClick={() => handleQuickAdd(product)}
                    className="p-2.5 rounded-full bg-gold-500/10 hover:bg-gold-500 hover:text-black text-gold-300 border border-gold-400/30 transition-all duration-300 group/btn"
                    title={`Add ${product.title} to Bag`}
                  >
                    <ShoppingBag className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

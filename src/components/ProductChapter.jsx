import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Sparkles, Gift, Check, Truck, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

const SIZES = [
  { id: '30ml', label: '30ml', name: 'Travel Flacon', price: 95, subtitle: 'Pocket Luxury' },
  { id: '50ml', label: '50ml', name: 'Signature Flacon', price: 175, subtitle: 'Most Coveted', popular: true },
  { id: '100ml', label: '100ml', name: 'Grand Extrait', price: 260, subtitle: 'Connoisseur Reserve' },
];

export default function ProductChapter({ onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState(SIZES[1]);
  const [engraving, setEngraving] = useState('');
  const [includeGiftWrap, setIncludeGiftWrap] = useState(true);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAdd = () => {
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.8 },
      colors: ['#c59d4c', '#e5d1a7', '#ffb6c1', '#ffffff']
    });

    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1600);

    onAddToCart({
      id: `lor-nocturne-${selectedSize.id}`,
      title: "L'Or Nocturne",
      subtitle: "Pure Extrait de Parfum",
      size: selectedSize.label,
      sizeName: selectedSize.name,
      price: selectedSize.price,
      engraving: engraving.trim() || null,
      giftWrap: includeGiftWrap,
      image: "/frames/ezgif-frame-200.jpg"
    });
  };

  return (
    <div id="showcase" className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 py-24">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Story & Flacon Details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-white/15 text-gold-300 text-[10px] font-mono tracking-[0.25em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Phase IV • The Masterpiece</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white uppercase tracking-wider font-light leading-tight mb-4">
            L'Or Nocturne
            <span className="block text-gold-gradient font-serif italic text-2xl sm:text-3xl mt-1">
              Extrait de Parfum
            </span>
          </h2>

          <p className="text-sm text-neutral-300 font-sans leading-relaxed mb-6 font-light">
            Crafted for the brand Seemarh. Hand-poured into heavy architectural crystal and crowned with our signature 24-karat gold-plated collar. 
            Delivered in the official blush pink boutique bag as showcased in our presentation.
          </p>

          {/* Live Engraving Plate Preview */}
          <div className="p-4 rounded-2xl glass-panel border border-gold-400/20 mb-6 bg-gradient-to-r from-black/50 via-gold-950/20 to-black/50">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1.5">
              Simulated Laser Engraved Plaque
            </span>
            <div className="py-2.5 px-4 rounded-xl border border-gold-500/40 bg-[#14110b] flex items-center justify-center text-center">
              <span className="font-serif tracking-[0.3em] text-gold-gradient uppercase text-sm sm:text-base font-medium">
                {engraving ? engraving : "SEEMARH • ÉDITION LIMITÉE"}
              </span>
            </div>
          </div>

          <div className="space-y-2.5 text-xs text-neutral-400 font-sans">
            <div className="flex items-center gap-2 text-pink-300">
              <Gift className="w-4 h-4 flex-shrink-0" />
              <span>Includes the official <strong>Seemarh Blush Pink Gift Bag</strong></span>
            </div>
            <div className="flex items-center gap-2 text-gold-300">
              <Sparkles className="w-4 h-4 flex-shrink-0 text-gold-400" />
              <span>Complimentary 2x 2ml discovery vials with every order</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 flex-shrink-0 text-neutral-400" />
              <span>Complimentary insured express courier shipping worldwide</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Luxury Customizer Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 glass-panel-gold p-7 sm:p-9 rounded-3xl border border-gold-400/30 relative shadow-2xl backdrop-blur-2xl"
        >
          {/* Header Info */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-white/10 pb-5 mb-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold-400 block mb-1">
                Batch No. 04 / Reserve
              </span>
              <h3 className="text-2xl font-serif text-white tracking-widest uppercase">
                Choose Volume
              </h3>
            </div>
            <div className="mt-2 sm:mt-0 text-left sm:text-right">
              <div className="text-3xl font-serif text-gold-gradient font-light">
                ${selectedSize.price}
              </div>
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-mono">
                Duty Free & Taxes Included
              </span>
            </div>
          </div>

          {/* Size Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {SIZES.map((size) => {
              const isSelected = selectedSize.id === size.id;
              return (
                <button
                  key={size.id}
                  onClick={() => setSelectedSize(size)}
                  className={`p-4 rounded-2xl text-left border transition-all duration-300 relative ${
                    isSelected
                      ? 'bg-gold-500/20 border-gold-400 shadow-lg shadow-gold-500/10'
                      : 'bg-black/40 border-white/10 hover:border-gold-400/30'
                  }`}
                >
                  {size.popular && (
                    <span className="absolute -top-2 right-3 px-2 py-0.5 rounded-full bg-gold-400 text-black font-sans text-[8px] font-bold uppercase tracking-widest">
                      Most Coveted
                    </span>
                  )}
                  <div className="font-serif text-lg text-white mb-0.5">{size.label}</div>
                  <div className="text-[10px] text-gold-300 uppercase tracking-wider font-mono mb-2">{size.name}</div>
                  <div className="text-sm font-mono text-neutral-300 font-semibold">${size.price}</div>
                </button>
              );
            })}
          </div>

          {/* Bespoke Engraving Input */}
          <div className="mb-6">
            <label className="block text-xs font-sans uppercase tracking-widest text-neutral-300 mb-2 flex items-center justify-between">
              <span>Bespoke Bottle Engraving (Complimentary)</span>
              <span className="text-neutral-500 text-[10px] font-mono">Max 14 chars</span>
            </label>
            <input
              type="text"
              maxLength={14}
              value={engraving}
              onChange={(e) => setEngraving(e.target.value.toUpperCase())}
              placeholder="E.G. SEEMARH OR YOUR NAME"
              className="w-full bg-black/50 border border-white/15 focus:border-gold-400 rounded-xl px-4 py-3 text-sm text-gold-200 placeholder-neutral-600 font-mono tracking-widest outline-none transition-colors uppercase"
            />
          </div>

          {/* Gift Bag Checkbox */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-pink-950/25 border border-pink-500/25 mb-8">
            <div className="flex items-center gap-3">
              <Gift className="w-5 h-5 text-pink-400" />
              <div className="text-left">
                <p className="text-xs text-white font-medium">Official Seemarh Boutique Gift Bag</p>
                <p className="text-[11px] text-pink-200/70">Blush pink bag with luxury satin handle as presented in film</p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={includeGiftWrap}
              onChange={(e) => setIncludeGiftWrap(e.target.checked)}
              className="w-4 h-4 accent-gold-400 rounded cursor-pointer"
            />
          </div>

          {/* CTA Add to Bag */}
          <button
            onClick={handleAdd}
            className="w-full py-4 rounded-full bg-gradient-to-r from-gold-500 via-amber-400 to-yellow-400 hover:brightness-110 text-black font-sans font-semibold text-xs uppercase tracking-[0.25em] flex items-center justify-center gap-2 shadow-xl hover:shadow-gold-500/30 transition-all duration-300 group"
          >
            {addedAnimation ? (
              <>
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Reserved for Your Collection!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Reserve Flacon • ${selectedSize.price}</span>
              </>
            )}
          </button>
        </motion.div>
      </div>
    </div>
  );
}

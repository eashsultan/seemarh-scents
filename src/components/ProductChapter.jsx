import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Sparkles, Gift, Check, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
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
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#c59d4c', '#e5d1a7', '#ffb6c1', '#ffffff']
    });

    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);

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
    <div id="showcase" className="relative min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Brand Context / Video sync hint */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-5 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-gold-500/30 text-gold-300 text-[11px] tracking-[0.25em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Phase IV • The Signature Flacon</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white uppercase tracking-wider font-light leading-tight mb-4">
            L'Or Nocturne
            <span className="block text-gold-gradient font-serif italic text-2xl sm:text-3xl mt-1">
              Extrait de Parfum
            </span>
          </h2>

          <p className="text-sm text-neutral-300 font-sans leading-relaxed mb-6">
            Hand-poured into heavy architectural crystal and crowned with our signature 24-karat gold-plated collar. 
            Accompanied by the iconic Seemarh blush pink boutique gift bag as showcased in our presentation.
          </p>

          <div className="p-4 rounded-2xl glass-panel border border-gold-500/20 mb-8 space-y-3 text-xs text-neutral-300">
            <div className="flex items-center gap-2.5">
              <Gift className="w-4 h-4 text-pink-300" />
              <span>Includes the official <strong>Seemarh Blush Pink Gift Bag</strong></span>
            </div>
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Complimentary 2x 2ml discovery vials with every order</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Truck className="w-4 h-4 text-gold-400" />
              <span>Complimentary insured worldwide courier shipping</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Flacon Customizer & Cart Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-7 glass-panel-gold p-6 sm:p-8 rounded-3xl border border-gold-500/40 relative shadow-2xl"
        >
          {/* Header Info */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-gold-500/20 pb-6 mb-6">
            <div>
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold-400 block mb-1">
                Batch No. 04 / Limited Reserve
              </span>
              <h3 className="text-2xl font-serif text-white tracking-widest uppercase">
                Select Flacon Volume
              </h3>
            </div>
            <div className="mt-2 sm:mt-0 text-left sm:text-right">
              <div className="text-3xl font-serif text-gold-gradient font-light">
                ${selectedSize.price}
              </div>
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest">
                Taxes & Duties Included
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
                      ? 'bg-gold-500/20 border-gold-400 shadow-md shadow-gold-500/10'
                      : 'bg-black/30 border-neutral-800 hover:border-gold-500/30'
                  }`}
                >
                  {size.popular && (
                    <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-gold-500 text-black font-sans text-[9px] font-bold uppercase tracking-wider">
                      Popular
                    </span>
                  )}
                  <div className="font-serif text-lg text-white mb-0.5">{size.label}</div>
                  <div className="text-[11px] text-gold-300 uppercase tracking-wider font-sans mb-2">{size.name}</div>
                  <div className="text-sm font-mono text-neutral-300">${size.price}</div>
                </button>
              );
            })}
          </div>

          {/* Bespoke Engraving Input */}
          <div className="mb-6">
            <label className="block text-xs font-sans uppercase tracking-widest text-neutral-300 mb-2 flex items-center justify-between">
              <span>Bespoke Bottle Engraving (Complimentary)</span>
              <span className="text-neutral-500 text-[10px]">Max 12 chars</span>
            </label>
            <input
              type="text"
              maxLength={12}
              value={engraving}
              onChange={(e) => setEngraving(e.target.value.toUpperCase())}
              placeholder="E.G. SEEMARH or INITIALS"
              className="w-full bg-black/40 border border-neutral-700 focus:border-gold-400 rounded-xl px-4 py-2.5 text-sm text-gold-200 placeholder-neutral-600 font-mono tracking-widest outline-none transition-colors"
            />
          </div>

          {/* Gift Bag Checkbox */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-pink-950/20 border border-pink-500/20 mb-8">
            <div className="flex items-center gap-3">
              <Gift className="w-5 h-5 text-pink-400" />
              <div className="text-left">
                <p className="text-xs text-white font-medium">Seemarh Signature Boutique Gift Wrap</p>
                <p className="text-[11px] text-pink-200/70">Luxury blush bag with satin ribbon & sealed wax card</p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={includeGiftWrap}
              onChange={(e) => setIncludeGiftWrap(e.target.checked)}
              className="w-4 h-4 accent-gold-500 rounded cursor-pointer"
            />
          </div>

          {/* CTA Add to Bag */}
          <button
            onClick={handleAdd}
            className="w-full py-4 rounded-full bg-gradient-to-r from-gold-500 via-amber-400 to-yellow-500 hover:from-gold-400 hover:to-yellow-400 text-black font-sans font-semibold text-xs uppercase tracking-[0.25em] flex items-center justify-center gap-2 shadow-xl hover:shadow-gold-500/30 transition-all duration-300 group"
          >
            {addedAnimation ? (
              <>
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Added to Luxury Bag!</span>
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

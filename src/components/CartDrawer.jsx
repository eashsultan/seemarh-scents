import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, Plus, Minus, Gift, Sparkles, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { createWhatsAppCartLink } from '../utils/whatsapp';

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = Math.round(subtotal * discount);
  const total = subtotal - discountAmount;

  const applyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'SEEMARH15') {
      setDiscount(0.15);
      setPromoSuccess('15% Seemarh Royal VIP Discount Applied!');
      setPromoError('');
    } else if (promoCode.trim().toUpperCase() === 'FIRSTSCENT') {
      setDiscount(0.10);
      setPromoSuccess('10% First Order Privilege Applied!');
      setPromoError('');
    } else {
      setPromoError('Invalid privilege code. Try SEEMARH15');
      setPromoSuccess('');
    }
  };

  const handleCheckout = () => {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#c59d4c', '#e5d1a7', '#ffb6c1', '#f59e0b', '#ffffff']
    });
    setCheckoutComplete(true);
  };

  const handleResetCheckout = () => {
    setCheckoutComplete(false);
    onClearCart();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 220 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[480px] bg-[#0c0d10] border-l border-gold-500/20 z-50 flex flex-col justify-between shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-gold-500/15 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-gold-400" />
                <h3 className="font-serif text-xl text-white uppercase tracking-wider">
                  Your Fragrance Bag
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {checkoutComplete ? (
                <div className="text-center py-12 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400 mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-serif text-white uppercase tracking-wider mb-2">
                    Order Reserved
                  </h4>
                  <p className="text-xs text-neutral-300 font-sans max-w-sm mb-6 leading-relaxed">
                    Thank you for choosing <strong>Seemarh Scents</strong>. Your artisanal flacon is being hand-prepared, boxed in our signature blush pink gift packaging, and dispatched with insured express courier.
                  </p>
                  <div className="p-4 rounded-xl glass-panel-gold border border-gold-500/30 text-xs text-gold-300 font-mono mb-8">
                    Reservation Ref: #SEEMARH-{(Math.random() * 90000 + 10000).toFixed(0)}
                  </div>
                  <button
                    onClick={handleResetCheckout}
                    className="px-8 py-3 rounded-full bg-gold-500 text-black font-sans text-xs uppercase tracking-widest font-semibold hover:bg-gold-400 transition-colors"
                  >
                    Continue Exploring
                  </button>
                </div>
              ) : cart.length === 0 ? (
                <div className="text-center py-16 flex flex-col items-center">
                  <ShoppingBag className="w-12 h-12 text-neutral-600 mb-4" />
                  <p className="text-neutral-400 font-serif text-lg tracking-wider mb-2">Your Bag is Empty</p>
                  <p className="text-xs text-neutral-500 font-sans max-w-xs mb-6">
                    Awaken your presence with a bespoke Seemarh Extrait flacon.
                  </p>
                  <a
                    href="#showcase"
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-full border border-gold-500/30 text-gold-300 text-xs font-sans uppercase tracking-widest hover:bg-gold-500/10 transition-colors"
                  >
                    Explore L'Or Nocturne
                  </a>
                </div>
              ) : (
                <>
                  {/* Cart Items List */}
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="p-4 rounded-2xl glass-panel border border-gold-500/15 flex gap-4 items-center"
                      >
                        <img
                          src={item.image || "/products/IMG-20261022-WA0149.jpg"}
                          alt={item.title}
                          className="w-16 h-16 rounded-xl object-cover border border-gold-500/20 bg-neutral-900"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-serif text-white uppercase tracking-wider truncate">
                            {item.title}
                          </h4>
                          <span className="text-[11px] text-gold-400 font-mono block">
                            {item.size} • ${item.price}
                          </span>
                          {item.engraving && (
                            <span className="text-[10px] text-pink-300/80 font-mono block mt-0.5">
                              Engraving: "{item.engraving}"
                            </span>
                          )}

                          <div className="flex items-center gap-3 mt-2">
                            <div className="flex items-center border border-neutral-700 rounded-lg">
                              <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                className="p-1 hover:text-gold-400 text-neutral-400"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-2 text-xs font-mono text-white">{item.quantity}</span>
                              <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                className="p-1 hover:text-gold-400 text-neutral-400"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            <button
                              onClick={() => onRemoveItem(item.id)}
                              className="text-neutral-500 hover:text-rose-400 transition-colors"
                              title="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        <div className="text-right font-serif text-white text-base">
                          ${item.price * item.quantity}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Privilege Promo Code */}
                  <form onSubmit={applyPromo} className="pt-2">
                    <label className="text-[10px] uppercase tracking-widest text-neutral-400 block mb-1">
                      Privilege Promo Code (Try: SEEMARH15)
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="ENTER CODE"
                        className="flex-1 bg-black/40 border border-neutral-700 focus:border-gold-400 rounded-xl px-3 py-2 text-xs font-mono text-gold-300 outline-none uppercase"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-xl bg-gold-500/20 hover:bg-gold-500/30 text-gold-300 border border-gold-500/30 text-xs font-sans uppercase tracking-widest"
                      >
                        Apply
                      </button>
                    </div>
                    {promoSuccess && <p className="text-[11px] text-emerald-400 mt-1 font-mono">{promoSuccess}</p>}
                    {promoError && <p className="text-[11px] text-rose-400 mt-1 font-mono">{promoError}</p>}
                  </form>

                  {/* Included Luxuries */}
                  <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-2 text-xs text-neutral-400">
                    <div className="flex items-center gap-2 text-pink-300">
                      <Gift className="w-4 h-4" />
                      <span>Complimentary Seemarh Blush Pink Gift Packaging Included</span>
                    </div>
                    <div className="flex items-center gap-2 text-gold-400">
                      <Sparkles className="w-4 h-4" />
                      <span>Includes 2 complimentary 2ml extrait samples</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Footer / Total & Checkout */}
            {!checkoutComplete && cart.length > 0 && (
              <div className="p-6 border-t border-gold-500/15 bg-neutral-950/80 space-y-4">
                <div className="space-y-1.5 text-xs text-neutral-400">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-mono text-white">${subtotal}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-400">
                      <span>Privilege VIP Discount (15%)</span>
                      <span className="font-mono">-${discountAmount}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Worldwide Express Delivery</span>
                    <span className="text-gold-400 uppercase font-mono">Complimentary</span>
                  </div>
                  <div className="pt-2 border-t border-neutral-800 flex justify-between text-base font-serif text-white">
                    <span>Total</span>
                    <span className="text-xl text-gold-gradient font-light font-serif">${total}</span>
                  </div>
                </div>

                {/* WhatsApp Direct Order Button */}
                <a
                  href={createWhatsAppCartLink(cart, total)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-500 hover:to-green-500 text-white font-sans font-semibold text-xs uppercase tracking-[0.18em] flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 hover:scale-[1.01] transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Order Bag via WhatsApp</span>
                </a>

                {/* Instant Checkout Simulation */}
                <button
                  onClick={handleCheckout}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-amber-400 to-yellow-500 text-black font-sans font-semibold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-lg hover:shadow-gold-500/30 hover:scale-[1.01] transition-all duration-300"
                >
                  <span>Pay Online Directly</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

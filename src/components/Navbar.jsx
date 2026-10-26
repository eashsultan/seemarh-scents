import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 transition-all duration-500 pointer-events-none">
        <div
          className={`max-w-6xl mx-auto px-5 sm:px-7 py-3 rounded-full transition-all duration-500 flex items-center justify-between pointer-events-auto ${
            scrolled
              ? 'glass-panel border border-white/15 bg-black/60 shadow-2xl backdrop-blur-2xl'
              : 'glass-panel border border-white/10 bg-black/30 backdrop-blur-md'
          }`}
        >
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-7 h-7 rounded-full border border-gold-400/50 flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
              <span className="text-gold-300 font-serif text-xs">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base tracking-[0.22em] text-white font-medium group-hover:text-gold-300 transition-colors uppercase">
                Seemarh
              </span>
              <span className="text-[8px] tracking-[0.3em] text-gold-400/80 uppercase font-sans -mt-1">
                Haute Parfumerie
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-[11px] tracking-[0.2em] uppercase font-sans text-neutral-300">
            <a href="#experience" className="hover:text-gold-300 transition-colors">Cinema</a>
            <a href="#atomizer" className="hover:text-gold-300 transition-colors">Micro-Mist</a>
            <a href="#olfactive" className="hover:text-gold-300 transition-colors">Pyramid</a>
            <a href="#showcase" className="hover:text-gold-300 transition-colors">The Flacon</a>
            <a href="#collection" className="hover:text-gold-300 transition-colors">Collection</a>
            <a href="#story" className="hover:text-gold-300 transition-colors">Maison</a>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3">
            <a
              href="#showcase"
              className="hidden lg:flex items-center gap-1 text-[10px] uppercase font-sans tracking-widest text-gold-300 hover:text-white px-3 py-1 rounded-full border border-gold-400/30 hover:border-gold-400/60 transition-all"
            >
              <span>Reserve</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-full hover:bg-gold-500/10 transition-colors border border-white/10 hover:border-gold-400/40 text-gold-300 flex items-center gap-2 group"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
              <span className="hidden sm:inline text-[10px] font-sans tracking-widest uppercase">Bag</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gold-400 text-black font-mono text-[9px] font-bold flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full border border-white/10 text-neutral-300 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-[#07080a]/95 backdrop-blur-2xl pt-28 px-8 flex flex-col justify-between pb-12 md:hidden"
          >
            <div className="flex flex-col gap-6 text-sm tracking-[0.25em] uppercase font-serif text-neutral-200">
              <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold-400 py-2 border-b border-white/10">Cinema Experience</a>
              <a href="#atomizer" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold-400 py-2 border-b border-white/10">The Micro-Mist</a>
              <a href="#olfactive" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold-400 py-2 border-b border-white/10">Olfactive Notes</a>
              <a href="#showcase" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold-400 py-2 border-b border-white/10">Signature Flacon</a>
              <a href="#collection" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold-400 py-2 border-b border-white/10">Grand Collection</a>
              <a href="#story" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold-400 py-2 border-b border-white/10">Maison Seemarh</a>
            </div>

            <div className="pt-6 border-t border-gold-500/20 text-center">
              <p className="text-xs text-gold-400 font-serif tracking-widest uppercase mb-1">Seemarh Scents</p>
              <p className="text-[10px] text-neutral-500 font-mono tracking-wider">Édition Limitée • 2026</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Sparkles, Menu, X, Heart } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? 'py-3.5 bg-[#07080a]/80 backdrop-blur-md border-b border-gold-500/15' : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full border border-gold-400/40 flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
              <span className="text-gold-400 font-serif text-sm">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl tracking-[0.25em] text-white font-medium group-hover:text-gold-300 transition-colors uppercase">
                Seemarh
              </span>
              <span className="text-[9px] tracking-[0.35em] text-gold-400/80 uppercase font-sans -mt-1">
                Scents • Haute Parfumerie
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] uppercase font-sans text-neutral-300">
            <a href="#experience" className="hover:text-gold-300 transition-colors">The Experience</a>
            <a href="#atomizer" className="hover:text-gold-300 transition-colors">The Micro-Mist</a>
            <a href="#olfactive" className="hover:text-gold-300 transition-colors">Notes</a>
            <a href="#showcase" className="hover:text-gold-300 transition-colors">Flacon</a>
            <a href="#collection" className="hover:text-gold-300 transition-colors">Collection</a>
            <a href="#story" className="hover:text-gold-300 transition-colors">Maison</a>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full hover:bg-gold-500/10 transition-colors border border-gold-500/20 text-gold-300 flex items-center gap-2 group"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span className="hidden sm:inline text-[11px] font-sans tracking-widest uppercase">Bag</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gold-500 text-black font-mono text-[10px] font-bold flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-full border border-gold-500/20 text-gold-300 hover:bg-gold-500/10 transition-colors"
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
            className="fixed inset-0 z-30 bg-[#07080a]/95 backdrop-blur-xl pt-24 px-8 flex flex-col justify-between pb-12 md:hidden"
          >
            <div className="flex flex-col gap-6 text-sm tracking-[0.25em] uppercase font-serif text-neutral-200">
              <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold-400 py-2 border-b border-neutral-800">The Experience</a>
              <a href="#atomizer" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold-400 py-2 border-b border-neutral-800">The Micro-Mist</a>
              <a href="#olfactive" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold-400 py-2 border-b border-neutral-800">Olfactive Notes</a>
              <a href="#showcase" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold-400 py-2 border-b border-neutral-800">Signature Flacon</a>
              <a href="#collection" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold-400 py-2 border-b border-neutral-800">Grand Collection</a>
              <a href="#story" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold-400 py-2 border-b border-neutral-800">Maison Seemarh</a>
            </div>

            <div className="pt-6 border-t border-gold-500/20 text-center">
              <p className="text-xs text-gold-400/80 font-serif tracking-widest uppercase mb-2">Seemarh Scents</p>
              <p className="text-[11px] text-neutral-500 font-sans">Haute Parfumerie & Artisanal Extraits</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

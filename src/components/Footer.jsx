import React, { useState } from 'react';
import { Sparkles, ArrowRight, Mail, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-black/40 backdrop-blur-md border-t border-gold-500/20 text-neutral-400 font-sans pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="glass-panel-gold p-8 sm:p-12 rounded-3xl border border-gold-500/30 mb-20 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-[10px] tracking-[0.25em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Private Allocations & Invitations</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-serif text-white uppercase tracking-wider mb-3">
            Join The Seemarh Circle
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Receive exclusive access to seasonal micro-batches, private parfumier masterclasses, and an immediate 15% privilege code.
          </p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ENTER YOUR EMAIL"
              required
              className="flex-1 bg-black/50 border border-neutral-700 focus:border-gold-400 rounded-full px-5 py-3 text-xs font-mono text-gold-200 outline-none uppercase placeholder-neutral-600 tracking-wider"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-gold-500 to-amber-400 text-black text-xs uppercase tracking-widest font-semibold hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              {subscribed ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Subscribed</span>
                </>
              ) : (
                <>
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16 pb-12 border-b border-neutral-800 text-xs">
          {/* Brand Col */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-full border border-gold-400/40 flex items-center justify-center">
                <span className="text-gold-400 font-serif text-xs">S</span>
              </div>
              <span className="font-serif text-lg tracking-[0.25em] text-white uppercase">
                Seemarh
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed mb-4">
              High perfumery crafted for the brand Seemarh. Expressed through rare botanical oils, hand-poured crystal flacons, and lingering royal sillage.
            </p>
            <div className="flex items-center gap-3 text-gold-400">
              <a href="#" aria-label="Instagram" className="p-2 rounded-full border border-neutral-800 hover:border-gold-400 hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="p-2 rounded-full border border-neutral-800 hover:border-gold-400 hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" aria-label="Twitter / X" className="p-2 rounded-full border border-neutral-800 hover:border-gold-400 hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Nav Col 1 */}
          <div>
            <h4 className="font-serif text-white uppercase tracking-widest text-sm mb-4">The Parfumerie</h4>
            <ul className="space-y-2.5 text-neutral-400">
              <li><a href="#showcase" className="hover:text-gold-300 transition-colors">L'Or Nocturne (Extrait)</a></li>
              <li><a href="#collection" className="hover:text-gold-300 transition-colors">Rose Impériale</a></li>
              <li><a href="#collection" className="hover:text-gold-300 transition-colors">Blanc Séléné</a></li>
              <li><a href="#collection" className="hover:text-gold-300 transition-colors">Soleil d'Or</a></li>
              <li><a href="#showcase" className="hover:text-gold-300 transition-colors">Discovery Set & Samples</a></li>
            </ul>
          </div>

          {/* Nav Col 2 */}
          <div>
            <h4 className="font-serif text-white uppercase tracking-widest text-sm mb-4">Concierge & Craft</h4>
            <ul className="space-y-2.5 text-neutral-400">
              <li><a href="#atomizer" className="hover:text-gold-300 transition-colors">Micro-Mist Technology</a></li>
              <li><a href="#olfactive" className="hover:text-gold-300 transition-colors">Pyramid of Accords</a></li>
              <li><a href="#story" className="hover:text-gold-300 transition-colors">Sustainable Botanical Oils</a></li>
              <li><a href="#showcase" className="hover:text-gold-300 transition-colors">Bespoke Flacon Engraving</a></li>
              <li><a href="#" className="hover:text-gold-300 transition-colors">Complimentary Gift Packaging</a></li>
            </ul>
          </div>

          {/* Nav Col 3 */}
          <div>
            <h4 className="font-serif text-white uppercase tracking-widest text-sm mb-4">Maison Seemarh</h4>
            <ul className="space-y-2.5 text-neutral-400">
              <li><span className="text-neutral-500">Flagship Boutique:</span> London • Dubai • Lagos</li>
              <li><span className="text-neutral-500">Concierge Email:</span> atelier@seemarh.com</li>
              <li><span className="text-neutral-500">Dispatch:</span> Worldwide Insured Courier</li>
              <li><span className="text-neutral-500">Authenticity:</span> Serialized Batch Certificates</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 tracking-wider">
          <p>© 2026 Seemarh Scents. All rights reserved. Crafted for the brand Seemarh.</p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-neutral-300">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-300">Terms of Luxury Service</a>
            <a href="#" className="hover:text-neutral-300">Batch Authenticity</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

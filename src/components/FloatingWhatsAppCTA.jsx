import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Sparkles, Send } from 'lucide-react';
import { SEEMARH_WHATSAPP_NUMBER } from '../utils/whatsapp';

export default function FloatingWhatsAppCTA() {
  const [isOpen, setIsOpen] = useState(false);

  const defaultUrl = `https://wa.me/${SEEMARH_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Maison Seemarh! 🌸 I'm visiting your website and would like to inquire about your fragrance collection and place an order. ✨"
  )}`;

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start gap-3">
      {/* Popover Bubble */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="w-72 sm:w-80 glass-panel-gold p-4 rounded-2xl border border-emerald-500/40 shadow-2xl backdrop-blur-2xl text-left bg-[#0c0f0e]/95"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                  <MessageCircle className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <h4 className="text-xs font-serif text-white uppercase tracking-wider">Maison Seemarh Concierge</h4>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Online • 09025728209
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-neutral-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-neutral-300 font-sans leading-relaxed mb-4">
              Order directly with Seemarh on WhatsApp! Fast order confirmation, delivery arrangements, and bespoke fragrance consultation.
            </p>

            <a
              href={defaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-sans text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Chat & Order Now</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent Floating WhatsApp Pill Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center gap-2"
      >
        <a
          href={defaultUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-500 hover:to-green-500 text-white font-sans text-xs uppercase tracking-wider font-medium shadow-2xl shadow-emerald-900/50 border border-emerald-400/40 hover:scale-105 transition-all duration-300"
          title="Direct Order via WhatsApp (09025728209)"
        >
          <div className="relative">
            <MessageCircle className="w-4 h-4 fill-current text-white" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-amber-300 animate-pulse" />
          </div>
          <span className="font-semibold tracking-wide">Order via WhatsApp</span>
          <span className="hidden sm:inline text-[11px] font-mono text-emerald-200/90 pl-1 border-l border-emerald-400/30">
            09025728209
          </span>
        </a>

        {/* Toggle popup info */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full glass-panel border border-emerald-500/30 hover:border-emerald-400 text-emerald-400 hover:text-white transition-all bg-black/50"
          title="Info & Direct Chat"
        >
          <Sparkles className="w-3.5 h-3.5" />
        </button>
      </motion.div>
    </div>
  );
}

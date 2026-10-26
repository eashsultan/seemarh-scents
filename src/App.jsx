import React, { useState, useRef, useEffect } from 'react';
import { useScroll, useTransform, motion, AnimatePresence } from 'framer-motion';
import BackgroundFrameCanvas from './components/BackgroundFrameCanvas';
import Navbar from './components/Navbar';
import HeroChapter from './components/HeroChapter';
import AtomizerChapter from './components/AtomizerChapter';
import SensoryChapter from './components/SensoryChapter';
import ProductChapter from './components/ProductChapter';
import OlfactoryPyramid from './components/OlfactoryPyramid';
import CollectionGrid from './components/CollectionGrid';
import BrandStory from './components/BrandStory';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

export default function App() {
  const containerRef = useRef(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  // Framer motion scroll progress through the interactive scrub container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setCurrentProgress(latest);
      if (latest < 0.25) setActiveChapterIndex(0);
      else if (latest < 0.5) setActiveChapterIndex(1);
      else if (latest < 0.75) setActiveChapterIndex(2);
      else setActiveChapterIndex(3);
    });
  }, [scrollYProgress]);

  // Cart operations
  const handleAddToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: newQty } : i))
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#08090b] text-neutral-100 font-sans selection:bg-gold-500 selection:text-black">
      {/* Fixed Background Canvas: scrubs frames based on scroll */}
      <BackgroundFrameCanvas
        scrollProgress={currentProgress}
        activeSection={activeChapterIndex}
      />

      {/* Floating Header */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* 
        Scroll scrubbing container:
        400vh tall so user scrolls through 4 distinct visual chapters 
        synchronously controlling the 240 frames of the perfume video.
      */}
      <div id="experience" ref={containerRef} className="relative h-[420vh]">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none">
          <div className="w-full h-full pointer-events-auto flex items-center justify-center">
            {/* Chapter 1: The Genesis & Brand (0% - 25%) */}
            {activeChapterIndex === 0 && (
              <motion.div
                key="chapter-0"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.6 }}
                className="w-full"
              >
                <HeroChapter />
              </motion.div>
            )}

            {/* Chapter 2: The Atomizer & Micro-Mist (25% - 50%) */}
            {activeChapterIndex === 1 && (
              <motion.div
                key="chapter-1"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.6 }}
                className="w-full"
              >
                <AtomizerChapter />
              </motion.div>
            )}

            {/* Chapter 3: Sensory Awakening & Olfactory Bloom (50% - 75%) */}
            {activeChapterIndex === 2 && (
              <motion.div
                key="chapter-2"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.6 }}
                className="w-full"
              >
                <SensoryChapter />
              </motion.div>
            )}

            {/* Chapter 4: The Signature Flacon & Acquisition (75% - 100%) */}
            {activeChapterIndex === 3 && (
              <motion.div
                key="chapter-3"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.6 }}
                className="w-full"
              >
                <ProductChapter onAddToCart={handleAddToCart} />
              </motion.div>
            )}
          </div>
        </div>

        {/* Scroll Chapter Progress Indicators on Left */}
        <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-30 flex-col gap-6 pointer-events-auto">
          {[
            { label: '01 Genesis', index: 0 },
            { label: '02 Atomizer', index: 1 },
            { label: '03 Awakening', index: 2 },
            { label: '04 Flacon', index: 3 },
          ].map((ch) => (
            <div
              key={ch.index}
              className="flex items-center gap-3 group cursor-pointer"
              onClick={() => {
                const targetY = (ch.index / 3.2) * (containerRef.current?.offsetHeight || 1);
                window.scrollTo({ top: targetY, behavior: 'smooth' });
              }}
            >
              <div
                className={`h-px transition-all duration-300 ${
                  activeChapterIndex === ch.index
                    ? 'w-8 bg-gold-400'
                    : 'w-3 bg-neutral-600 group-hover:w-5 group-hover:bg-gold-500/50'
                }`}
              />
              <span
                className={`text-[10px] uppercase font-mono tracking-widest transition-colors ${
                  activeChapterIndex === ch.index
                    ? 'text-gold-300 font-bold'
                    : 'text-neutral-500 group-hover:text-neutral-300'
                }`}
              >
                {ch.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Deep-Dive Brand Sections */}
      <div className="relative z-20 bg-[#08090b]/90 backdrop-blur-xl">
        {/* Interactive Olfactory Pyramid */}
        <OlfactoryPyramid />

        {/* Grand Collection 4-Bottle Showcase */}
        <CollectionGrid onAddToCart={handleAddToCart} />

        {/* Brand Heritage & Craftsmanship */}
        <BrandStory />

        {/* Luxury Footer */}
        <Footer />
      </div>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}

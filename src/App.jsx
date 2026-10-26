import React, { useState, useEffect } from 'react';
import { useScroll, motion } from 'framer-motion';
import BackgroundFrameCanvas from './components/BackgroundFrameCanvas';
import Navbar from './components/Navbar';
import HeroChapter from './components/HeroChapter';
import AtomizerChapter from './components/AtomizerChapter';
import SensoryChapter from './components/SensoryChapter';
import ProductChapter from './components/ProductChapter';
import OlfactoryPyramid from './components/OlfactoryPyramid';
import CollectionGrid from './components/CollectionGrid';
import GallerySection from './components/GallerySection';
import BrandStory from './components/BrandStory';
import CartDrawer from './components/CartDrawer';
import FloatingWhatsAppCTA from './components/FloatingWhatsAppCTA';
import Footer from './components/Footer';

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);

  // Framer Motion global scroll listener across the ENTIRE webpage
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setCurrentProgress(latest);
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
    <div className="min-h-screen bg-transparent text-neutral-100 font-sans selection:bg-gold-500 selection:text-black relative">
      {/* 
        FIXED FULL-PAGE BACKGROUND CANVAS:
        Remains permanently fixed across the ENTIRE website.
        As the user scrolls down ANYWHERE on the site, 
        the background continuously plays/scrubs through the 240 video frames!
      */}
      <BackgroundFrameCanvas
        scrollProgress={currentProgress}
      />

      {/* Floating Header */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* 
        ALL SECTIONS ARE COMPLETELY TRANSLUCENT / GLASS OVER THE FIXED MOTION CANVAS.
        Every scroll movement on the page animates the background video!
      */}
      <main className="relative z-10">
        {/* Section 1: Hero & Genesis of Scent */}
        <section id="experience" className="relative min-h-screen flex items-center justify-center">
          <HeroChapter />
        </section>

        {/* Section 2: The Atomizer & Precision Micro-Mist */}
        <section id="atomizer" className="relative min-h-screen flex items-center justify-center">
          <AtomizerChapter />
        </section>

        {/* Section 3: Olfactory Accord Pyramid */}
        <section id="olfactive" className="relative">
          <OlfactoryPyramid />
        </section>

        {/* Section 4: Sensory Awakening & Intimacy */}
        <section id="sensory" className="relative min-h-screen flex items-center justify-center">
          <SensoryChapter />
        </section>

        {/* Section 5: The Signature Flacon Customizer & Purchase */}
        <section id="showcase" className="relative min-h-screen flex items-center justify-center">
          <ProductChapter onAddToCart={handleAddToCart} />
        </section>

        {/* Section 6: Grand Fragrance Collection (15 Real Scents) */}
        <section id="collection" className="relative">
          <CollectionGrid onAddToCart={handleAddToCart} />
        </section>

        {/* Section 7: Scent Gallery & Lookbook Lightbox */}
        <section id="gallery" className="relative">
          <GallerySection onAddToCart={handleAddToCart} />
        </section>

        {/* Section 8: Maison Seemarh Brand Story & Heritage */}
        <section id="story" className="relative">
          <BrandStory />
        </section>

        {/* Section 8: Luxury Footer */}
        <Footer />
      </main>

      {/* Floating Direct WhatsApp CTA Button */}
      <FloatingWhatsAppCTA />

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

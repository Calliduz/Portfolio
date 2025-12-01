import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Spring physics for smooth filling animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Optimization: Throttled scroll handler
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
            setShowBackToTop(window.scrollY > 400);
            ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile: Top Horizontal Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-black origin-left z-[60] md:hidden shadow-sm"
        style={{ scaleX: smoothProgress }}
      />
      
      {/* Desktop: Vertical Right Progress Bar Container */}
      <div className="fixed top-0 right-0 bottom-0 w-3 bg-gray-100/80 z-[60] hidden md:block backdrop-blur-sm border-l border-gray-200">
        {/* The Filling Bar */}
        <motion.div
          className="w-full bg-black origin-top absolute top-0 left-0 right-0"
          style={{ scaleY: smoothProgress, height: '100%' }}
        />
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-black text-white rounded-full shadow-lg hover:shadow-xl transition-shadow border border-gray-800"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollProgress;
import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageCurtainsContextType {
  triggerCurtain: (callback?: () => void) => void;
}

const PageCurtainsContext = createContext<PageCurtainsContextType | undefined>(undefined);

export const PageCurtainsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  // Initial load curtain reveal transition
  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 900);
    return () => clearTimeout(timer);
  }, []);

  const triggerCurtain = (callback?: () => void) => {
    setIsAnimating(true);
    setTimeout(() => {
      if (callback) callback();
    }, 450);
    setTimeout(() => {
      setIsAnimating(false);
    }, 950);
  };

  return (
    <PageCurtainsContext.Provider value={{ triggerCurtain }}>
      {children}
      <AnimatePresence mode="wait">
        {isAnimating && (
          <div className="fixed inset-0 z-[999999] pointer-events-none flex w-full h-full overflow-hidden">
            {/* Top Curtain Panel */}
            <motion.div
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 1 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              style={{ transformOrigin: 'top' }}
              className="absolute inset-x-0 top-0 h-1/2 bg-[#0A0A0C] border-b border-white/15 shadow-2xl flex items-end justify-center pb-6"
            >
              <div className="flex items-center gap-3">
                <img
                  src="/assets/zyra_logo.png"
                  alt="Zyra Store Logo"
                  className="w-10 h-10 object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] animate-pulse"
                />
                <span className="brand-logo-text font-heading font-black text-2xl text-white tracking-widest uppercase">
                  ZYRA STORE
                </span>
              </div>
            </motion.div>

            {/* Bottom Curtain Panel */}
            <motion.div
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 1 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              style={{ transformOrigin: 'bottom' }}
              className="absolute inset-x-0 bottom-0 h-1/2 bg-[#0A0A0C] border-t border-white/15 shadow-2xl flex items-start justify-center pt-6"
            >
              <span className="text-xs font-extrabold text-white/50 tracking-widest uppercase">
                High Performance FiveM NUI Resources
              </span>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </PageCurtainsContext.Provider>
  );
};

export const usePageCurtains = () => {
  const context = useContext(PageCurtainsContext);
  if (!context) {
    return {
      triggerCurtain: (cb?: () => void) => {
        if (cb) cb();
      },
    };
  }
  return context;
};

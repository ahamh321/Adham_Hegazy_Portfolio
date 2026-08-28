import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ContinuousScrollSpine: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Smooth out the progress physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  const [docHeight, setDocHeight] = useState<number>(4000);

  useEffect(() => {
    const updateHeight = () => {
      setDocHeight(document.documentElement.scrollHeight || 4000);
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden select-none">
      {/* Top micro progress indicator line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1px] bg-neutral-900/90 origin-left z-50"
        style={{ scaleX: smoothProgress }}
      />

      {/* Left Margin Weaving Spine (Desktop & Tablet) */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ height: `${docHeight}px` }}
      >
        {/* Static Background Guideline Path */}
        <line
          x1="24"
          y1="0"
          x2="24"
          y2={docHeight}
          stroke="#121212"
          strokeWidth="1"
          strokeOpacity="0.08"
          strokeDasharray="4 6"
          className="hidden md:block"
        />

        {/* Dynamic Continuous Drawing Monoline Spine matching container wrapping stroke */}
        <motion.line
          x1="24"
          y1="0"
          x2="24"
          y2={docHeight}
          stroke="#121212"
          strokeWidth="1"
          strokeLinecap="round"
          style={{ pathLength: smoothProgress }}
          className="hidden md:block"
        />
      </svg>
    </div>
  );
};

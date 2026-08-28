import React, { ReactNode, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  sectionNumber?: string;
  title?: string;
  delay?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  id,
  sectionNumber,
  title,
  delay = 0
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 90%', 'end 30%']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001
  });

  // Calculate draw progression around the component
  const pathLength = useTransform(smoothProgress, [0, 0.9], [0, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.08, 0.95], [0.3, 1, 0.9]);
  const flourishScale = useTransform(smoothProgress, [0, 0.5, 1], [0.6, 1, 1]);

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay,
          ease: [0.21, 0.47, 0.32, 0.98]
        }
      }}
      viewport={{ once: true, margin: '-60px' }}
      className={`relative my-8 sm:my-14 ${className}`}
    >
      {/* Artistically Wrapping One-Line Frame around this component */}
      <div className="absolute -inset-2 sm:-inset-5 pointer-events-none z-10 overflow-visible">
        <svg
          className="w-full h-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle guide line */}
          <rect
            x="6"
            y="6"
            width="calc(100% - 12px)"
            height="calc(100% - 12px)"
            rx="24"
            stroke="#121212"
            strokeWidth="1"
            strokeOpacity="0.08"
            strokeDasharray="4 6"
          />

          {/* Active drawing one-line perimeter wrapping the component on scroll */}
          <motion.rect
            x="6"
            y="6"
            width="calc(100% - 12px)"
            height="calc(100% - 12px)"
            rx="24"
            stroke="#121212"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              pathLength,
              opacity
            }}
          />

          {/* Top-Left Calligraphic Loop Wrap */}
          <motion.path
            d="M 6,36 C -10,36 -16,6 6,6 C 26,6 26,36 6,36"
            stroke="#121212"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            style={{
              pathLength: smoothProgress,
              opacity,
              scale: flourishScale
            }}
          />

          {/* Bottom-Right Calligraphic Exit Wrap & Connector Loop */}
          <g className="transform translate-x-[calc(100%-6px)] translate-y-[calc(100%-6px)]">
            <motion.path
              d="M 0,-30 C 16,-30 22,0 0,0 C -22,0 -22,-30 0,-30 C 15,-30 35,0 45,35"
              stroke="#121212"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              style={{
                pathLength: smoothProgress,
                opacity
              }}
            />
          </g>
        </svg>

        {/* Dynamic section indicator pill anchored on top of the wrapping line */}
        {sectionNumber && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 bg-[#fafaf7] border border-neutral-300 rounded-full font-mono text-[10px] uppercase tracking-widest text-neutral-700 flex items-center gap-2 shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
            <span>{sectionNumber}</span>
            {title && <span className="text-neutral-400">&bull; {title}</span>}
          </motion.div>
        )}
      </div>

      {/* Section Content inside the wrap */}
      <div className="relative z-20">
        {children}
      </div>
    </motion.section>
  );
};

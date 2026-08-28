import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

interface WrappingLineFrameProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  sectionNumber?: string;
  title?: string;
  variant?: 'curved' | 'loop' | 'bracket' | 'flow';
}

export const WrappingLineFrame: React.FC<WrappingLineFrameProps> = ({
  children,
  id,
  className = '',
  sectionNumber,
  title,
  variant = 'curved'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 25%']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001
  });

  // Calculate draw lengths
  const pathLength = useTransform(smoothProgress, [0, 0.95], [0, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.1, 0.95, 1], [0.2, 1, 1, 0.7]);
  const loopRotate = useTransform(smoothProgress, [0, 1], [0, 360]);

  return (
    <div
      ref={containerRef}
      id={id}
      className={`relative my-12 sm:my-20 ${className}`}
    >
      {/* Dynamic SVG Wrapping Line around this component */}
      <div className="absolute -inset-3 sm:-inset-6 pointer-events-none z-10 overflow-visible">
        <svg
          className="w-full h-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle faint background trace showing the full intended wrap */}
          <rect
            x="8"
            y="8"
            width="calc(100% - 16px)"
            height="calc(100% - 16px)"
            rx="28"
            stroke="#121212"
            strokeWidth="1"
            strokeOpacity="0.08"
            strokeDasharray="4 6"
          />

          {/* Active drawing line that wraps the component on scroll */}
          <motion.rect
            x="8"
            y="8"
            width="calc(100% - 16px)"
            height="calc(100% - 16px)"
            rx="28"
            stroke="#121212"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              pathLength,
              opacity
            }}
          />

          {/* Top-Left Artistic Flourish Loop */}
          <g transform="translate(8, 8)">
            <motion.path
              d="M -12,-4 C -20,-20 10,-20 8,0 C 6,15 -18,10 -12,-4"
              stroke="#121212"
              strokeWidth="1.4"
              fill="none"
              style={{
                pathLength: smoothProgress,
                opacity
              }}
            />
          </g>

          {/* Bottom-Right Artistic Exit Tail */}
          <g className="transform translate-x-[calc(100%-8px)] translate-y-[calc(100%-8px)]">
            <motion.path
              d="M 0,0 C 15,10 30,-5 20,-20 C 10,-35 -15,-10 0,0 C 20,10 40,40 50,80"
              stroke="#121212"
              strokeWidth="1.4"
              fill="none"
              style={{
                pathLength: smoothProgress,
                opacity
              }}
            />
          </g>
        </svg>

        {/* Lead Ink Droplet tracking the wrap */}
        <motion.div
          className="absolute -top-1 left-7 w-2.5 h-2.5 rounded-full bg-black shadow-xs pointer-events-none"
          style={{
            scale: useTransform(smoothProgress, [0, 0.05, 0.95, 1], [0, 1.2, 1, 0.8]),
            opacity: useTransform(smoothProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0.6])
          }}
        />

        {/* Section Marker Label floating on top of the wrapping line */}
        {sectionNumber && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute top-0 right-10 -translate-y-1/2 px-3 py-0.5 bg-[#fafaf7] border border-neutral-300/80 rounded-full font-mono text-[10px] uppercase tracking-widest text-neutral-600 flex items-center gap-1.5 shadow-2xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
            <span>{sectionNumber}</span>
            {title && <span className="text-neutral-400">&bull; {title}</span>}
          </motion.div>
        )}
      </div>

      {/* Actual Section Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 px-6 sm:px-10 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Interactive Continuous Wave Thread */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-60">
        <svg
          viewBox="0 0 1200 600"
          className="w-full h-full object-contain"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle monoline geometry grid lines */}
          <line x1="100" y1="300" x2="1100" y2="300" stroke="#eeeeea" strokeWidth="1" strokeDasharray="4 8" />
          <line x1="600" y1="50" x2="600" y2="550" stroke="#eeeeea" strokeWidth="1" strokeDasharray="4 8" />

          {/* Dynamic flowing continuous one-line curve across hero */}
          <motion.path
            d={`M -50,420 C 200,${380 + mousePos.y * 50} 350,${180 + mousePos.x * 60} 600,${300 - mousePos.y * 40} C 850,${420 - mousePos.x * 50} 1000,${220 + mousePos.y * 30} 1250,350`}
            stroke="#161616"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.85 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          />

          {/* Secondary echoing fine line */}
          <motion.path
            d={`M -50,440 C 210,${400 + mousePos.y * 30} 360,${200 + mousePos.x * 40} 610,${320 - mousePos.y * 20} C 860,${440 - mousePos.x * 30} 1010,${240 + mousePos.y * 20} 1250,370`}
            stroke="#b3b3ac"
            strokeWidth="0.8"
            strokeDasharray="6 6"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.4, ease: 'easeOut', delay: 0.5 }}
          />
        </svg>
      </div>

      {/* Top Tag & Status */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <span className="w-2 h-2 rounded-full bg-black animate-ping" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
            One-Line Portfolio / 2026
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-mono text-xs text-neutral-500 uppercase tracking-widest"
        >
          Alexandria, Egypt &bull; Available Worldwide
        </motion.div>
      </div>

      {/* Main Headline & Identity */}
      <div className="relative z-10 my-auto py-12">
        {/* Editorial Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-mono uppercase tracking-[0.25em] text-xs sm:text-sm text-neutral-500 mb-4 font-medium"
        >
          Full Stack Developer &bull; 
        </motion.p>

        {/* Primary Name Display */}
        <motion.h1
          id="hero-name-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter uppercase text-neutral-900 leading-[0.92]"
        >
          ADHAM
          <br />
          <span className="relative inline-block text-neutral-950">
            HEGAZY
            {/* Subtle floating vector dot */}
            <motion.span
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-block w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black ml-2 sm:ml-4 align-baseline"
            />
          </span>
        </motion.h1>

        {/* Subtitle & Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm uppercase tracking-[0.22em] text-neutral-600 font-medium font-body"
        >
          <span className="hover:text-black transition-colors">Full-Stack Engineering</span>
          <span className="text-neutral-300">&bull;</span>
          <span className="hover:text-black transition-colors">Applied AI</span>
          <span className="text-neutral-300">&bull;</span>
          <span className="hover:text-black transition-colors">Scalable Systems</span>
          <span className="text-neutral-300">&bull;</span>
          <span className="hover:text-black transition-colors">Clean Architecture</span>
        </motion.div>

        {/* Concise Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-neutral-700 font-body leading-relaxed font-light"
        >
          Building scalable full-stack web and mobile applications and applied AI systems, grounded in SOLID principles, clean architecture, and end-to-end reliability from model training to production deployment.
        </motion.p>

        {/* Action Buttons & Direct Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
        >
          <a
            id="hero-view-work-btn"
            href="#work"
            onClick={() => soundManager.playChime(560, 0.03)}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-full text-xs uppercase tracking-widest font-mono hover:bg-black transition-all shadow-xs overflow-hidden"
          >
            <span className="relative z-10">Explore Work</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-1" />
          </a>

          <a
            id="hero-open-certificates-btn"
            href="#certificates"
            onClick={() => soundManager.playChime(620, 0.03)}
            className="group inline-flex items-center gap-3 px-8 py-4 border border-neutral-300 hover:border-black rounded-full text-xs uppercase tracking-widest font-mono text-neutral-800 hover:text-black transition-all bg-white/60 backdrop-blur-xs"
          >
            <span>Certifications</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <div className="flex items-center gap-2 pl-2">
            <a
              href="https://github.com/ahamh321"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playChime(600, 0.03)}
              className="p-3 rounded-full border border-neutral-300 hover:border-black hover:bg-white text-neutral-700 hover:text-black transition-all"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/adham-hegazy-617a49220"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playChime(620, 0.03)}
              className="p-3 rounded-full border border-neutral-300 hover:border-black hover:bg-white text-neutral-700 hover:text-black transition-all"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Continuous Visual Thread to About Section */}
      <div className="relative z-10 flex items-center justify-between pt-8 border-t border-neutral-200/80">
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <span>01 / 05</span>
          <span className="w-12 h-[1px] bg-neutral-300"></span>
          <span>Traverse Continuous Experience</span>
        </div>

        <a
          href="#about"
          className="p-2 rounded-full border border-neutral-300 text-neutral-600 hover:text-black hover:border-black transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

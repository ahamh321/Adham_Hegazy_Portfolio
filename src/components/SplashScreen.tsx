import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { soundManager } from '../utils/audio';
import { Volume2, VolumeX, FastForward, Compass } from 'lucide-react';
import { SplashPhase } from '../types';

interface SplashScreenProps {
  onComplete: () => void;
  isReplay?: boolean;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<SplashPhase>('empty');
  const [soundActive, setSoundActive] = useState<boolean>(soundManager.enabled);
  const timerRef = useRef<NodeJS.Timeout[]>([]);

  const clearAllTimers = () => {
    timerRef.current.forEach((t) => clearTimeout(t));
    timerRef.current = [];
  };

  const skipAnimation = () => {
    clearAllTimers();
    setPhase('complete');
    onComplete();
  };

  const toggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    const active = soundManager.toggleSound();
    setSoundActive(active);
  };

  useEffect(() => {
    // Sequence timing:
    // Phase 1: Empty Canvas (~400ms)
    // Phase 2: Drawing (~2500ms)
    // Phase 3: Portfolio reveal (~700ms)
    // Phase 4: Line Movement / Collapsing (~1600ms)
    // Phase 5: Dot (~500ms)
    // Phase 6: Pause (~300ms)
    // Phase 7: Water Drop impact & concentric ripples (~1400ms)
    // Phase 8: Reveal (~600ms)

    const t1 = setTimeout(() => {
      setPhase('drawing');
      soundManager.playPenDraw();
    }, 400);

    const t2 = setTimeout(() => {
      setPhase('portfolio');
      soundManager.playChime(640, 0.04);
    }, 3000);

    const t3 = setTimeout(() => {
      setPhase('collapsing');
      soundManager.playPenDraw();
    }, 3800);

    const t4 = setTimeout(() => {
      setPhase('dot');
    }, 5400);

    const t5 = setTimeout(() => {
      setPhase('pause');
    }, 5900);

    const t6 = setTimeout(() => {
      setPhase('drop');
      soundManager.playWaterDrop();
    }, 6200);

    const t7 = setTimeout(() => {
      setPhase('ripple');
      soundManager.playRippleHarmonic();
    }, 6500);

    const t8 = setTimeout(() => {
      setPhase('complete');
      onComplete();
    }, 7800);

    timerRef.current = [t1, t2, t3, t4, t5, t6, t7, t8];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        skipAnimation();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearAllTimers();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Highly organized, mathematically structured continuous single-line path
  // Coordinate system: 960 x 200, Base line at Y=125, Cap Height at Y=45, Midline at Y=85
  // Perfectly spaced words: "ADHAM" (X: 60 -> 410) and "HEGAZY" (X: 470 -> 900)
  const organizedNamePath =
    // Start with entrance flourish loop at left
    "M 30,125 C 20,95 40,75 55,125 " +
    // 'A' (60 -> 115)
    "L 85,45 L 115,125 " +
    "M 72,92 L 102,92 " +
    // 'D' (135 -> 180)
    "M 135,125 L 135,45 C 175,45 180,85 180,85 C 180,105 165,125 135,125 " +
    // 'H' (205 -> 255)
    "M 205,45 L 205,125 M 205,85 L 255,85 M 255,45 L 255,125 " +
    // 'A' (275 -> 325)
    "M 275,125 L 300,45 L 325,125 M 285,92 L 315,92 " +
    // 'M' (345 -> 415)
    "M 345,125 L 345,45 L 380,95 L 415,45 L 415,125 " +
    // Connecting baseline flourish bridge between first and last name
    "C 415,145 440,145 445,125 C 450,105 460,105 465,125 " +
    // 'H' (485 -> 535)
    "M 485,45 L 485,125 M 485,85 L 535,85 M 535,45 L 535,125 " +
    // 'E' (555 -> 595)
    "M 595,45 L 555,45 L 555,125 L 595,125 M 555,85 L 585,85 " +
    // 'G' (615 -> 670)
    "M 665,65 C 655,45 635,45 625,65 C 615,85 615,105 625,120 C 640,135 665,130 665,105 L 642,105 " +
    // 'A' (685 -> 735)
    "M 685,125 L 710,45 L 735,125 M 695,92 L 725,92 " +
    // 'Z' (755 -> 805)
    "M 755,45 L 805,45 L 755,125 L 805,125 " +
    // 'Y' (825 -> 875)
    "M 825,45 L 850,85 L 875,45 M 850,85 L 850,125 C 850,155 830,165 805,155 " +
    // Exit terminal flourish underline
    "C 780,145 860,140 930,140";

  return (
    <AnimatePresence>
      {phase !== 'complete' && (
        <motion.div
          id="splash-screen-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fafaf7] select-none overflow-hidden"
        >
          {/* Subtle Architectural Grid Background */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="splash-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e5df" strokeWidth="0.6" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#splash-grid)" />
            </svg>
          </div>

          {/* Top Controls: Sound Toggle & Skip */}
          <div className="absolute top-6 right-6 z-50 flex items-center gap-3">
            <button
              id="splash-audio-btn"
              onClick={toggleAudio}
              className="flex items-center gap-2 px-3 py-1.5 text-xs tracking-wider uppercase rounded-full border border-neutral-300 text-neutral-600 hover:text-black hover:border-black transition-all bg-white/80 backdrop-blur-xs shadow-2xs cursor-pointer"
              title="Toggle sound"
            >
              {soundActive ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-neutral-800" />
                  <span className="font-mono text-[10px]">Audio ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-neutral-400" />
                  <span className="font-mono text-[10px]">Muted</span>
                </>
              )}
            </button>

            <button
              id="splash-skip-btn"
              onClick={skipAnimation}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase rounded-full border border-neutral-300 text-neutral-600 hover:text-black hover:border-black transition-all bg-white/80 backdrop-blur-xs shadow-2xs cursor-pointer"
            >
              <span>Skip</span>
              <FastForward className="w-3 h-3" />
            </button>
          </div>

          {/* Center Stage: The Organized Name Canvas */}
          <div className="relative w-full max-w-4xl px-4 sm:px-8 flex flex-col items-center justify-center min-h-[420px]">
            
            {/* The Drawing & Text Composition */}
            {(phase === 'empty' || phase === 'drawing' || phase === 'portfolio' || phase === 'collapsing') && (
              <motion.div
                className="w-full flex flex-col items-center justify-center"
                animate={
                  phase === 'collapsing'
                    ? {
                        scale: [1, 0.6, 0.15, 0.02],
                        opacity: [1, 0.8, 0.4, 0],
                        rotate: [0, 8, 45, 90],
                        filter: ['blur(0px)', 'blur(1px)', 'blur(4px)', 'blur(8px)'],
                        transition: { duration: 1.6, ease: [0.65, 0, 0.35, 1] }
                      }
                    : { opacity: 1, scale: 1 }
                }
              >
                {/* Organized Header Tag floating above the name */}
                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  animate={
                    phase !== 'empty'
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: -12 }
                  }
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center gap-3 px-4 py-1 rounded-full bg-[#fafaf7] border border-neutral-300/90 shadow-2xs mb-6 sm:mb-8"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                  <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-neutral-700 font-medium">
                    01 &bull; PORTFOLIO  &bull; 2026
                  </span>
                </motion.div>

                {/* Structured Architectural Frame around the Name */}
                <div className="relative w-full max-w-3xl bg-[#fafaf7]/90 border border-neutral-300/80 rounded-2xl p-6 sm:p-10 shadow-sm backdrop-blur-xs overflow-hidden">
                  
                  {/* Corner Architectural Crosshair Accents */}
                  <div className="absolute top-2.5 left-2.5 font-mono text-[9px] text-neutral-400 select-none">+</div>
                  <div className="absolute top-2.5 right-2.5 font-mono text-[9px] text-neutral-400 select-none">+</div>
                  <div className="absolute bottom-2.5 left-2.5 font-mono text-[9px] text-neutral-400 select-none">+</div>
                  <div className="absolute bottom-2.5 right-2.5 font-mono text-[9px] text-neutral-400 select-none">+</div>

                  {/* Subtle Typography Baseline and Cap-Height Guidelines */}
                  <div className="absolute inset-x-8 top-[36%] border-b border-neutral-200/60 pointer-events-none" />
                  <div className="absolute inset-x-8 top-[68%] border-b border-neutral-300/70 border-dashed pointer-events-none" />

                  {/* Main Name One-Line SVG Canvas */}
                  <div className="relative w-full h-32 sm:h-44 flex items-center justify-center">
                    <svg
                      viewBox="0 0 960 180"
                      className="w-full h-full object-contain"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Subtle Faint Underlying Trace for pristine structure */}
                      <path
                        d={organizedNamePath}
                        stroke="#e5e5dc"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Active Animated One-Line Stroke */}
                      <motion.path
                        d={organizedNamePath}
                        stroke="#111111"
                        strokeWidth="2.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={
                          phase !== 'empty'
                            ? {
                                pathLength: 1,
                                opacity: 1,
                                transition: {
                                  pathLength: { duration: 2.4, ease: [0.35, 0, 0.15, 1] },
                                  opacity: { duration: 0.2 }
                                }
                              }
                            : { pathLength: 0, opacity: 0 }
                        }
                      />
                    </svg>
                  </div>

                  {/* Clean, Organized Subtitle & Discipline Breakdown */}
                  <div className="mt-6 pt-5 border-t border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left">
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={
                        phase === 'portfolio' || phase === 'collapsing'
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 6 }
                      }
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <Compass className="w-3.5 h-3.5 text-neutral-500" />
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-800 font-semibold">
                        Adham Hegazy
                      </span>
                      <span className="text-neutral-400 font-mono text-xs">&mdash;</span>
                      <span className="font-body text-xs text-neutral-600">
                        Creative Developer &amp; Designer
                      </span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={
                        phase === 'portfolio' || phase === 'collapsing'
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 6 }
                      }
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="font-mono text-[10px] uppercase tracking-widest text-neutral-500"
                    >
                      Continuous Experience
                    </motion.div>
                  </div>
                </div>

              </motion.div>
            )}

            {/* Phase 5 & 6: The Collapsed Floating Black Dot */}
            {(phase === 'dot' || phase === 'pause' || phase === 'drop' || phase === 'ripple') && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                
                {/* The Dot */}
                <AnimatePresence>
                  {(phase === 'dot' || phase === 'pause' || phase === 'drop') && (
                    <motion.div
                      id="splash-core-dot"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={
                        phase === 'drop'
                          ? {
                              scale: [1, 1.4, 0.2],
                              y: [0, -12, 6],
                              opacity: [1, 1, 0],
                              transition: { duration: 0.35, ease: 'easeIn' }
                            }
                          : {
                              scale: 1,
                              opacity: 1,
                              transition: { type: 'spring', damping: 18, stiffness: 300 }
                            }
                      }
                      exit={{ opacity: 0, scale: 0 }}
                      className="w-3.5 h-3.5 rounded-full bg-black shadow-md pointer-events-none z-30"
                    />
                  )}
                </AnimatePresence>

                {/* Phase 7: Water Droplet Impact & Expanding Concentric Ripples */}
                {(phase === 'drop' || phase === 'ripple') && (
                  <div className="relative flex items-center justify-center">
                    {/* Primary Ink Ripple Ring 1 */}
                    <motion.div
                      initial={{ scale: 0.05, opacity: 0.95, borderWidth: 3.5 }}
                      animate={{
                        scale: [0.05, 2.5, 9, 28],
                        opacity: [0.95, 0.8, 0.4, 0],
                        borderWidth: ['3.5px', '2px', '1.5px', '0.5px']
                      }}
                      transition={{ duration: 1.4, ease: [0.12, 0.8, 0.3, 1] }}
                      className="absolute w-24 h-24 rounded-full border border-black pointer-events-none"
                    />

                    {/* Secondary Ink Ripple Ring 2 */}
                    <motion.div
                      initial={{ scale: 0.02, opacity: 0.85, borderWidth: 2 }}
                      animate={{
                        scale: [0.02, 1.8, 7, 22],
                        opacity: [0.85, 0.6, 0.25, 0],
                        borderWidth: ['2px', '1.8px', '1px', '0.3px']
                      }}
                      transition={{ duration: 1.3, delay: 0.15, ease: [0.15, 0.75, 0.35, 1] }}
                      className="absolute w-24 h-24 rounded-full border border-neutral-700 pointer-events-none"
                    />

                    {/* Subtle Outer Echo Ring 3 */}
                    <motion.div
                      initial={{ scale: 0.01, opacity: 0.7 }}
                      animate={{
                        scale: [0.01, 1.2, 5, 16],
                        opacity: [0.7, 0.5, 0.15, 0]
                      }}
                      transition={{ duration: 1.2, delay: 0.3, ease: [0.18, 0.7, 0.4, 1] }}
                      className="absolute w-24 h-24 rounded-full border border-neutral-400 pointer-events-none"
                    />

                    {/* Center Ink Dispersion Flash */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0.8 }}
                      animate={{
                        scale: [0, 1.8, 4.5],
                        opacity: [0.8, 0.25, 0]
                      }}
                      transition={{ duration: 0.9, ease: 'easeOut' }}
                      className="absolute w-12 h-12 rounded-full bg-neutral-900 filter blur-xs"
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Bottom Subtitle / Monoline Artistic Legend */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute bottom-10 left-0 right-0 flex flex-col items-center justify-center text-center px-4"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-neutral-300"></span>
              <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase">
                A continuous line journey
              </span>
              <span className="w-8 h-[1px] bg-neutral-300"></span>
            </div>
            <p className="font-body text-xs text-neutral-400 mt-1.5">
              Press <kbd className="px-1.5 py-0.5 font-mono text-[10px] bg-neutral-200/80 rounded text-neutral-700">Space</kbd> or <kbd className="px-1.5 py-0.5 font-mono text-[10px] bg-neutral-200/80 rounded text-neutral-700">Esc</kbd> to enter immediately
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

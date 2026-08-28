import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Play, Volume2, VolumeX } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface NavbarProps {
  onReplayIntro: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReplayIntro }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(soundManager.enabled);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const state = soundManager.toggleSound();
    setSoundEnabled(state);
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'py-3.5 bg-[#fafaf7]/90 backdrop-blur-md border-b border-neutral-200/70 shadow-xs'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Brand */}
        <a
          id="navbar-brand-link"
          href="#"
          onClick={() => {
            soundManager.playChime(540, 0.03);
          }}
          className="group flex items-center gap-2.5 text-neutral-900 font-display font-medium tracking-tight text-base sm:text-lg focus:outline-hidden"
        >
          <span className="relative font-display font-bold">
            Adham Hegazy
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full" />
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-black/80 transition-transform duration-300 group-hover:scale-150" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => soundManager.playChime(600, 0.02)}
              className="relative text-xs uppercase tracking-[0.2em] text-neutral-600 hover:text-black font-body transition-colors py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-200 group-hover:w-full" />
            </a>
          ))}

          <div className="h-4 w-[1px] bg-neutral-300 mx-1" />

          {/* Sound Synthesizer Toggle */}
          <button
            id="nav-sound-toggle"
            onClick={toggleSound}
            className="p-1.5 text-neutral-500 hover:text-black transition-colors rounded-full hover:bg-neutral-100"
            title={soundEnabled ? 'Mute sound effects' : 'Enable ambient sound effects'}
            aria-label="Toggle Sound"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Replay Intro Button */}
          <button
            id="nav-replay-intro-btn"
            onClick={() => {
              soundManager.playChime(680, 0.05);
              onReplayIntro();
            }}
            className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border border-neutral-300 text-neutral-700 hover:text-black hover:border-black transition-all hover:bg-white"
            title="Replay the one-line intro animation"
          >
            <Play className="w-2.5 h-2.5 fill-current" />
            <span>Intro</span>
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleSound}
            className="p-2 text-neutral-600"
            aria-label="Toggle audio"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button
            id="mobile-menu-toggle-btn"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              soundManager.playChime(500, 0.03);
            }}
            className="p-2 text-neutral-900 rounded-md focus:outline-hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-[#fafaf7] border-b border-neutral-200 px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    soundManager.playChime(580, 0.03);
                  }}
                  className="text-sm uppercase tracking-widest text-neutral-800 hover:text-black py-2 border-b border-neutral-100 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-neutral-400">&rarr;</span>
                </a>
              ))}

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onReplayIntro();
                  }}
                  className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider py-2.5 rounded-full border border-neutral-300 text-neutral-800"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Replay One-Line Intro</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

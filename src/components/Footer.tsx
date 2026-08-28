import React from 'react';
import { OneLineArtwork } from './OneLineArtwork';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundManager.playChime(650, 0.04);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="relative pt-16 pb-12 px-6 sm:px-10 max-w-7xl mx-auto border-t border-neutral-200">
      
      {/* Visual Unbroken Continuous Loop Linking Back to Beginning */}
      <div className="flex flex-col items-center justify-center my-8">
        <div className="w-24 h-24 opacity-60">
          <OneLineArtwork type="loop" strokeWidth={1.5} />
        </div>
        <button
          id="footer-back-to-top-btn"
          onClick={scrollToTop}
          className="mt-4 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-600 hover:text-black transition-colors"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Return to Origin</span>
        </button>
      </div>

      {/* Footer Bottom Bar */}
      <div className="pt-8 border-t border-neutral-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
        <div>
          Adham Hegazy &copy; 2026 &bull; Full Stack Developer &bull; All paths continuous.
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/ahamh321"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/adham-hegazy-617a49220"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:adhamh502@gmail.com"
            className="hover:text-black transition-colors"
          >
            adhamh502@gmail.com
          </a>
          <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
          <span>Alexandria, Egypt</span>
        </div>
      </div>

    </footer>
  );
};

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { OneLineArtwork } from './OneLineArtwork';
import { X, ExternalLink, Github, CheckCircle2, ArrowRight, Sparkles, Lock } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            soundManager.playChime(480, 0.03);
            onClose();
          }}
          className="fixed inset-0 bg-neutral-900/60 backdrop-blur-xs"
        />

        {/* Modal Container */}
        <motion.div
          id="project-detail-modal"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#fafaf7] rounded-3xl border border-neutral-300 shadow-2xl p-6 sm:p-10 z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            id="close-modal-btn"
            onClick={() => {
              soundManager.playChime(480, 0.03);
              onClose();
            }}
            className="absolute top-6 right-6 p-2 rounded-full border border-neutral-300 hover:border-black hover:bg-neutral-100 text-neutral-600 hover:text-black transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex flex-wrap items-center gap-2.5 mb-2">
            <span className="font-mono text-xs font-bold text-neutral-400">
              PROJECT {project.number}
            </span>
            <span className="w-8 h-[1px] bg-neutral-300"></span>
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-600">
              {project.category} &bull; {project.year}
            </span>
            {project.company && (
              <>
                <span className="text-neutral-300">&bull;</span>
                <span className="font-mono text-xs text-neutral-700 font-medium">
                  {project.company}
                </span>
              </>
            )}
            {project.isInternship && (
              <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-800 bg-neutral-100 border border-neutral-300 px-2 py-0.5 rounded-full font-semibold">
                Internship
              </span>
            )}
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-neutral-950 tracking-tight">
            {project.title}
          </h2>

          <p className="font-serif italic text-lg sm:text-xl text-neutral-600 mt-1 mb-6">
            {project.subtitle}
          </p>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-6">
            
            {/* Visual Column */}
            <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-neutral-200/80">
              <div className="w-full max-w-[280px] py-4 flex items-center justify-center">
                <OneLineArtwork type={project.artworkType} strokeWidth={1.8} />
              </div>
              <div className="w-full pt-4 mt-2 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>Vector Identity</span>
                <span>Continuous Path</span>
              </div>
            </div>

            {/* In-depth Narrative */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-2">
                  System Architecture & Overview
                </h4>
                <p className="font-body text-neutral-800 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  {project.longDescription}
                </p>

                <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-2">
                  Technical Highlights
                </h4>
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 font-body">
                      <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <div className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-2">
                  Stack & Frameworks
                </div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Modal Footer / Action Links */}
          <div className="pt-6 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4">
            <div className="font-mono text-xs text-neutral-500 flex flex-wrap items-center gap-x-3 gap-y-1">
              <div>
                Role: <span className="text-black font-medium">{project.role}</span>
              </div>
              {project.company && (
                <div>
                  Company: <span className="text-black font-medium">{project.company}</span>
                  {project.isInternship && <span className="ml-1 text-neutral-400 font-normal">(Internship)</span>}
                </div>
              )}
            </div>

            <div className="flex items-center gap-3">
              {project.isPrivateRepo ? (
                <div
                  id="private-repo-modal-badge"
                  className="flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-full border border-red-200 bg-red-50 text-red-600 font-semibold cursor-not-allowed select-none shadow-xs"
                >
                  <Lock className="w-3.5 h-3.5 text-red-500" />
                  <span>Private repository</span>
                </div>
              ) : project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-full border border-neutral-300 text-neutral-800 hover:border-black hover:text-black transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              ) : null}

              {project.liveUrl && project.liveUrl !== project.githubUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-full border border-black bg-black text-white hover:bg-neutral-800 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Site</span>
                </a>
              )}

              <button
                onClick={() => {
                  soundManager.playChime(500, 0.03);
                  onClose();
                }}
                className="px-5 py-2 text-xs font-mono uppercase tracking-wider rounded-full bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:text-black transition-colors"
              >
                Close Case Study
              </button>
            </div>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
};

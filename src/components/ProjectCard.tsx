import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { OneLineArtwork } from './OneLineArtwork';
import { ArrowUpRight, Github, ExternalLink, Sparkles, Lock } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelect }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      id={`project-card-${project.id}`}
      onClick={() => {
        soundManager.playChime(620, 0.04);
        onSelect(project);
      }}
      className="group relative cursor-pointer py-12 border-b border-neutral-200/80 hover:border-neutral-400 transition-colors"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Project Header Info / Details */}
        <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="font-mono text-xs font-semibold tracking-widest text-neutral-400">
              {project.number}
            </span>
            <span className="w-6 h-[1px] bg-neutral-300"></span>
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-500">
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

          <h3 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight transition-transform duration-300 group-hover:translate-x-1">
            {project.title}
          </h3>

          <p className="font-serif italic text-base sm:text-lg text-neutral-600 mt-1 mb-4">
            {project.subtitle}
          </p>

          <p className="font-body text-neutral-700 text-sm sm:text-base leading-relaxed mb-6 font-light max-w-xl">
            {project.description}
          </p>

          {/* Technology Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {project.isPrivateRepo && (
              <span
                id={`project-private-${project.id}`}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono tracking-wider text-red-600 bg-red-50 border border-red-200/80 rounded-md font-semibold cursor-not-allowed select-none"
              >
                <Lock className="w-3 h-3 text-red-500" />
                <span>Private repository</span>
              </span>
            )}
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[11px] font-mono tracking-wider text-neutral-600 bg-neutral-100 rounded-md group-hover:bg-neutral-200/70 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Link Indicator */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-900 group-hover:text-black font-semibold">
              <span>Explore Case Study</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>

            {project.githubUrl && !project.isPrivateRepo && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  soundManager.playChime(700, 0.03);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono tracking-wider text-neutral-700 hover:text-black bg-white hover:bg-neutral-100 border border-neutral-300 rounded-full transition-colors z-10"
                title="View GitHub Repository"
              >
                <Github className="w-3 h-3" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>

        {/* Visual Artwork / Mockup Canvas Area */}
        <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="relative aspect-16/10 sm:aspect-16/9 rounded-2xl bg-[#f4f4f0] border border-neutral-200/80 p-8 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:bg-white group-hover:shadow-md group-hover:border-neutral-300">
            
            {/* Background Grid Accent */}
            <div className="absolute inset-0 bg-[radial-gradient(#e2e2dc_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

            {/* Corner Badge */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/80 border border-neutral-200/80 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-black/70"></span>
              <span>Visual Contour</span>
            </div>

            {/* Specialized One-Line Art Piece for Project */}
            <div className="w-full max-w-[260px] sm:max-w-[300px] transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1">
              <OneLineArtwork type={project.artworkType} strokeWidth={1.7} />
            </div>

            {/* Center Floating Hover Pill */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="px-4 py-2 rounded-full bg-black text-white text-xs font-mono tracking-wider uppercase shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                View Project &rarr;
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { projectsData } from '../data/projects';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { OneLineArtwork } from './OneLineArtwork';
import { soundManager } from '../utils/audio';

export const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Full Stack', value: 'Full Stack' },
    { label: 'Applied AI', value: 'AI' },
    { label: 'Front End', value: 'Front End' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => {
          const cat = activeCategory.toLowerCase();
          return (
            p.category.toLowerCase().includes(cat) ||
            p.role.toLowerCase().includes(cat) ||
            p.technologies.some((t) => t.toLowerCase().includes(cat)) ||
            (cat === 'front end' &&
              (p.role.toLowerCase().includes('front') ||
                p.category.toLowerCase().includes('web') ||
                p.technologies.some((t) =>
                  ['react', 'next.js', 'html5', 'javascript', 'frontend'].includes(
                    t.toLowerCase()
                  )
                )))
          );
        });

  return (
    <section id="work" className="py-12 sm:py-16 px-6 sm:px-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">
              03 / SELECTED WORK
            </span>
            <span className="w-10 h-[1px] bg-neutral-300"></span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-neutral-900 tracking-tight">
            Featured Projects
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.value}
              onClick={() => {
                setActiveCategory(c.value);
                soundManager.playChime(580, 0.02);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all ${
                activeCategory === c.value
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200/80 hover:text-black'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Connecting One-Line Wave Accent */}
      <div className="w-full my-6 opacity-30 pointer-events-none">
        <OneLineArtwork type="wave" strokeWidth={1} />
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onSelect={(p) => {
              soundManager.playChime(540, 0.03);
              setSelectedProject(p);
            }}
          />
        ))}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

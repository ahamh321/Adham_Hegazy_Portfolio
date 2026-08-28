import React, { useState } from 'react';
import { Layers, Sparkles, Terminal, Cpu } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const About: React.FC = () => {
  const [portraitSrc] = useState<string>(() => {
    return (typeof window !== 'undefined' && localStorage.getItem('user_portrait')) || './assets/me.png';
  });
  const pillars = [
    {
      icon: Terminal,
      title: 'Full Stack Architecture',
      desc: 'Building responsive interfaces powered by scalable backend services.'
    },
    {
      icon: Layers,
      title: 'Design & Code Harmony',
      desc: 'Translating complex information architectures into unbroken, intuitive visual workflows and minimalist interactions.'
    },
    {
      icon: Sparkles,
      title: 'Continuous Single-Line Logic',
      desc: 'Building software as an uninterrupted path from user intent to clean, scalable, production-ready code'
    },
    {
      icon: Cpu,
      title: 'Applied AI & Automation',
      desc: 'Integrating modern machine learning models and intelligent pipelines directly into modern web systems.'
    }
  ];

  const tools = [
    'React.js', 'TypeScript', 'Node.js', 'JavaScript', 'Python', 'HTML5', 'Tailwind CSS', 'PHP',
    'PostgreSQL', 'MongoDB', 'Flutter', 'REST APIs', 'WebSockets', 'Git', 
    'Data Structures & Algorithms', 'OOP', 'Design Patterns', 'SOLID Principles', 'System Design',
  ];

  return (
    <section id="about" className="py-12 sm:py-16 px-6 sm:px-10 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">02 / PROFILE</span>
            <span className="w-10 h-[1px] bg-neutral-300"></span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-neutral-900 tracking-tight">
           A Little About Me.
          </h2>
        </div>
      </div>

      {/* Main Grid: Narrative & Continuous Line Portrait */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Continuous Line Art Portrait */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 bg-neutral-100/70 rounded-3xl border border-neutral-200/80 relative overflow-hidden group">
          <div className="w-full flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-neutral-400 mb-2">
            <span> Portrait &bull; Adham Hegazy</span>
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
          </div>
          
          <div className="w-full max-w-[280px] sm:max-w-[320px] py-4 transition-transform duration-700 group-hover:scale-105 flex items-center justify-center relative">
            <img
              src={portraitSrc}
              alt="Continuous single-line portrait of Adham Hegazy"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[380px] sm:max-h-[420px] object-contain drop-shadow-sm select-none"
            />
          </div>

          <div className="w-full pt-4 border-t border-neutral-200 flex items-center justify-between text-neutral-400 font-mono text-[11px]">
            <span>One-Line Portrait of Me</span>
            <span>Adham Hegazy</span>
          </div>
        </div>

        {/* Right Column: Narrative & Focus Areas */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div className="space-y-4 text-neutral-800 font-body text-base sm:text-lg leading-relaxed font-light">
            <p>
              I am a <strong className="font-medium text-black">Full Stack Developer</strong> with a B.Sc. in Computer Science and hands-on experience building end-to-end web and mobile applications with React.js, Node.js, and Python.
            </p>
            
            <p>
               I build applications where architecture, user experience, and visual clarity flow seamlessly without friction. Applies SOLID principles and clean architecture to ship scalable, production-ready features, and has integrated AI/ML models (TensorFlow, Keras) into full-stack products.
            </p>
          </div>

          {/* Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-200">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl border border-neutral-200/80 bg-white/60 hover:bg-white hover:border-black/30 transition-all duration-300 group"
                  onMouseEnter={() => soundManager.playChime(600 + idx * 30, 0.015)}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 rounded-md bg-neutral-100 group-hover:bg-black group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4 text-neutral-800 group-hover:text-white" />
                    </div>
                    <h3 className="font-display font-semibold text-sm text-neutral-900">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-600 leading-normal">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Monoline Tech Stack Badges */}
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-3">
              Core Technical Stack &amp; Tools
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 text-xs font-mono rounded-full border border-neutral-200 text-neutral-700 bg-white hover:border-black hover:text-black transition-colors cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

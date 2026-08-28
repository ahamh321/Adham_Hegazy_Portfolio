import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Award,
  CheckCircle2,
  Calendar,
  Sparkles,
  ShieldCheck,
  BrainCircuit,
  Smartphone,
  Layers,
  BarChart3,
  BookOpen
} from 'lucide-react';
import { soundManager } from '../utils/audio';

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  category: 'degree' | 'ai' | 'web-mobile' | 'data' | Array<'degree' | 'ai' | 'web-mobile' | 'data'>;
  categoryLabel: string;
  period?: string;
  gpa?: string;
  honors?: string;
  description: string;
  skills: string[];
  credentialNote?: string;
  isDegree?: boolean;
}

export const Certificates: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const degree: CertificateItem = {
    id: 'aast-degree',
    title: 'Bachelor of Science in Computer Science',
    issuer: 'Arab Academy for Science, Technology & Maritime Transport (AAST)',
    category: 'degree',
    categoryLabel: 'Academic Degree',
    period: 'Sep 2021 – Jul 2025',
    gpa: '3.4 / 4.0',
    honors: 'Very Good with Honors',
    description:
      'Comprehensive academic grounding in computer science principles, algorithms, data structures, and distributed software engineering. Emphasized clean architecture, object-oriented design patterns, and the practical deployment of deep learning models.',
    skills: [
      'Data Structures & Algorithms',
      'Software Engineering & OOP',
      'System Design & SOLID Principles',
      'Full-Stack Web Architectures',
      'Machine Learning & Applied AI',
      'Database Systems & Modeling'
    ],
    credentialNote: 'Graduation with Honors • Fully Accredited B.Sc. Curriculum',
    isDegree: true
  };

  const certifications: CertificateItem[] = [
    {
      id: 'cert-meta-react',
      title: 'React Basics',
      issuer: 'Meta',
      category: 'web-mobile',
      categoryLabel: 'Web & UI Engineering',
      description:
        'Foundational and modern React application development, covering component state, hooks, unidirectional data flow, JSX compilation, and responsive UI composition.',
      skills: ['React.js', 'State Management', 'Hooks & Lifecycle', 'Component Design', 'JSX'],
      credentialNote: 'Verified Meta Certification'
    },
    {
      id: 'cert-aoa-ai',
      title: 'AI in Applications',
      issuer: 'Accountants on Air',
      category: ['ai', 'web-mobile'],
      categoryLabel: 'Applied AI & Web Apps',
      description:
        'Integration of artificial intelligence and machine learning pipelines into web applications, business logic, reporting automation, and predictive software workflows.',
      skills: ['Applied AI Integration', 'Web & Mobile AI', 'Workflow Automation', 'Predictive Analysis', 'API Integration'],
      credentialNote: 'Verified Professional Certificate'
    },
    {
      id: 'cert-megatrust-flutter',
      title: 'Flutter & Dart Mobile Developer',
      issuer: 'Megatrust',
      category: 'web-mobile',
      categoryLabel: 'Mobile Engineering',
      description:
        'End-to-end cross-platform mobile development using Flutter and Dart, with structured state management, native device interactions, and modular architecture.',
      skills: ['Flutter', 'Dart', 'Cross-Platform Mobile', 'REST Integration', 'Mobile UX'],
      credentialNote: 'Verified Developer Credential'
    },
    {
      id: 'cert-alx-ai',
      title: 'AI Career Essentials',
      issuer: 'ALX Arabia',
      category: 'ai',
      categoryLabel: 'Applied AI & Strategy',
      description:
        'Practical adoption of modern AI tooling, generative workflows, prompt engineering, and agile problem solving for contemporary software engineering teams.',
      skills: ['Generative AI', 'Prompt Engineering', 'AI Productivity', 'Agile Workflows'],
      credentialNote: 'Verified ALX Arabia Credential'
    },
    {
      id: 'cert-sas-digital',
      title: 'Digital Transformation & Data Literacy',
      issuer: 'SAS',
      category: 'data',
      categoryLabel: 'Data & Enterprise Systems',
      description:
        'Enterprise data literacy, analytical decision frameworks, digital pipeline optimization, and data governance best practices within corporate architectures.',
      skills: ['Data Literacy', 'Digital Transformation', 'Analytical Modeling', 'Enterprise Insights'],
      credentialNote: 'Verified SAS Credential'
    }
  ];

  const matchesCategory = (
    itemCat: CertificateItem['category'],
    filter: string
  ): boolean => {
    if (filter === 'all') return true;
    if (Array.isArray(itemCat)) {
      return itemCat.includes(filter as any);
    }
    return itemCat === filter;
  };

  const filterTabs = [
    { label: 'All Credentials', value: 'all', count: 1 + certifications.length },
    { label: 'Degree & Honors', value: 'degree', count: 1 },
    {
      label: 'Applied AI',
      value: 'ai',
      count: certifications.filter((c) => matchesCategory(c.category, 'ai')).length
    },
    {
      label: 'Web & Mobile',
      value: 'web-mobile',
      count: certifications.filter((c) => matchesCategory(c.category, 'web-mobile')).length
    },
    {
      label: 'Data & Systems',
      value: 'data',
      count: certifications.filter((c) => matchesCategory(c.category, 'data')).length
    }
  ];

  const showDegree = activeFilter === 'all' || activeFilter === 'degree';
  const filteredCerts =
    activeFilter === 'all'
      ? certifications
      : certifications.filter((cert) => matchesCategory(cert.category, activeFilter));

  return (
    <section id="certificates" className="py-12 sm:py-16 px-6 sm:px-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">
              04 / CERTIFICATIONS &amp; EDUCATION
            </span>
            <span className="w-10 h-[1px] bg-neutral-300"></span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-neutral-900 tracking-tight">
            Academic &amp; Professional Credentials
          </h2>
          <p className="mt-3 text-neutral-600 font-body text-base sm:text-lg max-w-2xl font-light">
            Formal foundations in Computer Science paired with industry-verified certifications in full-stack web, cross-platform mobile, and applied artificial intelligence.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                id={`cert-filter-${tab.value}`}
                onClick={() => {
                  setActiveFilter(tab.value);
                  soundManager.playChime(580, 0.02);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200/80 hover:text-black'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-neutral-200 text-neutral-500'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Primary Academic Degree: Feature Showcase */}
      {showDegree && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 p-6 sm:p-8 lg:p-10 rounded-3xl bg-neutral-100/80 border border-neutral-200/80 relative overflow-hidden group hover:border-neutral-300 transition-all duration-300"
          onMouseEnter={() => soundManager.playChime(640, 0.015)}
        >
          {/* Subtle monoline watermark in background */}
          <div className="absolute -right-8 -bottom-8 w-64 h-64 text-neutral-300/30 pointer-events-none select-none">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="50" cy="50" r="44" strokeDasharray="3 3" />
              <path d="M 50,15 L 85,32 L 85,68 L 50,85 L 15,68 L 15,32 Z" />
              <path d="M 50,30 L 70,40 L 70,60 L 50,70 L 30,60 L 30,40 Z" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-neutral-500">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black text-white text-[11px] font-medium tracking-wide">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-300" />
                  <span>B.Sc. Degree</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-neutral-500">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{degree.period}</span>
                </span>
                <span className="text-neutral-300">•</span>
                <span className="text-neutral-600 font-medium">Arab Academy for Science, Technology &amp; Maritime Transport (AAST)</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-neutral-900 tracking-tight">
                  {degree.title}
                </h3>
                <p className="mt-1 text-sm sm:text-base font-body text-neutral-600 font-medium">
                  {degree.issuer}
                </p>
              </div>

              {/* Honors & GPA highlight banner */}
              <div className="inline-flex flex-wrap items-center gap-3 p-3 sm:px-4 sm:py-2.5 rounded-2xl bg-white border border-neutral-200/90 shadow-xs">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span className="font-mono text-xs font-semibold text-neutral-900 tracking-wide">
                    GPA: {degree.gpa}
                  </span>
                </div>
                <span className="hidden sm:inline text-neutral-300">|</span>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-neutral-700" />
                  <span className="font-body text-xs sm:text-sm font-medium text-neutral-800">
                    {degree.honors}
                  </span>
                </div>
                <span className="hidden sm:inline text-neutral-300">|</span>
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="font-mono text-[11px] text-neutral-500">Verified AAST Credential</span>
                </div>
              </div>

              <p className="text-neutral-700 font-body text-sm sm:text-base leading-relaxed max-w-3xl font-light">
                {degree.description}
              </p>

              {/* Skills Tags */}
              <div className="pt-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Core Foundations &amp; Focus Areas
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {degree.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-white/90 border border-neutral-200 text-neutral-800 text-xs font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Summary Badge */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full bg-white/90 rounded-2xl p-6 border border-neutral-200/90">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">Academic Standing</span>
                  <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Honors List
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-neutral-500">Cumulative GPA</span>
                    <span className="font-bold text-neutral-900">3.4 / 4.0</span>
                  </div>
                  <div className="w-full bg-neutral-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-neutral-900 h-full rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div className="pt-2 text-xs text-neutral-600 font-body leading-relaxed">
                  Rigorous computer science study with coursework covering software development lifecycles, applied neural networks, and modern cloud ecosystems.
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-neutral-400 font-mono text-[11px]">
                <span>AAST Computer Science</span>
                <span>Sep 2021 – Jul 2025</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Professional Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCerts.map((cert, index) => {
          const getCategoryIcon = (cat: CertificateItem['category']) => {
            const selected = Array.isArray(cat)
              ? (activeFilter !== 'all' && cat.includes(activeFilter as any) ? activeFilter : cat[0])
              : cat;
            switch (selected) {
              case 'ai':
                return <BrainCircuit className="w-4 h-4 text-neutral-700" />;
              case 'web-mobile':
                return <Smartphone className="w-4 h-4 text-neutral-700" />;
              case 'data':
                return <BarChart3 className="w-4 h-4 text-neutral-700" />;
              default:
                return <Award className="w-4 h-4 text-neutral-700" />;
            }
          };

          const currentCategoryLabel = Array.isArray(cert.category)
            ? activeFilter === 'web-mobile'
              ? 'Web & Mobile AI'
              : activeFilter === 'ai'
              ? 'Applied AI & Web'
              : cert.categoryLabel
            : cert.categoryLabel;

          return (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onMouseEnter={() => soundManager.playChime(600 + index * 25, 0.012)}
              className="flex flex-col justify-between p-6 rounded-3xl bg-neutral-100/70 border border-neutral-200/80 hover:border-neutral-400/80 hover:bg-white transition-all duration-300 group shadow-xs hover:shadow-sm"
            >
              <div>
                {/* Card Top: Issuer & Category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-neutral-200 text-[11px] font-mono font-medium text-neutral-800">
                    {getCategoryIcon(cert.category)}
                    <span>{cert.issuer}</span>
                  </span>

                  <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                    {currentCategoryLabel}
                  </span>
                </div>

                {/* Title */}
                <h4 className="font-display font-bold text-xl text-neutral-900 tracking-tight group-hover:text-black transition-colors mb-2">
                  {cert.title}
                </h4>

                {/* Description */}
                <p className="text-neutral-600 font-body text-sm leading-relaxed mb-6 font-light">
                  {cert.description}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-md bg-neutral-200/70 text-neutral-700 text-[11px] font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Verified Badge */}
              <div className="pt-4 border-t border-neutral-200/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-neutral-600 font-mono text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{cert.credentialNote}</span>
                </div>
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                  Verified
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Section Footer Note */}
      <div className="mt-12 p-6 rounded-2xl bg-neutral-50 border border-neutral-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-neutral-700" />
          <span>All certificates and degree qualifications are officially earned and verified.</span>
        </div>
        <div className="text-neutral-400">
          Adham Hegazy &bull; Continuous Learning &amp; Rigor
        </div>
      </div>
    </section>
  );
};

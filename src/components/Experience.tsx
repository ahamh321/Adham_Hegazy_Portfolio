import React from 'react';
import { motion } from 'motion/react';
import {
  Briefcase,
  Calendar,
  Building2,
  BookOpen,
  BrainCircuit,
  Cpu,
  GraduationCap,
  MapPin
} from 'lucide-react';
import { soundManager } from '../utils/audio';

export const Experience: React.FC = () => {
  const currentRole = {
    role: 'Teaching Assistant',
    institution: 'College of Engineering and Technology, AAST',
    fullName: 'Arab Academy for Science, Technology & Maritime Transport (AAST)',
    period: 'Sep 2026 – Present',
    location: 'Alexandria, Egypt',
    status: 'Currently Employed',
    courses: ['Computer Vision', 'Natural Language Processing', 'Digital Logic Design'],
    bullets: [
      'Teach and mentor undergraduate students across Computer Vision, Natural Language Processing, and Digital Logic Design courses, translating dense technical theory into clear, practical explanations.',
      'Design and deliver hands-on lab sessions and coding exercises in Python (OpenCV, NLP libraries) and digital logic simulation tools, reinforcing programming fundamentals, algorithmic thinking, and system design concepts directly applicable to full-stack development.',
      'Grade assignments, projects, and exams, and hold regular office hours to debug student code and clarify core CS concepts including data structures, OOP, and problem decomposition.',
      'Build supplementary course materials and example projects, strengthening communication, technical writing, and cross-topic skills in AI/ML (CV, NLP) that carry directly into building intelligent full-stack applications.'
    ],
    skills: [
      'Python',
      'OpenCV',
      'NLP Libraries',
      'Digital Logic Simulation',
      'Data Structures & OOP',
      'Problem Decomposition',
      'Applied AI (CV & NLP)',
      'Technical Mentorship'
    ]
  };

  const priorRoles = [
    {
      role: 'Full Stack Developer',
      company: 'Accountants on Air',
      location: 'Remote (USA)',
      period: 'Jul 2026 – Aug 2026',
      type: 'Developer Internship',
      description:
        'Engineered ShieldOps, an AI-powered cybersecurity incident triage assistant for SOC analysts using Next.js 14, TypeScript, Tailwind CSS, and resilient AI orchestration with Vercel AI SDK, Groq, and Gemini.',
      skills: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Vercel AI SDK', 'Groq', 'Gemini', 'Zod', 'Vitest']
    },
    {
      role: 'Mobile Developer Intern',
      company: 'Megatrust',
      location: 'Alexandria, Egypt',
      period: 'Aug 2023 – Sep 2023',
      type: 'Mobile Internship',
      description:
        'Built real-time WebSocket location tracking for a live taxi-hailing app, integrated payment and geolocation APIs with response caching, and shipped 2 cross-platform apps in Flutter/Dart following SOLID principles.',
      skills: ['Flutter', 'Dart', 'WebSockets', 'Geolocation APIs', 'Payment Integration', 'SOLID Principles']
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 px-6 sm:px-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">
              03 / EXPERIENCE
            </span>
            <span className="w-10 h-[1px] bg-neutral-300"></span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-neutral-900 tracking-tight">
            Where I'm Currently Employed.
          </h2>
          <p className="mt-3 text-neutral-600 font-body text-base sm:text-lg max-w-2xl font-light">
            Teaching and mentoring undergraduate engineers in advanced CS and AI while engineering production-ready web and mobile systems.
          </p>
        </div>

        {/* Live Employment Status Indicator */}
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 font-mono text-xs shadow-xs self-start md:self-auto">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-medium tracking-wide">Active Role &bull; Sep 2026 – Present</span>
        </div>
      </div>

      {/* Featured Current Employment Showcase Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 p-6 sm:p-8 lg:p-10 rounded-3xl bg-neutral-100/90 border border-neutral-300/80 relative overflow-hidden group shadow-xs hover:border-black/30 transition-all duration-300"
        onMouseEnter={() => soundManager?.playChime?.(640, 0.015)}
      >
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Info Column */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top Meta Badges */}
            <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black text-white text-[11px] font-medium tracking-wide">
                <Briefcase className="w-3.5 h-3.5 text-amber-300" />
                <span>Current Employment</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-800 text-[11px]">
                <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                <span>{currentRole.period}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-600 text-[11px]">
                <MapPin className="w-3 h-3 text-neutral-400" />
                <span>{currentRole.location}</span>
              </span>
            </div>

            {/* Title & Organization */}
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-neutral-900 tracking-tight">
                {currentRole.role}
              </h3>
              <p className="mt-1 text-base sm:text-lg font-body font-medium text-neutral-700">
                {currentRole.institution}
              </p>
              <p className="text-xs font-mono text-neutral-500 mt-0.5">
                {currentRole.fullName}
              </p>
            </div>

            {/* Course Subjects Focus Pills */}
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-neutral-500" />
                <span>Assigned Undergraduate Coursework</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentRole.courses.map((course) => (
                  <span
                    key={course}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200/90 text-neutral-900 font-mono text-xs font-medium shadow-2xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
                    <span>{course}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Verbatim Bullet Responsibilities */}
            <div className="space-y-3 pt-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                Key Responsibilities &amp; Impact
              </div>
              <div className="space-y-3">
                {currentRole.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 group/bullet">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0 group-hover/bullet:scale-150 transition-transform"></div>
                    <p className="font-body text-sm sm:text-base text-neutral-700 leading-relaxed font-light">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills & Competencies */}
            <div className="pt-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2.5">
                Technologies &amp; Domain Expertise
              </div>
              <div className="flex flex-wrap gap-2">
                {currentRole.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg bg-white border border-neutral-200 text-neutral-800 text-xs font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Summary Sidebar Card */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-2xs">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">Position Status</span>
                <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Active Faculty Member
                </span>
              </div>

              {/* Teaching Pillars */}
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-100 flex items-start gap-3">
                  <BrainCircuit className="w-4 h-4 text-neutral-800 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-display font-semibold text-xs text-neutral-900">
                      Applied AI Instruction
                    </div>
                    <p className="text-[11px] font-body text-neutral-600 leading-tight mt-0.5">
                      Guiding students through computer vision architectures and NLP pipelines in Python.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-100 flex items-start gap-3">
                  <Cpu className="w-4 h-4 text-neutral-800 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-display font-semibold text-xs text-neutral-900">
                      System Fundamentals
                    </div>
                    <p className="text-[11px] font-body text-neutral-600 leading-tight mt-0.5">
                      Grounding algorithms, logic gates, and software design for scalable full-stack computing.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-100 flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-neutral-800 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-display font-semibold text-xs text-neutral-900">
                      Academic Rigor
                    </div>
                    <p className="text-[11px] font-body text-neutral-600 leading-tight mt-0.5">
                      Grading, mentoring, and hosting regular code debugging clinics.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-100/60 border border-neutral-200 text-xs text-neutral-600 font-body leading-relaxed">
                "Translating dense technical theory into clear, practical explanations that directly reinforce full-stack software craftsmanship."
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-neutral-400 font-mono text-[11px]">
              <span>AAST College of Engineering</span>
              <span>Sep 2026 – Present</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Prior Industry Experience Timeline */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            Prior Industry Experience
          </span>
          <span className="flex-1 h-[1px] bg-neutral-200"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {priorRoles.map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onMouseEnter={() => soundManager?.playChime?.(580 + idx * 30, 0.015)}
              className="p-6 rounded-3xl bg-neutral-100/70 border border-neutral-200/80 hover:border-neutral-400/80 hover:bg-white transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white border border-neutral-200 text-[11px] font-mono text-neutral-700">
                    <Building2 className="w-3 h-3 text-neutral-500" />
                    <span>{role.company}</span>
                  </span>
                  <span className="text-xs font-mono text-neutral-500">
                    {role.period}
                  </span>
                </div>

                <h4 className="font-display font-bold text-xl text-neutral-900 group-hover:text-black transition-colors mb-1">
                  {role.role}
                </h4>

                <p className="font-mono text-xs text-neutral-400 mb-4">
                  {role.type} &bull; {role.location}
                </p>

                <p className="text-neutral-600 font-body text-sm leading-relaxed mb-6 font-light">
                  {role.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {role.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-md bg-neutral-200/60 text-neutral-700 text-[11px] font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-200/70 flex items-center justify-between text-neutral-400 font-mono text-[11px]">
                <span>{role.company}</span>
                <span>Verified Experience</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
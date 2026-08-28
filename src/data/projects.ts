import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'themis',
    number: '01',
    title: 'Themis',
    subtitle: 'AI-Powered HR Management System',
    category: 'Full Stack & Machine Learning',
    year: '2024',
    description: 'An intelligent HR management system utilizing machine learning prediction models to streamline candidate recruitment and evaluate employee behavior dynamics.',
    longDescription: 'Engineered an AI-powered human resources intelligence platform combining predictive machine learning with a scalable full-stack service architecture. Automated candidate shortlisting and candidate screening workflows while providing high-concurrency real-time operational metrics and employee behavior insights.',
    technologies: ['React.js', 'Python', 'TensorFlow', 'Keras', 'PHP', 'MongoDB', 'Node.js', 'Tailwind CSS'],
    role: 'Full Stack & ML Engineer',
    highlights: [
      'Trained an employee-behavior prediction model in TensorFlow/Keras on historical HR data, using a documented train/test split to validate performance before deployment.',
      'Designed a backend architecture built to support 10,000+ concurrent users with real-time alerting, using MongoDB and a Node.js/PHP service layer.',
      'Automated candidate shortlisting workflows, replacing a fully manual recruitment screening process and freeing up HR team time for higher-value review.'
    ],
    liveUrl: 'https://github.com/ahamh321/THEMIS---All-in-One-HR-Management-System',
    githubUrl: 'https://github.com/ahamh321/THEMIS---All-in-One-HR-Management-System',
    accentColor: '#1a1a1a',
    artworkType: 'legal'
  },
  {
    id: 'promobot',
    number: '02',
    title: 'Promobot',
    subtitle: 'Retail Robot Fleet Platform',
    category: 'Full Stack & Robotics',
    year: '2024',
    description: 'A purpose-built retail fleet management console providing administrative governance and automated campaign dispatching to robotic units.',
    longDescription: 'Engineered a comprehensive retail robot fleet management platform with protected dashboards for admin and retail operators. Features end-to-end campaign deployment workflows and token-secured REST API infrastructure powering multi-unit retail rollouts.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Vite', 'JWT', 'REST APIs', 'Tailwind CSS'],
    role: 'Lead Full Stack Engineer',
    highlights: [
      'Built a React + TypeScript frontend with protected routes and lazy loading, serving separate, purpose-built dashboards for admin and retail users.',
      'Secured all REST API traffic by implementing JWT authentication and role-based access control across a Node.js/Express backend.',
      'Built an end-to-end campaign-creation and approval workflow, letting fleet operators deploy a product promotion to a specific robot without engineering involvement.'
    ],
    liveUrl: 'https://github.com/ahamh321/Promobot-Website',
    githubUrl: 'https://github.com/ahamh321/Promobot-Website',
    accentColor: '#121212',
    artworkType: 'robotics'
  },
  {
    id: 'shieldops',
    number: '03',
    title: 'ShieldOps',
    subtitle: 'AI-Powered SOC Analysis Platform',
    category: 'Front End & AI Systems',
    company: 'Accountants on Air - USA',
    isInternship: true,
    year: '2024',
    description: 'A responsive SOC analysis platform that transforms security incidents into structured risk assessments, findings, and actionable recommendations.',
    longDescription: 'Engineered during a frontend development and product design internship at Accountants on Air - USA, ShieldOps is a modern SOC (Security Operations Center) analysis platform. Designed user flows, dashboard architecture, information hierarchy, and reusable UI components to simplify complex cybersecurity telemetry for security analysts. Built the frontend using Next.js, React, and TypeScript, implementing core incident analysis workflows and integrating with backend APIs for real-time risk assessments, indicators, security policies, and AI-generated analysis.',
    technologies: ['Next.js', 'React', 'TypeScript', 'AI', 'Tailwind CSS', 'REST APIs', 'Cybersecurity'],
    role: 'Frontend Developer & Product Designer',
    highlights: [
      'Designed and developed a responsive SOC analysis platform that transforms security incidents into structured risk assessments, findings, and actionable recommendations.',
      'Designed user flows, dashboard architecture, information hierarchy, and reusable UI components to simplify complex cybersecurity data for security analysts.',
      'Built the frontend using Next.js, React, and TypeScript, implementing core incident analysis workflows and reusable components.',
      'Integrated frontend workflows with backend APIs to handle incident descriptions, affected assets, indicators, security policies, and AI-generated analysis.',
      'Collaborated with backend and AI team members to ensure accurate presentation of analysis results and policy-driven recommendations.'
    ],
    liveUrl: undefined,
    githubUrl: 'https://github.com/ahamh321/ShieldOps',
    isPrivateRepo: false,
    accentColor: '#111111',
    artworkType: 'shield'
  },
  {
    id: 'megatrust',
    number: '04',
    title: 'Megatrust',
    subtitle: 'Real-Time Taxi-Hailing & Mobile Location Tracking',
    category: 'Mobile Engineering & Cross-Platform',
    year: '2023',
    description: 'Cross-platform mobile application architected with Flutter and Dart, powering real-time WebSocket vehicle telematics and responsive routing for live taxi-hailing operations.',
    longDescription: 'Engineered a live taxi-hailing mobile experience across iOS and Android from a single Flutter/Dart codebase during an intensive engineering internship at Megatrust. Implemented low-latency WebSocket ETA location streaming, streamlined third-party payment and geolocation integrations with smart client caching, and integrated SOLID-driven modular architecture into sprint workflows.',
    technologies: ['Flutter', 'Dart', 'WebSockets', 'Geolocation APIs', 'Payment Gateways', 'iOS', 'Android', 'REST APIs', 'Agile'],
    role: 'Mobile Developer Intern',
    company: 'Megatrust',
    isInternship: true,
    highlights: [
      'Built a real-time, WebSocket-based location-tracking layer in Flutter/Dart for a live taxi-hailing app, giving riders and drivers continuously updated ETAs during active trips.',
      'Integrated payment and geolocation APIs into production, then added response caching and request batching to cut down on redundant network calls and speed up screen loads.',
      'Shipped 2 production-ready cross-platform apps (iOS + Android) from a single Flutter/Dart codebase, avoiding the cost of building and maintaining separate native codebases.',
      'Refactored core modules around SOLID principles and worked peer code review into every two-week Agile sprint, catching integration issues before release rather than after.'
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    isPrivateRepo: true,
    accentColor: '#181818',
    artworkType: 'mobile'
  },
  {
    id: 'dr-amro-khater',
    number: '05',
    title: 'Dr. Amro Khater',
    subtitle: 'Business Intelligence & Strategic Analytics Portfolio',
    category: 'Web Engineering & Analytics',
    year: '2023',
    description: 'A bespoke business intelligence portfolio and client acquisition platform featuring custom telemetry, analytics integration, and automated lead generation.',
    longDescription: 'Architected and developed a full-scale professional portfolio website for Dr. Amro Khater to showcase enterprise business intelligence solutions, data methodologies, and executive advisory case studies. Engineered a clean, responsive web application with integrated analytics tracking, interactive telemetry displays, and structured backend contact workflows.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Google Analytics', 'REST APIs', 'Responsive Design', 'SEO'],
    role: 'Lead Web Developer & Analytics Specialist',
    highlights: [
      'Developed a professional, responsive portfolio website featuring clean architectural layouts, interactive data presentation modules, and unified analytics tracking.',
      'Integrated real-time web analytics and custom conversion tracking to measure engagement across case studies and optimize visitor retention.',
      'Constructed secure PHP backend form processing with input sanitization, automated email notifications, and structured lead capture—significantly boosting client inquiries.',
      'Optimized asset delivery, semantic markup, and responsive layouts to ensure cross-device consistency and rapid page load performance.'
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    isPrivateRepo: true,
    accentColor: '#141414',
    artworkType: 'analytics'
  }
];

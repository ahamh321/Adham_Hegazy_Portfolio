export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  description: string;
  longDescription: string;
  technologies: string[];
  role: string;
  highlights: string[];
  company?: string;
  isInternship?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  isPrivateRepo?: boolean;
  accentColor: string;
  artworkType: 'robotics' | 'legal' | 'quantum' | 'vision' | 'sound' | 'generative' | 'editorial' | 'mobile' | 'analytics' | 'shield';
}

export type SplashPhase =
  | 'empty'
  | 'drawing'
  | 'portfolio'
  | 'collapsing'
  | 'dot'
  | 'pause'
  | 'drop'
  | 'ripple'
  | 'complete';

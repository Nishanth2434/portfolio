export type ProjectCategory = 'all' | 'ai' | 'web' | 'apps-systems';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  categoryLabel: string;
  featured?: boolean;
  featuredBadge?: string; // e.g. "AI Spotlight" or "AI + Agriculture"
  accentColor: string; // e.g. "cyan", "emerald", "purple", "amber", "rose", "indigo"
  overview: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  previewGradient: string;
  metrics?: { label: string; value: string }[];
}

export interface SkillItem {
  name: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  iconName: string;
  skills: SkillItem[];
  color: string;
}

export interface StrengthItem {
  title: string;
  description: string;
  iconName: string;
}

export interface EducationTimelineItem {
  degree: string;
  institution: string;
  board: string;
  period: string;
  score?: string;
  status: string;
  location: string;
}

export interface EducationInfo {
  degree: string;
  major: string;
  currentSemester: string;
  location: string;
  college: string;
  university: string;
  timeline: EducationTimelineItem[];
  focusAreas: string[];
  coreFoundations: string[];
}

export interface ContactChannel {
  label: string;
  value: string;
  href: string;
  icon: string;
  isPlaceholder: boolean;
  hint: string;
}

export type ProjectCategory = 'all' | 'ai-saas' | 'fullstack' | 'servicenow' | 'tools';

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption: string;
}

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  categoryLabel: string;
  tagline: string;
  whyCreated?: string;
  description: string;
  problemStatement: string;
  solution?: string;
  proposedSolution: string;
  targetUsers: string;
  mainFeatures: string[];
  plannedFeatures?: string[];
  technologies: string[];
  architectureNotes: string;
  myContribution: string;
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
  lessonsLearned: string[];
  screenshots?: ProjectScreenshot[];
  githubUrl: string;
  liveUrl?: string;
  status: 'Production' | 'Completed' | 'In Development' | 'Architecture Design';
  featured: boolean;
  highlightStats?: { label: string; value: string }[];
}

export interface SkillItem {
  name: string;
  category: 'languages' | 'frontend' | 'backend' | 'databases' | 'enterprise' | 'core';
  status: 'Proficient' | 'Actively Using' | 'Exploring';
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface Certification {
  id: string;
  title: string;
  shortCode: string;
  issuer: string;
  type: 'Professional Certification' | 'Technical Credential' | 'Achievement Milestone';
  description: string;
  verified: boolean;
  skillsCovered: string[];
  credentialUrl?: string;
  badgeAccent: 'emerald' | 'blue' | 'purple' | 'amber';
}

export interface TimelineMilestone {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'education' | 'certification' | 'project' | 'dsa';
  tags: string[];
}

export interface DSATopic {
  topic: string;
  count: number;
  proficiency: 'Strong' | 'Practicing' | 'Exploring';
}

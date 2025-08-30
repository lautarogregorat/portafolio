export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  imageUrl?: string;
}

export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface PillarContent {
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  color: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    title: string;
    heroTitle: string;
    aboutText: string;
  };
  pillars: PillarContent[];
  projects: Project[];
  contact: ContactInfo;
}
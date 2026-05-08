export interface Project {
  title: string;
  description: string;
  tagline: string;
  image?: string;
  tech: string[];
  links: {
    github: string;
    demo?: string;
  };
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    icon: string; // React-icon component name or just a string identifier
  }[];
}

export interface Experience {
  title: string;
  company: string;
  date: string;
  points: string[];
}

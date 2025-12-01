// types.ts

// Define the structure for a Project item
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
}

// Define the structure for a Skill category
export interface SkillCategory {
  title: string;
  skills: string[];
}

// Define the structure for navigation links
export interface NavLink {
  path: string;
  label: string;
}
import { Project, SkillCategory } from './types';
import { Layout as LayoutIcon, Database, Terminal, Code2 } from 'lucide-react';

export const personalInfo = {
  name: "Juztyne Clever Dalupang",
  role: "MERN Stack Developer",
  location: "Quezon City, Philippines",
  email: "dalupang.juztyneclever1@gmail.com",
  phone: "09930861780",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com"
  },
  bio: [
    "I am a 19-year-old Information Technology student at Quezon City University with a passion for building robust web applications. My expertise lies in the MERN stack, where I have successfully developed multiple full-scale projects, including comprehensive services systems for local Barangays.",
    "Beyond coding, I focus on creating clean, intuitive, and scalable solutions. I am proficient in the full development lifecycle—from database architecture with MongoDB to dynamic frontends using React and Next.js."
  ],
  experienceYears: "2+"
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Barangay Services Portal",
    description: "A comprehensive MERN stack application digitizing local government services. Features include resident document requests, incident reporting, and an administrative dashboard for officials.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    imageUrl: "https://images.unsplash.com/photo-1565514020176-6c2235b8b3a0?q=80&w=2070&auto=format&fit=crop&grayscale",
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    id: 2,
    title: "Inventory Management System",
    description: "Real-time inventory tracking system built for small businesses. Utilizes RESTful APIs for data management and provides insightful analytics on stock levels.",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "PostgreSQL"],
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop&grayscale",
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    id: 3,
    title: "Community Health Tracker",
    description: "An information system designed to help local communities track health metrics and schedule appointments. Built with a focus on accessibility and data security.",
    technologies: ["React", "Vite", "Node.js", "Render"],
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop&grayscale",
    repoUrl: "#"
  },
  {
    id: 4,
    title: "Personal Portfolio V1",
    description: "My first iteration of a personal portfolio site. Demonstrates my growth in UI/UX design and proficiency with static site generators.",
    technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
    imageUrl: "https://images.unsplash.com/photo-1467232004587-560fe0ef2998?q=80&w=2070&auto=format&fit=crop&grayscale",
    demoUrl: "#"
  }
];

export const skillsData = [
  {
    category: "Frontend Ecosystem",
    iconName: "Layout",
    description: "Crafting responsive and interactive user interfaces.",
    skills: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "HTML5/CSS3", "Vite", "Framer Motion"]
  },
  {
    category: "Backend & Database",
    iconName: "Database",
    description: "Building scalable APIs and managing data persistence.",
    skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "JWT Auth", "Mongoose"]
  },
  {
    category: "DevOps & Tools",
    iconName: "Terminal",
    description: "Deployment, version control, and cloud services.",
    skills: ["Git / GitHub", "Linux", "Vercel", "Render", "Cloudflare (Basic)", "Postman"]
  },
  {
    category: "Professional Skills",
    iconName: "Code2",
    description: "Soft skills that drive project success.",
    skills: ["Problem Solving", "System Analysis", "Team Collaboration", "Project Management", "Agile Basics"]
  }
];

export const timeline = [
  {
    year: "2023 - Present",
    role: "Freelance Full Stack Developer",
    description: "Developing custom web solutions for local clients, specializing in MERN stack applications for community services (Barangay systems).",
    type: "work"
  },
  {
    year: "2023 - Present",
    role: "Quezon City University",
    description: "Pursuing Bachelor of Science in Information Technology. Focusing on software engineering and web technologies.",
    type: "education"
  }
];
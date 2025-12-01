/**
 * @fileoverview Portfolio Data Configuration
 * @description Centralized data store for all portfolio content including
 * personal information, projects, skills, and timeline entries
 */

import { Project } from './types';

/**
 * Personal information and contact details
 */
export const personalInfo = {
  name: 'Juztyne Clever Dalupang',
  role: 'MERN Stack Developer',
  location: 'Quezon City, Philippines',
  email: 'dalupang.juztyneclever1@gmail.com',
  phone: '09930861780',
  socials: {
    github: 'https://github.com/Calliduz',
    linkedin: '',
    facebook: 'https://www.facebook.com/exalted.juztyne',
    twitter: '',
  },
  bio: [
    'I am a 19-year-old Information Technology student at Quezon City University with a passion for building robust web applications. My expertise lies in the MERN stack, where I have successfully developed multiple full-scale projects, including comprehensive service systems for local Barangays.',
    'Beyond coding, I focus on creating clean, intuitive, and scalable solutions. I am proficient in the full development lifecycle—from database architecture with MongoDB to dynamic front-ends using React and Next.js.',
  ],
  experienceYears: '2+',
};

/**
 * Portfolio projects
 * Each project showcases different technical skills and problem-solving abilities
 */
export const projects: Project[] = [
  {
    id: 1,
    title: 'Barangay Services Portal',
    description:
      'A comprehensive MERN stack application that digitizes local government services. Features include resident document requests, incident reporting, and an administrative dashboard for officials.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    imageUrl:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80',
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 2,
    title: 'Inventory Management System',
    description:
      'A real-time inventory tracking system built for small businesses. Utilizes RESTful APIs for data management and provides insightful analytics on stock levels and trends.',
    technologies: ['TypeScript', 'Next.js', 'Tailwind CSS', 'PostgreSQL'],
    imageUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 3,
    title: 'Community Health Tracker',
    description:
      'An information system designed to help local communities track health metrics and schedule appointments. Built with a strong focus on accessibility and data security.',
    technologies: ['React', 'Vite', 'Node.js', 'Render'],
    imageUrl:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80',
    repoUrl: '#',
  },
  {
    id: 4,
    title: 'Personal Portfolio V1',
    description:
      'My first iteration of a personal portfolio site. This project demonstrates my growth in UI/UX design and proficiency with modern frontend technologies.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
    demoUrl: '#',
  },
];

/**
 * Skills data organized by category
 * Each category includes an icon reference and list of skills
 */
export const skillsData = [
  {
    category: 'Frontend Ecosystem',
    iconName: 'Layout',
    description: 'Crafting responsive and interactive user interfaces.',
    skills: [
      'React.js',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'HTML5/CSS3',
      'Vite',
      'Framer Motion',
    ],
  },
  {
    category: 'Backend & Database',
    iconName: 'Database',
    description: 'Building scalable APIs and managing data persistence.',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'JWT Auth', 'Mongoose'],
  },
  {
    category: 'DevOps & Tools',
    iconName: 'Terminal',
    description: 'Deployment, version control, and cloud services.',
    skills: ['Git / GitHub', 'Linux', 'Vercel', 'Render', 'Cloudflare (Basic)', 'Postman'],
  },
  {
    category: 'Professional Skills',
    iconName: 'Code2',
    description: 'Soft skills that drive project success.',
    skills: [
      'Problem Solving',
      'System Analysis',
      'Team Collaboration',
      'Project Management',
      'Agile Basics',
    ],
  },
];

/**
 * Timeline entries for education and work experience
 * Displayed in chronological order (most recent first)
 */
export const timeline = [
  {
    year: '2023 - Present',
    role: 'Freelance Full-Stack Developer',
    description:
      'Developing custom web solutions for local clients, specializing in MERN stack applications for community services including Barangay management systems.',
    type: 'work',
  },
  {
    year: '2023 - Present',
    role: 'Quezon City University',
    description:
      'Pursuing a Bachelor of Science in Information Technology with a focus on software engineering and web technologies.',
    type: 'education',
  },
];

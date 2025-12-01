import React from 'react';
import { Github, Linkedin, Twitter, Mail, Facebook } from 'lucide-react';
import { personalInfo } from '../data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/90 border-t border-gray-200 py-12 mt-auto backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand & Copyright */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start gap-2">
            <div className="text-xl font-bold tracking-tighter text-black flex items-center gap-2">
              <span className="bg-black text-white px-2 py-1 rounded-md text-sm shadow-sm">DEV</span>
              <span>PORTFOLIO</span>
            </div>
            <p className="text-sm text-gray-500">
              © {currentYear} {personalInfo.name}. Built with React & Tailwind.
            </p>
          </div>

          {/* Social Links Icons */}
          <div className="flex space-x-6">
            <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-full text-gray-500 hover:text-white hover:bg-black transition-all duration-300" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-full text-gray-500 hover:text-white hover:bg-blue-600 transition-all duration-300" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={personalInfo.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-full text-gray-500 hover:text-white hover:bg-blue-800 transition-all duration-300" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href={personalInfo.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-full text-gray-500 hover:text-white hover:bg-sky-500 transition-all duration-300" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="p-2 bg-gray-100 rounded-full text-gray-500 hover:text-white hover:bg-red-500 transition-all duration-300" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
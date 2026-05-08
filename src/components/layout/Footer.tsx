import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

export const Footer = () => {
  return (
    <footer className="bg-bg-primary border-t border-border py-12">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-mono font-bold tracking-tighter text-text-primary">
            H<span className="text-accent-primary">.</span>
          </span>
          <p className="text-sm text-text-secondary mt-2">Building scalable web applications.</p>
        </div>

        <div className="flex space-x-6">
          <a href="https://github.com/Harpreet-Singh413" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-primary transition-colors" aria-label="GitHub">
            <FiGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/harpreet-singh-318a26318" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-primary transition-colors" aria-label="LinkedIn">
            <FiLinkedin size={20} />
          </a>
          <a href="https://leetcode.com/05FwixNrTF" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-primary transition-colors" aria-label="LeetCode">
            <SiLeetcode size={20} />
          </a>
          <a href="mailto:[harpreetsinghbassan0307@gmail.com]" className="text-text-secondary hover:text-accent-primary transition-colors" aria-label="Email">
            <FiMail size={20} />
          </a>
        </div>
      </div>
      <div className="container mx-auto px-6 max-w-6xl mt-8 text-center text-sm text-text-secondary">
        <p>&copy; {new Date().getFullYear()} Harpreet. Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

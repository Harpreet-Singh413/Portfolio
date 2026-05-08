import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import HARPREET_SINGH_RESUME from '../../assets/HARPREET_SINGH_RESUME.pdf';

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-accent-primary mb-4 block">Hello World, I'm</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-text-primary"
        >
          Harpreet Singh.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold mb-8 text-text-secondary"
        >
          I build scalable web applications.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-text-secondary max-w-2xl mx-auto mb-10"
        >
          I'm a BCA student and full-stack developer passionate about building excellent software that improves the lives of those around me. Currently focused on mastering modern web technologies and Data Structures.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button size="lg" asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={HARPREET_SINGH_RESUME} target="_blank" rel="noopener noreferrer">Download Resume</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center space-x-6"
        >
          {[
            { Icon: FiGithub, href: 'https://github.com/Harpreet-Singh413', label: 'GitHub' },
            { Icon: FiLinkedin, href: 'https://linkedin.com/in/harpreet-singh-318a26318', label: 'LinkedIn' },
            { Icon: SiLeetcode, href: 'https://leetcode.com/05FwixNrTF', label: 'LeetCode' },
            { Icon: FiMail, href: 'mailto:your.harpreetsinghbassan0307@gmail.com', label: 'Email' }
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-primary hover:-translate-y-1 transition-all"
              aria-label={label}
            >
              <Icon size={24} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

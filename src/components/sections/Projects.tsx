import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../../data/projects';
import { Badge } from '../ui/Badge';
import { Card, CardHeader, CardContent } from '../ui/Card';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-bg-secondary/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center">
            <span className="font-mono text-accent-primary text-xl mr-2">03.</span>
            Some Things I've Built
          </h2>
          <div className="h-px bg-border flex-grow ml-6"></div>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`relative grid md:grid-cols-12 gap-8 items-center ${
                idx % 2 === 0 ? '' : 'md:text-right'
              }`}
            >
              {/* Project Image */}
              <div 
                className={`md:col-span-7 relative z-10 ${
                  idx % 2 === 0 ? 'md:col-start-1' : 'md:col-start-6'
                }`}
              >
                <a 
                  href={project.links.demo || project.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative rounded-xl overflow-hidden group border border-border"
                >
                  <div className="absolute inset-0 bg-accent-primary/20 group-hover:bg-transparent transition-all duration-300 z-10"></div>
                  <div className="aspect-video bg-bg-tertiary flex items-center justify-center">
                    {/* @ts-ignore - image is optionally added in data */}
                    {project.image ? (
                      <img src={(project as any).image} alt={project.title} className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" />
                    ) : (
                      <span className="text-text-secondary font-mono opacity-50">Project Screenshot Placeholder</span>
                    )}
                  </div>
                </a>
              </div>

              {/* Project Details */}
              <div 
                className={`md:col-span-6 relative z-20 ${
                  idx % 2 === 0 ? 'md:col-start-7 md:-ml-12' : 'md:col-start-1 md:row-start-1 md:-mr-12'
                }`}
              >
                <p className="font-mono text-accent-primary text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold mb-4 text-text-primary hover:text-accent-primary transition-colors">
                  <a href={project.links.demo || project.links.github} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>
                
                <div className={`glass-card p-6 mb-6 text-text-secondary shadow-xl ${idx % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
                  <p className="mb-2 font-medium text-text-primary">{project.tagline}</p>
                  <p className="text-sm">{project.description}</p>
                </div>

                <ul className={`flex flex-wrap gap-3 font-mono text-xs text-text-secondary mb-6 ${idx % 2 === 0 ? '' : 'md:justify-end'}`}>
                  {project.tech.map(tech => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                <div className={`flex items-center gap-4 ${idx % 2 === 0 ? '' : 'md:justify-end'}`}>
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-primary transition-colors" aria-label="GitHub Link">
                      <FiGithub size={20} />
                    </a>
                  )}
                  {project.links.demo && (
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-primary transition-colors" aria-label="External Link">
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

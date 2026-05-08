import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import { Card, CardHeader, CardContent } from '../ui/Card';
import * as SiIcons from 'react-icons/si';

export const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center">
            <span className="font-mono text-accent-primary text-xl mr-2">02.</span>
            Technical Skills
          </h2>
          <div className="h-px bg-border flex-grow ml-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <h3 className="text-xl font-bold text-accent-secondary">{category.title}</h3>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => {
                      // @ts-ignore - dynamic icon loading
                      const Icon = SiIcons[skill.icon];
                      return (
                        <div 
                          key={skill.name}
                          className="flex items-center space-x-2 bg-bg-primary border border-border px-3 py-2 rounded-lg text-sm text-text-secondary hover:text-accent-primary hover:border-accent-primary/50 transition-colors cursor-default"
                        >
                          {Icon && <Icon size={16} />}
                          <span>{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../../data/experience';

export const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center">
            <span className="font-mono text-accent-primary text-xl mr-2">04.</span>
            Where I've Worked
          </h2>
          <div className="h-px bg-border flex-grow ml-6"></div>
        </motion.div>

        <div className="space-y-12">
          {experience.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:flex gap-8">
                <div className="hidden md:block w-32 flex-shrink-0 pt-1 text-sm font-mono text-text-secondary text-right">
                  {job.date}
                </div>
                <div className="relative border-l-2 border-border md:border-l-0 md:pl-8 pb-8 md:pb-0 last:pb-0 md:border-l-2 border-l-border md:ml-8 pl-8">
                  <div className="absolute w-3 h-3 bg-bg-primary border-2 border-accent-primary rounded-full -left-[7px] top-1.5 z-10" />
                  
                  <div className="md:hidden text-sm font-mono text-accent-primary mb-2">
                    {job.date}
                  </div>
                  
                  <h3 className="text-xl font-bold text-text-primary mb-1">
                    {job.title} <span className="text-accent-primary">@ {job.company}</span>
                  </h3>
                  
                  <ul className="mt-4 space-y-3">
                    {job.points.map((point, i) => (
                      <li key={i} className="text-text-secondary text-sm flex">
                        <span className="text-accent-primary mr-2 mt-1">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

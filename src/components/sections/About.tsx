import React from 'react';
import { motion } from 'framer-motion';
import profile from "../../assets/images/profile.jpeg"

export const About = () => {
  return (
    <section id="about" className="py-24 bg-bg-secondary/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
            <span className="font-mono text-accent-primary text-xl mr-2">01.</span>
            About Me
          </h2>
          <div className="w-full h-px bg-border flex-grow ml-4 hidden md:block"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 text-text-secondary text-lg"
          >
            <p>
              Hello! My name is Harpreet and I enjoy creating things that live on the internet.
              My interest in web development started back in high school when I decided to try editing custom Tumblr themes
              — turns out hacking together HTML & CSS taught me a lot about building user interfaces!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of building full-stack applications like LeetBoard and various management systems.
              My main focus these days is building accessible, inclusive products and digital experiences.
            </p>
            <p>
              I am currently pursuing my BCA degree, aiming to become a well-rounded software engineer. When I'm not coding,
              you can usually find me solving Data Structure and Algorithm problems or reading about new web technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative max-w-sm mx-auto md:ml-auto"
          >
            {/* Image Frame */}
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-xl opacity-20 group-hover:opacity-40 transition duration-500 blur-lg"></div>
              <div className="relative aspect-[4/5] rounded-xl bg-bg-tertiary border-2 border-accent-primary/20 overflow-hidden flex items-center justify-center">
                <img src={profile} alt="Harpreet Singh" className="object-cover object-top w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

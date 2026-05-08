import type { SkillCategory } from '../types';

export const skills: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: 'SiReact' },
      { name: 'JavaScript', icon: 'SiJavascript' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Spring Boot', icon: 'SiSpringboot' },
      { name: 'JWT', icon: 'SiJsonwebtokens' },
      { name: 'REST API', icon: 'SiPostman' },
    ]
  },
  {
    title: 'Database',
    skills: [
      { name: 'PostgreSQL', icon: 'SiPostgresql' },
      { name: 'MySQL', icon: 'SiMysql' }
    ]
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Git', icon: 'SiGit' },
      { name: 'GitHub', icon: 'SiGithub' },
      { name: 'Vercel', icon: 'SiVercel' },
      { name: 'Render', icon: 'SiRender' },
      { name: 'Vite', icon: 'SiVite' }
    ]
  },
  {
    title: 'Currently Learning',
    skills: [
      { name: 'Redis', icon: 'SiRedis' },
      { name: 'Docker', icon: 'SiDocker' }
    ]
  }
];

import type { Project } from '../types';
import SMS from '../assets/images/projects/SMS.png';
import Leetboard from '../assets/images/projects/Leetboard.png';


export const projects: Project[] = [
  {
    title: 'LeetBoard',
    tagline: 'Competitive coding, ranked. Track your LeetCode progress and compete on live leaderboards.',
    description: 'LeetBoard is a full-stack analytics platform where developers track LeetCode performance and compete on live leaderboards — built with React, Spring Boot, PostgreSQL, JWT and OAuth 2.0.',
    image: Leetboard,
    tech: ['React', 'Tailwind CSS', 'Spring Boot', 'PostgreSQL', 'JWT', 'OAuth 2.0'],
    links: {
      github: 'https://github.com/Harpreet-Singh413/LeetBoard',
      demo: 'https://leet-board-ebon.vercel.app/'
    },
    featured: true
  },
  {
    title: 'Student Management System',
    tagline: 'Full-stack CRUD application with role-based authentication and relational database.',
    description: 'A comprehensive system to manage student records with admin control',
    image: SMS,
    tech: ['React', 'Tailwind CSS', 'Spring Boot', 'PostgreSQL', 'JWT'],
    links: {
      github: 'https://github.com/Harpreet-Singh413/Student_Management_System',
      demo: 'https://student-management-system-two-fawn.vercel.app/'
    },
    featured: false
  }
];

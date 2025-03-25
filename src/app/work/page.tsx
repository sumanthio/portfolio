'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLinkIcon, GitHubIcon } from '@/components/Icons';

// Project type definition
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  type: 'Freelance' | 'Work' | 'Personal';
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

// Sample projects data
const projects: Project[] = [
  {
    id: 'e-commerce-platform',
    title: 'E-commerce Platform',
    description:
      'A modern e-commerce platform with product management, cart functionality, and payment processing.',
    image: '/projects/ecommerce.jpg',
    tags: ['Full Stack', 'E-commerce'],
    type: 'Work',
    technologies: ['React', 'Next.js', 'Node.js', 'Stripe', 'MongoDB'],
    liveUrl: 'https://example.com/ecommerce',
    githubUrl: 'https://github.com/example/ecommerce',
    featured: true,
  },
  {
    id: 'dashboard-analytics',
    title: 'Dashboard & Analytics',
    description:
      'Data visualization dashboard for business analytics with real-time data updates and interactive charts.',
    image: '/projects/dashboard.jpg',
    tags: ['Frontend', 'Dashboard'],
    type: 'Work',
    technologies: ['React', 'TypeScript', 'D3.js', 'Firebase'],
    liveUrl: 'https://example.com/dashboard',
    featured: true,
  },
  {
    id: 'travel-app',
    title: 'Travel Booking App',
    description:
      'A travel booking application with hotel and flight search, booking management, and user authentication.',
    image: '/projects/travel.jpg',
    tags: ['Full Stack', 'Mobile'],
    type: 'Freelance',
    technologies: ['React Native', 'GraphQL', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://example.com/travel',
    githubUrl: 'https://github.com/example/travel',
    featured: true,
  },
  {
    id: 'social-network',
    title: 'Social Network Platform',
    description:
      'A social media platform with user profiles, posts, comments, and real-time notifications.',
    image: '/projects/social.jpg',
    tags: ['Full Stack', 'Social'],
    type: 'Personal',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    githubUrl: 'https://github.com/example/social',
    featured: false,
  },
  {
    id: 'weather-app',
    title: 'Weather Application',
    description:
      'A weather forecast application with location detection, 7-day forecast, and weather alerts.',
    image: '/projects/weather.jpg',
    tags: ['Frontend', 'API'],
    type: 'Personal',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Weather API'],
    liveUrl: 'https://example.com/weather',
    githubUrl: 'https://github.com/example/weather',
    featured: false,
  },
  {
    id: 'task-management',
    title: 'Task Management System',
    description:
      'A task and project management system with teams, task assignments, and progress tracking.',
    image: '/projects/tasks.jpg',
    tags: ['Full Stack', 'Productivity'],
    type: 'Freelance',
    technologies: ['React', 'TypeScript', 'Express', 'PostgreSQL'],
    liveUrl: 'https://example.com/tasks',
    featured: false,
  },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [activeTechFilter, setActiveTechFilter] = useState<string>('All');

  // Extract unique technologies from all projects
  const allTechnologies = ['All', ...new Set(projects.flatMap((project) => project.technologies))];

  // Filter projects based on selected filters
  const filteredProjects = projects.filter((project) => {
    const typeMatch = activeFilter === 'All' || project.type === activeFilter;
    const techMatch = activeTechFilter === 'All' || project.technologies.includes(activeTechFilter);
    return typeMatch && techMatch;
  });

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My Work & Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              A collection of projects I've developed throughout my 11-year career as a Frontend
              Engineer. These projects showcase my skills, problem-solving abilities, and commitment
              to quality.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                Filter by Type:
              </h2>
              <div className="flex flex-wrap gap-2">
                {['All', 'Work', 'Freelance', 'Personal'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                      activeFilter === filter
                        ? 'bg-indigo-600 text-white dark:bg-indigo-500'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                Filter by Technology:
              </h2>
              <div className="flex flex-wrap gap-2">
                <select
                  value={activeTechFilter}
                  onChange={(e) => setActiveTechFilter(e.target.value)}
                  className="px-4 py-2 rounded-md text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 border-none focus:ring-2 focus:ring-indigo-500"
                >
                  {allTechnologies.map((tech) => (
                    <option key={tech} value={tech}>
                      {tech}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-gray-600 dark:text-gray-400">
                No projects match the selected filters.
              </h3>
              <button
                onClick={() => {
                  setActiveFilter('All');
                  setActiveTechFilter('All');
                }}
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

// Project Card Component
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      {/* Project Image */}
      <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
        {/* This would be replaced with actual project images */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400">{project.title} Image</span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
          <span className="inline-block px-2 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 rounded-full">
            {project.type}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Project Links */}
      <div className="px-6 pb-6 pt-2 mt-auto border-t border-gray-100 dark:border-gray-700">
        <div className="flex justify-between">
          <Link
            href={`/work/${project.id}`}
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
          >
            View Details
          </Link>

          <div className="flex gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                aria-label="GitHub Repository"
              >
                <GitHubIcon className="w-5 h-5" />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                aria-label="Live Demo"
              >
                <ExternalLinkIcon className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

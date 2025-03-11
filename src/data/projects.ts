import type { Project } from '@/types/index';

/**
 * Sample projects data with proper typing
 */
export const projects: Project[] = [
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
    date: '2022-03',
    detailedDescription:
      'A comprehensive e-commerce solution that includes product management, shopping cart functionality, secure checkout with Stripe, and user account management. The platform was built with scalability in mind and supports thousands of products and concurrent users.',
    challenges: [
      'Implementing real-time inventory management',
      'Optimizing product search for large catalogs',
      'Ensuring secure payment processing',
    ],
    solutions: [
      'Utilized MongoDB change streams for real-time updates',
      'Implemented Elasticsearch for fast and accurate product search',
      'Integrated Stripe API with proper security measures',
    ],
    results: [
      'Increased conversion rate by 35%',
      'Reduced page load time by 40%',
      'Improved search accuracy by 60%',
    ],
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
    date: '2021-11',
    detailedDescription:
      'An analytics dashboard that visualizes complex business data in an intuitive interface. Features include customizable widgets, real-time data updates, and interactive charts that help business users make informed decisions based on their data.',
    challenges: [
      'Handling large datasets efficiently',
      'Creating responsive visualizations',
      'Implementing real-time updates',
    ],
    solutions: [
      'Used data virtualization techniques for efficient rendering',
      'Implemented responsive D3.js charts with TypeScript',
      'Integrated Firebase for real-time data synchronization',
    ],
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
    date: '2021-06',
    testimonial: {
      quote:
        'The travel booking app exceeded our expectations. It was delivered on time and our users love the intuitive interface.',
      name: 'Sarah Johnson',
      title: 'CEO',
      company: 'TravelEasy Inc.',
    },
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
    date: '2020-09',
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
    date: '2020-04',
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
    date: '2019-12',
  },
];

/**
 * Get featured projects
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

/**
 * Get project by ID
 */
export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

/**
 * Filter projects by type
 */
export function filterProjectsByType(type: string): Project[] {
  if (type === 'All') {
    return projects;
  }
  return projects.filter((project) => project.type === type);
}

/**
 * Filter projects by technology
 */
export function filterProjectsByTechnology(tech: string): Project[] {
  if (tech === 'All') {
    return projects;
  }
  return projects.filter((project) => project.technologies.includes(tech));
}

/**
 * Get unique technologies from all projects
 */
export function getUniqueTechnologies(): string[] {
  const allTech = projects.flatMap((project) => project.technologies);
  return ['All', ...new Set(allTech)];
}

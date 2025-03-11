/**
 * Common type definitions for the portfolio project
 */

/**
 * Project type definition
 */
export type ProjectType = 'Freelance' | 'Work' | 'Personal';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  type: ProjectType;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  detailedDescription?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
  testimonial?: Testimonial;
  date: string;
}

/**
 * Timeline item for career history
 */
export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  isLast?: boolean;
}

/**
 * Testimonial type
 */
export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

/**
 * Contact form data
 */
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * Form status type
 */
export type FormStatusType = 'success' | 'error' | 'idle';

export interface FormStatus {
  type: FormStatusType;
  message: string;
}

/**
 * Skill category
 */
export interface SkillCategory {
  name: string;
  skills: string[];
}

/**
 * Navigation link
 */
export interface NavLink {
  name: string;
  path: string;
}

/**
 * SEO metadata
 */
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterImage?: string;
}

/**
 * Theme mode
 */
export type ThemeMode = 'dark' | 'light';

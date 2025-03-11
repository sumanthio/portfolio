/**
 * Type guard utilities for the portfolio project
 * These functions help with runtime type checking
 */

import type {
  Project,
  TimelineItem,
  Testimonial,
  ContactFormData,
  NavLink,
  ProjectType,
} from '../types';

/**
 * Type predicate to verify an object is a valid Project
 */
export function isProject(obj: unknown): obj is Project {
  if (!obj || typeof obj !== 'object') return false;

  const project = obj as Record<string, unknown>;

  return (
    typeof project.id === 'string' &&
    typeof project.title === 'string' &&
    typeof project.description === 'string' &&
    typeof project.image === 'string' &&
    Array.isArray(project.tags) &&
    project.tags.every((tag) => typeof tag === 'string') &&
    ['Freelance', 'Work', 'Personal'].includes(project.type as string) &&
    Array.isArray(project.technologies) &&
    project.technologies.every((tech) => typeof tech === 'string') &&
    typeof project.featured === 'boolean' &&
    (project.liveUrl === undefined || typeof project.liveUrl === 'string') &&
    (project.githubUrl === undefined || typeof project.githubUrl === 'string') &&
    typeof project.date === 'string'
  );
}

/**
 * Type predicate to verify an object is a valid TimelineItem
 */
export function isTimelineItem(obj: unknown): obj is TimelineItem {
  if (!obj || typeof obj !== 'object') return false;

  const timelineItem = obj as Record<string, unknown>;

  return (
    typeof timelineItem.year === 'string' &&
    typeof timelineItem.title === 'string' &&
    typeof timelineItem.company === 'string' &&
    typeof timelineItem.description === 'string' &&
    Array.isArray(timelineItem.technologies) &&
    timelineItem.technologies.every((tech) => typeof tech === 'string') &&
    (timelineItem.isLast === undefined || typeof timelineItem.isLast === 'boolean')
  );
}

/**
 * Type predicate to verify an object is a valid Testimonial
 */
export function isTestimonial(obj: unknown): obj is Testimonial {
  if (!obj || typeof obj !== 'object') return false;

  const testimonial = obj as Record<string, unknown>;

  return (
    typeof testimonial.quote === 'string' &&
    typeof testimonial.name === 'string' &&
    typeof testimonial.title === 'string' &&
    typeof testimonial.company === 'string'
  );
}

/**
 * Type predicate to verify an object is a valid ContactFormData
 */
export function isContactFormData(obj: unknown): obj is ContactFormData {
  if (!obj || typeof obj !== 'object') return false;

  const formData = obj as Record<string, unknown>;

  return (
    typeof formData.name === 'string' &&
    typeof formData.email === 'string' &&
    typeof formData.message === 'string'
  );
}

/**
 * Type predicate to verify an object is a valid NavLink
 */
export function isNavLink(obj: unknown): obj is NavLink {
  if (!obj || typeof obj !== 'object') return false;

  const navLink = obj as Record<string, unknown>;

  return typeof navLink.name === 'string' && typeof navLink.path === 'string';
}

/**
 * Generic type guard for checking if a value is a non-nullable (not null or undefined)
 */
export function isNonNullable<T>(value: T): value is NonNullable<T> {
  return value !== null && value !== undefined;
}

/**
 * Helper to ensure an array of items all match a type predicate
 */
export function ensureArrayOf<T>(array: unknown[], predicate: (item: unknown) => item is T): T[] {
  if (!Array.isArray(array)) {
    throw new Error('Value is not an array');
  }

  if (!array.every(predicate)) {
    throw new Error('Array contains items of invalid type');
  }

  return array as T[];
}

/**
 * Type predicate to verify a value is a valid ProjectType
 */
export function isProjectType(value: unknown): value is ProjectType {
  return value === 'Freelance' || value === 'Work' || value === 'Personal';
}

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

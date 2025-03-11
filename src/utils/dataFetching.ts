/**
 * Data fetching utilities with TypeScript support
 */

import { isProject, isTimelineItem, isTestimonial } from './typeGuards';
import type { Project, TimelineItem, Testimonial } from '../types';

interface FetchOptions {
  headers?: Record<string, string>;
  timeout?: number;
  cache?: RequestCache;
}

const DEFAULT_TIMEOUT = 8000; // 8 seconds

/**
 * Handles fetch response with proper error handling and type casting
 */
async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP error ${response.status}: ${errorText}`);
  }

  return response.json() as Promise<T>;
}

/**
 * Generic fetch data function with timeout and error handling
 */
export async function fetchData<T>(url: string, options: FetchOptions = {}): Promise<T> {
  const { timeout = DEFAULT_TIMEOUT, ...fetchOptions } = options;

  // Create an abort controller for timeout handling
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
    });

    return await handleResponse<T>(response);
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error(`Request timed out after ${timeout}ms`);
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

/**
 * Fetch projects with type validation
 */
export async function fetchProjects(url: string, options: FetchOptions = {}): Promise<Project[]> {
  const data = await fetchData<unknown[]>(url, options);

  if (!Array.isArray(data)) {
    throw new Error('Expected an array of projects');
  }

  // Validate and filter out invalid projects
  const validProjects = data.filter(isProject);

  if (validProjects.length !== data.length) {
    console.warn(
      `Some projects were filtered out due to invalid format (${data.length - validProjects.length})`
    );
  }

  return validProjects;
}

/**
 * Fetch timeline items with type validation
 */
export async function fetchTimelineItems(
  url: string,
  options: FetchOptions = {}
): Promise<TimelineItem[]> {
  const data = await fetchData<unknown[]>(url, options);

  if (!Array.isArray(data)) {
    throw new Error('Expected an array of timeline items');
  }

  // Validate and filter out invalid timeline items
  const validItems = data.filter(isTimelineItem);

  if (validItems.length !== data.length) {
    console.warn(
      `Some timeline items were filtered out due to invalid format (${data.length - validItems.length})`
    );
  }

  return validItems;
}

/**
 * Fetch testimonials with type validation
 */
export async function fetchTestimonials(
  url: string,
  options: FetchOptions = {}
): Promise<Testimonial[]> {
  const data = await fetchData<unknown[]>(url, options);

  if (!Array.isArray(data)) {
    throw new Error('Expected an array of testimonials');
  }

  // Validate and filter out invalid testimonials
  const validTestimonials = data.filter(isTestimonial);

  if (validTestimonials.length !== data.length) {
    console.warn(
      `Some testimonials were filtered out due to invalid format (${data.length - validTestimonials.length})`
    );
  }

  return validTestimonials;
}

/**
 * Type-safe fetch for a single project
 */
export async function fetchProjectById(
  url: string,
  projectId: string,
  options: FetchOptions = {}
): Promise<Project> {
  const fullUrl = `${url}/${encodeURIComponent(projectId)}`;
  const data = await fetchData<unknown>(fullUrl, options);

  if (!isProject(data)) {
    throw new Error('Invalid project format received');
  }

  return data;
}

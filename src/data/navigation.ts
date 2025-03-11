import type { NavLink } from '@/types/index';

/**
 * Main navigation links with proper typing
 */
export const navLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Work', path: '/work' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
  { name: 'Resume', path: '/resume' },
  { name: 'Uses', path: '/uses' },
];

/**
 * Footer navigation links with proper typing
 */
export const footerLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Work', path: '/work' },
  { name: 'Contact', path: '/contact' },
];

/**
 * Social links with proper typing
 */
export interface SocialLink {
  name: string;
  url: string;
  ariaLabel: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    ariaLabel: 'GitHub',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    ariaLabel: 'LinkedIn',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    ariaLabel: 'Twitter',
  },
];

/**
 * Get active link status by comparing current path with link path
 */
export function isActiveLink(currentPath: string, linkPath: string): boolean {
  if (linkPath === '/') {
    return currentPath === '/';
  }
  return currentPath.startsWith(linkPath);
}

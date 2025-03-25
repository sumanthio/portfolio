'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from '@/components/Icons';
import { navLinks } from '@/data/navigation';
import type { NavLink } from '../types';
import { useDarkMode } from '../hooks/useThemeMode';
import type { MouseEventHandler, ReactElement } from 'react';

// Define a custom Link component that accepts undefined onClick
interface CustomLinkProps {
  href: string;
  className: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  'aria-current'?: 'page' | undefined;
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  className,
  onClick,
  'aria-current': ariaCurrent,
  children,
}) => {
  return (
    <Link
      href={href}
      className={className}
      onClick={onClick || (() => {})}
      aria-current={ariaCurrent}
    >
      {children}
    </Link>
  );
};

export default function Navbar(): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const { isDarkMode, toggleThemeMode } = useDarkMode();

  /**
   * Checks if the link is active based on the current pathname
   */
  const isActivePath = (path: string): boolean => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  /**
   * Handle mobile menu toggle
   */
  const handleMenuToggle = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  /**
   * Close mobile menu
   */
  const handleCloseMenu = (): void => {
    setIsMenuOpen(false);
  };

  /**
   * Render a navigation link
   */
  const renderNavLink = (link: NavLink, isMobile = false): ReactElement => {
    const isActive = isActivePath(link.path);

    const baseClasses = 'transition-colors duration-300';
    const desktopClasses = `text-sm font-medium ${baseClasses} ${
      isActive
        ? 'text-indigo-600 dark:text-indigo-400'
        : 'text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'
    }`;

    const mobileClasses = `block px-3 py-2 rounded-md text-base font-medium ${baseClasses} ${
      isActive
        ? 'text-indigo-600 dark:text-indigo-400 bg-gray-50 dark:bg-gray-800'
        : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-800'
    }`;

    const handleClick: MouseEventHandler<HTMLAnchorElement> | undefined = isMobile
      ? handleCloseMenu
      : undefined;

    return (
      <div key={link.path}>
        <CustomLink
          href={link.path}
          className={isMobile ? mobileClasses : desktopClasses}
          onClick={handleClick}
          aria-current={isActive ? 'page' : undefined}
        >
          {link.name}
        </CustomLink>
      </div>
    );
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <CustomLink
              href="/"
              className="flex-shrink-0 flex items-center text-lg font-bold text-gray-800 dark:text-white"
            >
              <span className="text-indigo-600 dark:text-indigo-400 font-mono">{'< '}</span>
              <span>Portfolio</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-mono">{' />'}</span>
            </CustomLink>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => renderNavLink(link))}

            <button
              onClick={toggleThemeMode}
              className="p-2 rounded-full text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 focus:outline-none"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              type="button"
            >
              {isDarkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleThemeMode}
              className="p-2 rounded-full text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 focus:outline-none mr-2"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              type="button"
            >
              {isDarkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </button>

            <button
              onClick={handleMenuToggle}
              className="p-2 rounded-md text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
              type="button"
            >
              {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => renderNavLink(link, true))}
          </div>
        </div>
      )}
    </nav>
  );
}

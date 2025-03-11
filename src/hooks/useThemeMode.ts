/**
 * Custom hook for managing theme mode (dark/light)
 */

import { useState, useEffect, useCallback } from 'react';
import type { ThemeMode } from '../types';

interface UseThemeModeReturn {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  toggleThemeMode: () => void;
  isDarkMode: boolean;
}

const THEME_LOCAL_STORAGE_KEY = 'portfolio-theme-mode';

/**
 * Custom hook for managing theme mode with proper persistence
 * Includes automatic detection of system preference and localStorage persistence
 */
export function useThemeMode(): UseThemeModeReturn {
  // Initialize state from localStorage or system preference
  const [themeMode, setThemeModeState] = useState<ThemeMode>(() => {
    // Check if we're in the browser environment
    if (typeof window === 'undefined') return 'light';

    // First try to get from localStorage
    const storedTheme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as ThemeMode | null;
    if (storedTheme && (storedTheme === 'dark' || storedTheme === 'light')) {
      return storedTheme;
    }

    // Otherwise check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const isDarkMode = themeMode === 'dark';

  // Set theme in localStorage and update document class
  const setThemeMode = useCallback((mode: ThemeMode): void => {
    setThemeModeState(mode);

    if (typeof window !== 'undefined') {
      localStorage.setItem(THEME_LOCAL_STORAGE_KEY, mode);

      // Update document class for CSS
      if (mode === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  // Toggle between dark and light
  const toggleThemeMode = useCallback((): void => {
    setThemeMode(isDarkMode ? 'light' : 'dark');
  }, [isDarkMode, setThemeMode]);

  // Set up listeners for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Initial setup
    if (themeMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Listen for changes in system preference if no saved preference
    const savedPreference = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);

    if (!savedPreference) {
      const handleChange = (e: MediaQueryListEvent): void => {
        setThemeMode(e.matches ? 'dark' : 'light');
      };

      mediaQuery.addEventListener('change', handleChange);

      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    }

    return undefined;
  }, [themeMode, setThemeMode]);

  return {
    themeMode,
    setThemeMode,
    toggleThemeMode,
    isDarkMode,
  };
}

// For backward compatibility with existing code
export const useDarkMode = useThemeMode;

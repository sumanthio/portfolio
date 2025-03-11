'use client';

import { useState, useEffect } from 'react';
import type { ThemeMode } from '@/types/index';

interface UseDarkModeReturn {
  darkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (value: boolean) => void;
  themeMode: ThemeMode;
}

/**
 * Custom hook to handle dark mode functionality with localStorage persistence
 */
export function useDarkMode(): UseDarkModeReturn {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    // Check if dark mode preference exists in localStorage
    const savedDarkMode = localStorage.getItem('darkMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set initial state based on localStorage or system preference
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode === 'true');
    } else {
      setDarkMode(systemPrefersDark);
      localStorage.setItem('darkMode', String(systemPrefersDark));
    }

    // Apply dark mode class to document
    updateDocumentClass(savedDarkMode === 'true' || systemPrefersDark);
  }, []);

  // Helper function to update document class
  const updateDocumentClass = (isDark: boolean): void => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Toggle dark mode
  const toggleDarkMode = (): void => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
    updateDocumentClass(newDarkMode);
  };

  // Set dark mode to specific value
  const setDarkModeValue = (value: boolean): void => {
    setDarkMode(value);
    localStorage.setItem('darkMode', String(value));
    updateDocumentClass(value);
  };

  return {
    darkMode,
    toggleDarkMode,
    setDarkMode: setDarkModeValue,
    themeMode: darkMode ? 'dark' : 'light',
  };
}

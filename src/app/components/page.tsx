'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from '@/components/Icons';

// Component categories to be showcased
const componentCategories = [
  {
    id: 'typography',
    name: 'Typography',
    description: 'Text elements like headings, paragraphs, and lists',
    link: '/components/typography',
  },
  {
    id: 'buttons',
    name: 'Buttons',
    description: 'Various button styles, sizes, and states',
    link: '/components/buttons',
  },
  {
    id: 'forms',
    name: 'Form Elements',
    description: 'Input fields, checkboxes, radio buttons, and more',
    link: '/components/forms',
  },
  {
    id: 'cards',
    name: 'Cards',
    description: 'Card layouts for different content types',
    link: '/components/cards',
  },
  {
    id: 'navigation',
    name: 'Navigation',
    description: 'Navigation components like tabs, breadcrumbs, and pagination',
    link: '/components/navigation',
  },
  {
    id: 'feedback',
    name: 'Feedback',
    description: 'Alerts, notifications, and loading indicators',
    link: '/components/feedback',
  },
  {
    id: 'layout',
    name: 'Layout',
    description: 'Grid systems, containers, and layout utilities',
    link: '/components/layout',
  },
  {
    id: 'data-display',
    name: 'Data Display',
    description: 'Tables, lists, and data visualization components',
    link: '/components/data-display',
  },
];

export default function ComponentsPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Component Library
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              A showcase of the design system components used throughout this portfolio site. Explore
              the building blocks that make up the user interface.
            </p>
          </div>
        </div>
      </section>

      {/* Component Categories */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {componentCategories.map((category) => (
              <Link 
                href={category.link} 
                key={category.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {category.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {category.description}
                </p>
                <div className="text-indigo-600 dark:text-indigo-400 font-medium inline-flex items-center">
                  Explore
                  <ChevronRightIcon className="ml-1 w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Guide Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            How to Use This Library
          </h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  1. Explore Components
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Browse through the categories above to see all available components with their
                  variations and properties.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  2. Copy Code Examples
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Each component page includes code snippets that you can copy and use directly in
                  your projects.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  3. View Component API
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Check the documentation for each component to understand available props,
                  variants, and best practices.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  4. Adapt to Your Needs
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  These components are built with Tailwind CSS and can be easily customized to fit
                  your specific design requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
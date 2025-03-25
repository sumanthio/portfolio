'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeftIcon } from '@/components/Icons';

// Component to display code snippets
const CodeSnippet = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mt-4 mb-8">
      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
        <pre className="text-gray-300 text-sm font-mono whitespace-pre">
          <code>{code}</code>
        </pre>
      </div>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 px-2 py-1 text-xs text-white bg-indigo-600 hover:bg-indigo-700 rounded"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};

// Component to display a button variant with title and description
const ButtonDemo = ({
  title,
  description,
  children,
  code,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  code: string;
}) => {
  return (
    <div className="mb-12">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
      
      <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg flex flex-wrap gap-4 items-center justify-center mb-4">
        {children}
      </div>
      
      <CodeSnippet code={code} />
    </div>
  );
};

export default function ButtonsPage() {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="py-16 md:py-24 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-6">
            <Link
              href="/components"
              className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 inline-flex items-center mr-4"
            >
              <ChevronLeftIcon className="w-5 h-5 mr-1" />
              Back to Components
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Buttons
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like dialogs, forms, cards, and toolbars.
          </p>
        </div>
      </section>

      {/* Button Demos */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 pb-4 border-b border-gray-200 dark:border-gray-700">
            Button Variants
          </h2>
          
          {/* Primary Buttons */}
          <ButtonDemo
            title="Primary Button"
            description="Used for primary actions and high-emphasis actions."
            code={`<button className="px-6 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm transition-colors duration-300">
  Primary Button
</button>

// Disabled state
<button disabled className="px-6 py-3 text-base font-medium text-white bg-indigo-400 cursor-not-allowed rounded-md shadow-sm">
  Disabled
</button>`}
          >
            <button className="px-6 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm transition-colors duration-300">
              Primary Button
            </button>
            <button disabled className="px-6 py-3 text-base font-medium text-white bg-indigo-400 cursor-not-allowed rounded-md shadow-sm">
              Disabled
            </button>
          </ButtonDemo>
          
          {/* Secondary Buttons */}
          <ButtonDemo
            title="Secondary Button"
            description="Used for secondary actions or less important actions."
            code={`<button className="px-6 py-3 text-base font-medium text-indigo-600 bg-white hover:bg-gray-50 rounded-md shadow-sm border border-indigo-600 transition-colors duration-300">
  Secondary Button
</button>

// Dark mode variation
<button className="px-6 py-3 text-base font-medium text-indigo-400 bg-gray-800 hover:bg-gray-700 rounded-md shadow-sm border border-indigo-400 transition-colors duration-300">
  Secondary Button (Dark)
</button>`}
          >
            <button className="px-6 py-3 text-base font-medium text-indigo-600 bg-white hover:bg-gray-50 rounded-md shadow-sm border border-indigo-600 transition-colors duration-300">
              Secondary Button
            </button>
            <button className="px-6 py-3 text-base font-medium text-indigo-400 bg-gray-800 hover:bg-gray-700 rounded-md shadow-sm border border-indigo-400 transition-colors duration-300">
              Secondary Button (Dark)
            </button>
          </ButtonDemo>
          
          {/* Button Sizes */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 mt-16 pb-4 border-b border-gray-200 dark:border-gray-700">
            Button Sizes
          </h2>
          
          <ButtonDemo
            title="Button Sizes"
            description="Different sizes for various contexts and uses."
            code={`// Small
<button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm transition-colors duration-300">
  Small
</button>

// Medium (Default)
<button className="px-6 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm transition-colors duration-300">
  Medium
</button>

// Large
<button className="px-8 py-4 text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm transition-colors duration-300">
  Large
</button>`}
          >
            <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm transition-colors duration-300">
              Small
            </button>
            <button className="px-6 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm transition-colors duration-300">
              Medium
            </button>
            <button className="px-8 py-4 text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm transition-colors duration-300">
              Large
            </button>
          </ButtonDemo>
          
          {/* Icon Buttons */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 mt-16 pb-4 border-b border-gray-200 dark:border-gray-700">
            Icon Buttons
          </h2>
          
          <ButtonDemo
            title="Buttons with Icons"
            description="Buttons with icons for better visual communication."
            code={`// Icon on left
<button className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm transition-colors duration-300">
  <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 12l-4-4h8l-4 4z" />
  </svg>
  Download
</button>

// Icon on right
<button className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm transition-colors duration-300">
  View More
  <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
</button>

// Icon only
<button className="p-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-sm transition-colors duration-300">
  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
  </svg>
  <span className="sr-only">Add Item</span>
</button>`}
          >
            <button className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm transition-colors duration-300">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12l-4-4h8l-4 4z" />
              </svg>
              Download
            </button>
            
            <button className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm transition-colors duration-300">
              View More
              <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            <button className="p-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-sm transition-colors duration-300">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              <span className="sr-only">Add Item</span>
            </button>
          </ButtonDemo>
          
          {/* Button Group */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 mt-16 pb-4 border-b border-gray-200 dark:border-gray-700">
            Button Groups
          </h2>
          
          <ButtonDemo
            title="Button Group"
            description="Group related buttons for better visual organization."
            code={`<div className="inline-flex rounded-md shadow-sm" role="group">
  <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-l-md hover:bg-indigo-700 focus:z-10">
    Week
  </button>
  <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border-l border-indigo-400 hover:bg-indigo-700 focus:z-10">
    Month
  </button>
  <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-r-md border-l border-indigo-400 hover:bg-indigo-700 focus:z-10">
    Year
  </button>
</div>`}
          >
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-l-md hover:bg-indigo-700 focus:z-10">
                Week
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border-l border-indigo-400 hover:bg-indigo-700 focus:z-10">
                Month
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-r-md border-l border-indigo-400 hover:bg-indigo-700 focus:z-10">
                Year
              </button>
            </div>
          </ButtonDemo>
          
          {/* Usage Guidelines */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-16 pb-4 border-b border-gray-200 dark:border-gray-700">
            Usage Guidelines
          </h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-16">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Button Hierarchy
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Use primary buttons for main actions, secondary buttons for alternative actions, and 
                  avoid having multiple primary buttons in the same section.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Button Text
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Use concise, specific action verbs that clearly describe the button's action (e.g., "Save", 
                  "Submit", "Cancel"). Avoid vague terms like "OK" or "Click here".
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Button Placement
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Place primary actions on the right and secondary actions on the left. Keep button 
                  placement consistent throughout the interface.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Button Size
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Use button size to indicate importance. Use larger buttons for important actions and 
                  smaller buttons for less significant actions.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Accessibility
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Ensure buttons have sufficient color contrast, provide clear focus states, and 
                  include descriptive text for screen readers with icon-only buttons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
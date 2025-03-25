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

// Component to display a form element with title and description
const FormDemo = ({
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
      
      <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg mb-4">
        {children}
      </div>
      
      <CodeSnippet code={code} />
    </div>
  );
};

export default function FormsPage() {
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
            Forms
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Form components help users input, edit, and select information. Good form design improves completion rates and data accuracy.
          </p>
        </div>
      </section>

      {/* Form Demos */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 pb-4 border-b border-gray-200 dark:border-gray-700">
            Text Inputs
          </h2>
          
          {/* Basic Text Input */}
          <FormDemo
            title="Basic Text Input"
            description="Standard text input with label and placeholder."
            code={`<div className="mb-4">
  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
    Name
  </label>
  <input
    type="text"
    id="name"
    name="name"
    placeholder="Enter your name"
    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm 
    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 
    dark:text-white"
  />
</div>`}
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
              />
            </div>
          </FormDemo>
          
          {/* Input with Helper Text and Error State */}
          <FormDemo
            title="Input with Helper Text and Error State"
            description="Text input with helper text and validation error message."
            code={`<div className="mb-4">
  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
    Email
  </label>
  <input
    type="email"
    id="email"
    name="email"
    placeholder="Enter your email"
    className="w-full px-4 py-2 border border-red-500 rounded-md shadow-sm focus:outline-none 
    focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:bg-gray-800 dark:text-white"
  />
  <p className="mt-1 text-xs text-red-600 dark:text-red-400">Please enter a valid email address.</p>
  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">We'll never share your email with anyone else.</p>
</div>

<div className="mb-4">
  <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
    Username
  </label>
  <input
    type="text"
    id="username"
    name="username"
    placeholder="Choose a username"
    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm 
    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 
    dark:text-white"
  />
  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Username must be between 3-20 characters.</p>
</div>`}
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-red-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:bg-gray-800 dark:text-white"
                />
                <p className="mt-1 text-xs text-red-600 dark:text-red-400">Please enter a valid email address.</p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">We'll never share your email with anyone else.</p>
              </div>
              
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Choose a username"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
                />
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Username must be between 3-20 characters.</p>
              </div>
            </div>
          </FormDemo>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 mt-16 pb-4 border-b border-gray-200 dark:border-gray-700">
            Select & Dropdowns
          </h2>
          
          {/* Basic Select */}
          <FormDemo
            title="Basic Select"
            description="Standard dropdown select with options."
            code={`<div className="mb-4">
  <label htmlFor="country" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
    Country
  </label>
  <select
    id="country"
    name="country"
    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm 
    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 
    dark:text-white"
  >
    <option value="">Select a country</option>
    <option value="us">United States</option>
    <option value="ca">Canada</option>
    <option value="uk">United Kingdom</option>
    <option value="au">Australia</option>
  </select>
</div>`}
          >
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Country
              </label>
              <select
                id="country"
                name="country"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
              >
                <option value="">Select a country</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
                <option value="au">Australia</option>
              </select>
            </div>
          </FormDemo>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 mt-16 pb-4 border-b border-gray-200 dark:border-gray-700">
            Checkboxes & Radio Buttons
          </h2>
          
          {/* Checkboxes */}
          <FormDemo
            title="Checkboxes"
            description="Checkbox inputs for multiple selection."
            code={`<div className="space-y-4">
  <div className="flex items-start">
    <div className="flex items-center h-5">
      <input
        id="terms"
        name="terms"
        type="checkbox"
        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
      />
    </div>
    <div className="ml-3 text-sm">
      <label htmlFor="terms" className="font-medium text-gray-700 dark:text-gray-300">
        I agree to the terms and conditions
      </label>
      <p className="text-gray-500 dark:text-gray-400">You must agree before submitting.</p>
    </div>
  </div>
  
  <div className="flex items-start">
    <div className="flex items-center h-5">
      <input
        id="newsletter"
        name="newsletter"
        type="checkbox"
        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
      />
    </div>
    <div className="ml-3 text-sm">
      <label htmlFor="newsletter" className="font-medium text-gray-700 dark:text-gray-300">
        Subscribe to newsletter
      </label>
    </div>
  </div>
</div>`}
          >
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-medium text-gray-700 dark:text-gray-300">
                    I agree to the terms and conditions
                  </label>
                  <p className="text-gray-500 dark:text-gray-400">You must agree before submitting.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="newsletter"
                    name="newsletter"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="newsletter" className="font-medium text-gray-700 dark:text-gray-300">
                    Subscribe to newsletter
                  </label>
                </div>
              </div>
            </div>
          </FormDemo>
          
          {/* Radio Buttons */}
          <FormDemo
            title="Radio Buttons"
            description="Radio inputs for single selection from a group."
            code={`<div>
  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">
    Notification preferences
  </label>
  <div className="space-y-4">
    <div className="flex items-center">
      <input
        id="push-everything"
        name="notification"
        type="radio"
        value="everything"
        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
      />
      <label htmlFor="push-everything" className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
        All notifications
      </label>
    </div>
    
    <div className="flex items-center">
      <input
        id="push-email"
        name="notification"
        type="radio"
        value="email"
        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
      />
      <label htmlFor="push-email" className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
        Email only
      </label>
    </div>
    
    <div className="flex items-center">
      <input
        id="push-nothing"
        name="notification"
        type="radio"
        value="nothing"
        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
      />
      <label htmlFor="push-nothing" className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
        No notifications
      </label>
    </div>
  </div>
</div>`}
          >
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">
                Notification preferences
              </label>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    id="push-everything"
                    name="notification"
                    type="radio"
                    value="everything"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                  <label htmlFor="push-everything" className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                    All notifications
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="push-email"
                    name="notification"
                    type="radio"
                    value="email"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                  <label htmlFor="push-email" className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email only
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="push-nothing"
                    name="notification"
                    type="radio"
                    value="nothing"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                  <label htmlFor="push-nothing" className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                    No notifications
                  </label>
                </div>
              </div>
            </div>
          </FormDemo>
          
          {/* Usage Guidelines */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-16 pb-4 border-b border-gray-200 dark:border-gray-700">
            Usage Guidelines
          </h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-16">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Form Layout
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Group related fields together and use a single-column layout for better readability. 
                  Place labels above inputs for better scanning and mobile compatibility.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Validation & Errors
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Provide clear error messages near the relevant fields. Use inline validation where 
                  appropriate, but avoid premature validation before users have finished typing.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Help Text
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Include clear help text below inputs when the field purpose isn't obvious.
                  Use consistent positioning and styling for help text throughout the interface.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Accessibility
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Always associate labels with inputs using the 'for' attribute. Ensure all form elements 
                  are keyboard navigable and provide appropriate ARIA attributes for screen readers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
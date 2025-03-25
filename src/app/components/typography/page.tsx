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

// Component to display a typography variant with title and description
const TypographyDemo = ({
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

export default function TypographyPage() {
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
            Typography
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Typography is an essential aspect of the design system that establishes hierarchy, improves readability, and creates a consistent visual language.
          </p>
        </div>
      </section>

      {/* Typography Demos */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 pb-4 border-b border-gray-200 dark:border-gray-700">
            Headings
          </h2>
          
          {/* Headings Demo */}
          <TypographyDemo
            title="Heading Elements"
            description="Heading elements (h1-h6) establish hierarchy and improve content scanning."
            code={`<h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Heading 1</h1>
<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Heading 2</h2>
<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Heading 3</h3>
<h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Heading 4</h4>
<h5 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Heading 5</h5>
<h6 className="text-base font-bold text-gray-900 dark:text-white mb-4">Heading 6</h6>`}
          >
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Heading 1</h1>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Heading 2</h2>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Heading 3</h3>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">Heading 4</h4>
              <h5 className="text-lg font-bold text-gray-900 dark:text-white">Heading 5</h5>
              <h6 className="text-base font-bold text-gray-900 dark:text-white">Heading 6</h6>
            </div>
          </TypographyDemo>
          
          {/* Section Headers */}
          <TypographyDemo
            title="Section Headers"
            description="Headers with decorative elements for section breaks."
            code={`<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
  Section Header with Border
</h2>

<div className="flex items-center mb-6">
  <div className="w-12 h-1 bg-indigo-600 rounded mr-4"></div>
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Section Header with Accent</h2>
</div>`}
          >
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                Section Header with Border
              </h2>
              
              <div className="flex items-center">
                <div className="w-12 h-1 bg-indigo-600 rounded mr-4"></div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Section Header with Accent</h2>
              </div>
            </div>
          </TypographyDemo>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 mt-16 pb-4 border-b border-gray-200 dark:border-gray-700">
            Body Text
          </h2>
          
          {/* Body Text */}
          <TypographyDemo
            title="Body Text Sizes"
            description="Different text sizes for various content contexts."
            code={`<p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
  Small text: This size is used for supplementary or less important information.
</p>

<p className="text-base text-gray-600 dark:text-gray-300 mb-4">
  Base text: This is the standard size for most body content throughout the site.
</p>

<p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
  Large text: Used for important paragraphs or to bring emphasis to certain content.
</p>

<p className="text-xl text-gray-600 dark:text-gray-300">
  Extra large text: For featured content, introductory paragraphs, or pull quotes.
</p>`}
          >
            <div className="space-y-6">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Small text: This size is used for supplementary or less important information.
              </p>
              
              <p className="text-base text-gray-600 dark:text-gray-300">
                Base text: This is the standard size for most body content throughout the site.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Large text: Used for important paragraphs or to bring emphasis to certain content.
              </p>
              
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Extra large text: For featured content, introductory paragraphs, or pull quotes.
              </p>
            </div>
          </TypographyDemo>
          
          {/* Text Styles */}
          <TypographyDemo
            title="Text Styles"
            description="Various text formatting options for different content needs."
            code={`<p className="font-bold text-gray-900 dark:text-white mb-4">Bold text for emphasis</p>

<p className="font-semibold text-gray-900 dark:text-white mb-4">Semibold text for subtle emphasis</p>

<p className="font-medium text-gray-900 dark:text-white mb-4">Medium text for improved readability</p>

<p className="font-normal text-gray-600 dark:text-gray-300 mb-4">Normal text for standard body copy</p>

<p className="font-light text-gray-600 dark:text-gray-300 mb-4">Light text for a more elegant feel</p>

<p className="italic text-gray-600 dark:text-gray-300">Italic text for quotes or emphasis</p>`}
          >
            <div className="space-y-6">
              <p className="font-bold text-gray-900 dark:text-white">Bold text for emphasis</p>
              
              <p className="font-semibold text-gray-900 dark:text-white">Semibold text for subtle emphasis</p>
              
              <p className="font-medium text-gray-900 dark:text-white">Medium text for improved readability</p>
              
              <p className="font-normal text-gray-600 dark:text-gray-300">Normal text for standard body copy</p>
              
              <p className="font-light text-gray-600 dark:text-gray-300">Light text for a more elegant feel</p>
              
              <p className="italic text-gray-600 dark:text-gray-300">Italic text for quotes or emphasis</p>
            </div>
          </TypographyDemo>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 mt-16 pb-4 border-b border-gray-200 dark:border-gray-700">
            Lists
          </h2>
          
          {/* Lists */}
          <TypographyDemo
            title="List Styles"
            description="Different list styles for organizing content."
            code={`<ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-6">
  <li>Unordered list item one</li>
  <li>Unordered list item two</li>
  <li>Unordered list item three</li>
</ul>

<ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-6">
  <li>Ordered list item one</li>
  <li>Ordered list item two</li>
  <li>Ordered list item three</li>
</ol>

<ul className="space-y-3 text-gray-600 dark:text-gray-300">
  <li className="flex items-start">
    <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
    <span>Custom list with checkmark icons</span>
  </li>
  <li className="flex items-start">
    <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
    <span>With custom styling and indentation</span>
  </li>
  <li className="flex items-start">
    <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
    <span>For more visual emphasis</span>
  </li>
</ul>`}
          >
            <div className="space-y-8">
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Unordered list item one</li>
                <li>Unordered list item two</li>
                <li>Unordered list item three</li>
              </ul>
              
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Ordered list item one</li>
                <li>Ordered list item two</li>
                <li>Ordered list item three</li>
              </ol>
              
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Custom list with checkmark icons</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>With custom styling and indentation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>For more visual emphasis</span>
                </li>
              </ul>
            </div>
          </TypographyDemo>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 mt-16 pb-4 border-b border-gray-200 dark:border-gray-700">
            Links & Inline Elements
          </h2>
          
          {/* Links */}
          <TypographyDemo
            title="Links & Inline Elements"
            description="Styling for links and other inline text elements."
            code={`<p className="mb-4 text-gray-600 dark:text-gray-300">
  Text with a <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 
  hover:underline">standard link</a> that has hover states.
</p>

<p className="mb-4 text-gray-600 dark:text-gray-300">
  Text with <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-indigo-600 dark:text-indigo-400 
  font-mono text-sm">inline code</code> element.
</p>

<p className="mb-4 text-gray-600 dark:text-gray-300">
  Text with <mark className="bg-yellow-200 dark:bg-yellow-500/30 text-gray-900 dark:text-gray-100 px-1 
  rounded">highlighted</mark> content using mark.
</p>

<p className="text-gray-600 dark:text-gray-300">
  Text with <span className="font-bold text-indigo-600 dark:text-indigo-400">colored emphasis</span> using a span.
</p>`}
          >
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300">
                Text with a <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:underline">standard link</a> that has hover states.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300">
                Text with <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-indigo-600 dark:text-indigo-400 font-mono text-sm">inline code</code> element.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300">
                Text with <mark className="bg-yellow-200 dark:bg-yellow-500/30 text-gray-900 dark:text-gray-100 px-1 rounded">highlighted</mark> content using mark.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300">
                Text with <span className="font-bold text-indigo-600 dark:text-indigo-400">colored emphasis</span> using a span.
              </p>
            </div>
          </TypographyDemo>
          
          {/* Usage Guidelines */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-16 pb-4 border-b border-gray-200 dark:border-gray-700">
            Usage Guidelines
          </h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-16">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Hierarchy
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Establish a clear visual hierarchy to guide users through content. Use headings consistently 
                  and avoid skipping heading levels (e.g., don't go from h2 to h5).
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Readability
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Maintain sufficient contrast between text and background. Keep line lengths between 60-80 
                  characters for optimal readability. Use appropriate line height (1.5-1.7 for body text).
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Text Formatting
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Use bold for emphasis, but sparingly. Avoid using underlines except for links. Use italics 
                  only when needed for quotes, definitions, or emphasis.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Accessibility
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Ensure text is resizable and maintain sufficient color contrast. Use semantic HTML elements 
                  (h1-h6, p, strong, em) to enhance accessibility for screen readers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
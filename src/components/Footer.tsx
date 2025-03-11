import Link from 'next/link';
import { GitHubIcon, LinkedInIcon, TwitterIcon, EnvelopeIcon } from '@sumanth/components/Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mb-6 md:mb-0">
            <Link
              href="/"
              className="text-gray-800 dark:text-white font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-800 dark:text-white font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/work"
              className="text-gray-800 dark:text-white font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              Work
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 dark:text-white font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          <div className="flex space-x-6 items-center mb-6 md:mb-0">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              <TwitterIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@example.com"
              aria-label="Email"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              <EnvelopeIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Senior Frontend Engineer Portfolio. All rights reserved.
          </p>
          <p className="text-center text-gray-500 dark:text-gray-400 text-xs mt-2">
            Built with Next.js and TailwindCSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

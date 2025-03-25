import Link from 'next/link';
import { DocumentIcon } from '@sumanth/components/Icons';

export default function ResumePage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My Resume
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Download my full resume or view it online below.
            </p>
            <div className="mt-8">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm transition-colors duration-300"
              >
                <DocumentIcon className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Resume Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 md:p-12">
          {/* Resume Header */}
          <div className="text-center mb-12 pb-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">John Doe</h2>
            <p className="text-xl text-indigo-600 dark:text-indigo-400 mb-4">
              Senior Frontend Engineer
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-600 dark:text-gray-300">
              <span>San Francisco, CA</span>
              <span>•</span>
              <a
                href="mailto:hello@example.com"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                hello@example.com
              </a>
              <span>•</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Summary</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Senior Frontend Engineer with 11 years of experience developing robust applications.
              Specialized in React, Next.js, and TypeScript with a focus on creating scalable,
              accessible, and performance-optimized web applications. Passionate about clean code,
              UI/UX, and implementing modern frontend practices.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Experience</h3>

            <div className="space-y-8">
              {/* Job 1 */}
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Senior Frontend Engineer
                  </h4>
                  <div className="text-gray-600 dark:text-gray-400 text-sm italic mt-1 md:mt-0">
                    Jan 2022 – Present
                  </div>
                </div>
                <div className="mb-2 text-indigo-600 dark:text-indigo-400">
                  Tech Innovations Inc., San Francisco, CA
                </div>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                  <li>
                    Lead the frontend development of enterprise SaaS application serving 100,000+
                    users
                  </li>
                  <li>
                    Architected and implemented key features that increased user engagement by 35%
                  </li>
                  <li>
                    Mentored junior developers and conducted code reviews for team of 8 engineers
                  </li>
                  <li>Optimized application performance resulting in 40% faster page load times</li>
                  <li>Implemented comprehensive testing strategy, achieving 90%+ code coverage</li>
                </ul>
              </div>

              {/* Job 2 */}
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Frontend Developer
                  </h4>
                  <div className="text-gray-600 dark:text-gray-400 text-sm italic mt-1 md:mt-0">
                    Mar 2018 – Dec 2021
                  </div>
                </div>
                <div className="mb-2 text-indigo-600 dark:text-indigo-400">
                  Digital Solutions Ltd., Seattle, WA
                </div>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                  <li>Developed responsive web applications using React, Redux, and JavaScript</li>
                  <li>Collaborated with UX/UI designers to implement pixel-perfect interfaces</li>
                  <li>Integrated RESTful APIs and GraphQL endpoints with frontend applications</li>
                  <li>
                    Participated in agile development processes, daily standups, and sprint planning
                  </li>
                  <li>Improved accessibility compliance to meet WCAG 2.1 AA standards</li>
                </ul>
              </div>

              {/* Job 3 */}
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Web Developer
                  </h4>
                  <div className="text-gray-600 dark:text-gray-400 text-sm italic mt-1 md:mt-0">
                    Jun 2015 – Feb 2018
                  </div>
                </div>
                <div className="mb-2 text-indigo-600 dark:text-indigo-400">
                  Creative Agency, Portland, OR
                </div>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                  <li>
                    Built websites for clients across various industries using JavaScript, jQuery,
                    and PHP
                  </li>
                  <li>Focused on responsive design and cross-browser compatibility</li>
                  <li>Managed WordPress-based sites and implemented custom themes and plugins</li>
                  <li>
                    Worked directly with clients to gather requirements and provide technical
                    solutions
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Skills</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  Frontend Development
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  React, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, TailwindCSS, Styled
                  Components
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Backend & API</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Node.js, Express, GraphQL, RESTful APIs, PostgreSQL, MongoDB
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Tools & Workflow</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Git, GitHub, Jest, React Testing Library, Webpack, CI/CD, Docker
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Soft Skills</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Technical Leadership, Mentoring, Problem Solving, Communication, Agile
                  Methodologies
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Education</h3>

            <div className="space-y-6">
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Bachelor of Science in Computer Science
                  </h4>
                  <div className="text-gray-600 dark:text-gray-400 text-sm italic mt-1 md:mt-0">
                    2009 – 2013
                  </div>
                </div>
                <div className="text-indigo-600 dark:text-indigo-400">University of Technology</div>
              </div>

              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Associate Degree in Web Development
                  </h4>
                  <div className="text-gray-600 dark:text-gray-400 text-sm italic mt-1 md:mt-0">
                    2007 – 2009
                  </div>
                </div>
                <div className="text-indigo-600 dark:text-indigo-400">Community College</div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Certifications</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  AWS Certified Developer - Associate
                </h4>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  Amazon Web Services, 2021
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Professional Frontend Developer
                </h4>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  Frontend Masters, 2019
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">React Certification</h4>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Meta, 2018</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

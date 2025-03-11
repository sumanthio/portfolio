import Image from 'next/image';
import Link from 'next/link';
import {
  GitHubIcon,
  LinkedInIcon,
  ChevronRightIcon,
  DocumentIcon,
} from '@sumanth/components/Icons';

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-block px-3 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 rounded-full">
                Senior Frontend Engineer
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">John Doe</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                With 11 years of experience crafting modern web experiences. I specialize in React,
                Next.js, and building performant, accessible applications.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/work"
                  className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 rounded-md shadow-sm transition-colors duration-300"
                >
                  View My Work
                  <ChevronRightIcon className="ml-2 -mr-1 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 text-base font-medium text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md shadow-sm border border-indigo-600 dark:border-indigo-400 transition-colors duration-300"
                >
                  Contact Me
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <Link
                  href="/resume"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  <DocumentIcon className="w-5 h-5 mr-2" />
                  <span>Resume</span>
                </Link>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  <GitHubIcon className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  <LinkedInIcon className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full border-4 border-indigo-600 dark:border-indigo-400 shadow-xl">
                <Image
                  src="/profile.jpg"
                  alt="John Doe, Senior Frontend Engineer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            My Tech Stack
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Node.js', 'GraphQL'].map((tech) => (
              <div
                key={tech}
                className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 mb-4 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  {/* This would be replaced with actual tech icons */}
                  <span className="text-2xl font-bold">{tech.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{tech}</h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/about"
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
            >
              View all skills
              <ChevronRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <Link
              href="/work"
              className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 inline-flex items-center"
            >
              View all projects
              <ChevronRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                  {/* Project image would go here */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">
                      Project {project} Image
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Project {project}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A brief description of project {project} and the technologies used.
                  </p>
                  <div className="flex gap-2 mb-4">
                    {['React', 'TypeScript', 'TailwindCSS'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/work/project-${project}`}
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium inline-flex items-center"
                  >
                    View Project
                    <ChevronRightIcon className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-indigo-600 dark:bg-indigo-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            I'm currently available for freelance work or full-time positions. If you're looking for
            a developer who can bring your ideas to life, let's chat.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-indigo-600 bg-white hover:bg-gray-50 rounded-md shadow-sm transition-colors duration-300"
          >
            Get in Touch
            <ChevronRightIcon className="ml-2 -mr-1 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

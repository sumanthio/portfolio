import Image from 'next/image';
import Link from 'next/link';
import { CodeIcon, UserIcon, DocumentIcon } from '@sumanth/components/Icons';

export default function AboutPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About Me
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I'm a Senior Frontend Engineer with 11 years of experience building robust,
                user-friendly web applications. My journey in web development started in 2013, and
                I've been passionate about creating exceptional user experiences ever since.
              </p>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently, I specialize in React, Next.js, and TypeScript, focusing on building
                fast, accessible, and scalable frontend applications.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/about.jpg"
                  alt="John Doe working on code"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            My Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                <CodeIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Frontend Development
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>React & React ecosystem</li>
                <li>Next.js (App & Pages Router)</li>
                <li>TypeScript</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5 & CSS3</li>
                <li>TailwindCSS & Styled Components</li>
              </ul>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                <CodeIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Backend & API
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Node.js & Express</li>
                <li>GraphQL</li>
                <li>RESTful APIs</li>
                <li>PostgreSQL & MongoDB</li>
                <li>Serverless Architecture</li>
                <li>Firebase</li>
              </ul>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                <UserIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Tools & Practices
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Git & GitHub</li>
                <li>Jest & React Testing Library</li>
                <li>CI/CD (GitHub Actions, CircleCI)</li>
                <li>Agile Methodologies</li>
                <li>Performance Optimization</li>
                <li>Web Accessibility (WCAG)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 md:py-24 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            My Career Journey
          </h2>

          <div className="relative border-l-4 border-indigo-600 dark:border-indigo-400 ml-6 md:ml-0 md:mx-auto">
            {/* Timeline items */}
            <TimelineItem
              year="2022 - Present"
              title="Senior Frontend Engineer"
              company="Tech Innovations Inc."
              description="Leading frontend development for enterprise applications, implementing architectural decisions, and mentoring junior developers."
              technologies={['React', 'Next.js', 'TypeScript', 'GraphQL']}
            />

            <TimelineItem
              year="2018 - 2022"
              title="Frontend Developer"
              company="Digital Solutions Ltd."
              description="Developed responsive web applications, collaborated with UX/UI designers, and implemented modern frontend practices."
              technologies={['React', 'JavaScript', 'Redux', 'SCSS']}
            />

            <TimelineItem
              year="2015 - 2018"
              title="Web Developer"
              company="Creative Agency"
              description="Built websites for clients across various industries, focusing on responsive design and cross-browser compatibility."
              technologies={['JavaScript', 'jQuery', 'WordPress', 'PHP']}
            />

            <TimelineItem
              year="2013 - 2015"
              title="Junior Developer"
              company="StartUp XYZ"
              description="Started my professional journey developing web interfaces and learning modern web development practices."
              technologies={['HTML', 'CSS', 'JavaScript', 'Bootstrap']}
              isLast={true}
            />
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Education & Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Education</h3>

              <div className="mb-6">
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  Bachelor of Science in Computer Science
                </div>
                <div className="text-indigo-600 dark:text-indigo-400">University of Technology</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">2009 - 2013</div>
              </div>

              <div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  Associate Degree in Web Development
                </div>
                <div className="text-indigo-600 dark:text-indigo-400">Community College</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">2007 - 2009</div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Certifications
              </h3>

              <div className="mb-6">
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  AWS Certified Developer - Associate
                </div>
                <div className="text-indigo-600 dark:text-indigo-400">Amazon Web Services</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">2021</div>
              </div>

              <div className="mb-6">
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  Professional Frontend Developer
                </div>
                <div className="text-indigo-600 dark:text-indigo-400">Frontend Masters</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">2019</div>
              </div>

              <div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  React Certification
                </div>
                <div className="text-indigo-600 dark:text-indigo-400">Meta</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">2018</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-indigo-600 dark:bg-indigo-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Want to know more?</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Check out my projects or download my resume for a more detailed look at my experience
            and skills.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/work"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-indigo-600 bg-white hover:bg-gray-50 rounded-md shadow-sm transition-colors duration-300"
            >
              View My Work
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-700 hover:bg-indigo-800 rounded-md shadow-sm transition-colors duration-300"
            >
              <DocumentIcon className="w-5 h-5 mr-2" />
              Download Resume
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Timeline Item Component
function TimelineItem({
  year,
  title,
  company,
  description,
  technologies,
  isLast = false,
}: {
  year: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  isLast?: boolean;
}) {
  return (
    <div className={`ml-8 mb-12 ${isLast ? '' : 'pb-8'}`}>
      <div className="absolute -left-4 mt-1.5 w-8 h-8 rounded-full bg-indigo-600 dark:bg-indigo-400 flex items-center justify-center">
        <span className="text-white text-sm font-bold">{year.substring(0, 2)}</span>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
        <span className="inline-block mb-2 px-3 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 rounded-full">
          {year}
        </span>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
        <div className="text-indigo-600 dark:text-indigo-400 mb-3">{company}</div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

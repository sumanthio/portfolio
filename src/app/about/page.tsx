import Image from 'next/image';
import Link from 'next/link';
import { CodeIcon, UserIcon, DocumentIcon } from '@/components/Icons';

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
                I'm Sumanth Pagidipalli, a Senior Frontend Developer with a decade of experience building robust,
                user-friendly web applications. My journey in web development started in 2014, and
                I've been passionate about creating exceptional user experiences ever since.
              </p>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                I specialize in React, Next.js, and TypeScript, with expertise in building
                enterprise-grade applications using MERN stack, Redux, GraphQL, and serverless architectures.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/about.jpg"
                  alt="Sumanth Pagidipalli working on code"
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
                <li>Redux & Redux Toolkit</li>
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
                <li>MongoDB</li>
                <li>Serverless (AWS Lambda)</li>
                <li>Microservices Architecture</li>
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
                <li>Docker & Kubernetes</li>
                <li>CI/CD Pipelines</li>
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
              year="2024 - Present"
              title="Member of Technical Staff"
              company="Endor Labs"
              description="Working on modern web applications with React, TypeScript, and Next.js, implementing robust frontend architectures."
              technologies={['React', 'Next.js', 'TypeScript', 'GraphQL']}
            />

            <TimelineItem
              year="2017 - 2024"
              title="Senior Frontend Developer"
              company="Bytemark, Inc."
              description="Led frontend development for enterprise-level applications, implemented scalable solutions, and mentored junior developers."
              technologies={['React', 'Redux', 'TypeScript', 'Next.js']}
            />

            <TimelineItem
              year="2023 - 2024"
              title="Senior Frontend Developer"
              company="Sqills"
              description="Developed frontend applications for the travel and transportation industry, collaborated with international teams remotely."
              technologies={['React', 'JavaScript', 'TypeScript', 'GraphQL']}
            />

            <TimelineItem
              year="2014 - 2017"
              title="UI Engineer"
              company="Fission Labs"
              description="Built responsive web applications, integrated RESTful APIs, and ensured cross-browser compatibility."
              technologies={['JavaScript', 'HTML5', 'CSS3', 'jQuery']}
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
                  Bachelor of Technology in Computer Science
                </div>
                <div className="text-indigo-600 dark:text-indigo-400">JNTU Hyderabad</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">2010 - 2014</div>
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
                <div className="text-gray-600 dark:text-gray-300 text-sm">2022</div>
              </div>

              <div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  Professional Scrum Master I (PSM I)
                </div>
                <div className="text-indigo-600 dark:text-indigo-400">Scrum.org</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">2021</div>
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
    <div className="mb-12 ml-8 md:ml-0">
      <div className="absolute w-6 h-6 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-1.5 -left-3 md:left-1/2 md:-ml-3 border-4 border-white dark:border-gray-900"></div>
      <div className="md:w-1/2 md:pr-12 md:text-right md:ml-auto">
        <div className="px-4 py-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <div className="text-indigo-600 dark:text-indigo-400 font-medium">{year}</div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-1">{title}</h3>
          <div className="text-gray-700 dark:text-gray-200 font-medium">{company}</div>
          <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium text-indigo-600 bg-indigo-100 dark:text-indigo-300 dark:bg-indigo-900/30 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

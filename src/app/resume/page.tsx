import Link from 'next/link';
import { DocumentIcon } from '@/components/Icons';

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
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Sumanth Pagidipalli</h2>
            <p className="text-xl text-indigo-600 dark:text-indigo-400 mb-4">
              Senior Frontend Developer
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-600 dark:text-gray-300">
              <span>Bengaluru, India</span>
              <span>•</span>
              <a
                href="mailto:sumanthp544@gmail.com"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                sumanthp544@gmail.com
              </a>
              <span>•</span>
              <a
                href="https://linkedin.com/in/sumanthpagidipalli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href="https://github.com/sumanthio"
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
              Inventive Senior Front End Developer with a decade of expertise in crafting high-scalable 
              applications and delivering enterprise-grade software solutions. Proficient in MERN stack, 
              NextJS, ReactJS + Redux, Redux Toolkit, TypeScript, with expertise in GraphQL, serverless 
              architectures (AWS Lambda). Well-versed in backend development using ExpressJS, NodeJS, 
              and MongoDB, complemented by a strong understanding of microservices architecture and 
              containerisation tools like Docker and Kubernetes.
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
                    Member of Technical Staff
                  </h4>
                  <div className="text-gray-600 dark:text-gray-400 text-sm italic mt-1 md:mt-0">
                    Sep 2024 – Present
                  </div>
                </div>
                <div className="mb-2 text-indigo-600 dark:text-indigo-400">
                  Endor Labs, USA · Full-time
                </div>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                  <li>
                    Developing modern web applications with React, TypeScript, and Next.js
                  </li>
                  <li>
                    Implementing robust frontend architectures and design systems
                  </li>
                  <li>
                    Collaborating with cross-functional teams to deliver high-quality software solutions
                  </li>
                </ul>
              </div>

              {/* Job 2 */}
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Senior Frontend Developer
                  </h4>
                  <div className="text-gray-600 dark:text-gray-400 text-sm italic mt-1 md:mt-0">
                    Jun 2017 – Sep 2024
                  </div>
                </div>
                <div className="mb-2 text-indigo-600 dark:text-indigo-400">
                  Bytemark, Inc., Bengaluru, India · On-site
                </div>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                  <li>Led frontend development for enterprise-level applications over 7+ years</li>
                  <li>Architected scalable solutions using React, Redux, and TypeScript</li>
                  <li>Implemented responsive, accessible, and performance-optimized interfaces</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                  <li>Collaborated with UX/UI designers to create intuitive user experiences</li>
                </ul>
              </div>

              {/* Job 3 */}
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Senior Frontend Developer
                  </h4>
                  <div className="text-gray-600 dark:text-gray-400 text-sm italic mt-1 md:mt-0">
                    Jul 2023 – Jan 2024
                  </div>
                </div>
                <div className="mb-2 text-indigo-600 dark:text-indigo-400">
                  Sqills, Enschede, Netherlands · Remote
                </div>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                  <li>
                    Developed frontend applications for the travel and transportation industry
                  </li>
                  <li>
                    Collaborated with international teams in a remote working environment
                  </li>
                  <li>
                    Implemented features using modern JavaScript frameworks and libraries
                  </li>
                </ul>
              </div>

              {/* Job 4 */}
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    UI Engineer
                  </h4>
                  <div className="text-gray-600 dark:text-gray-400 text-sm italic mt-1 md:mt-0">
                    Jun 2014 – May 2017
                  </div>
                </div>
                <div className="mb-2 text-indigo-600 dark:text-indigo-400">
                  Fission Labs, Hyderabad, India · On-site
                </div>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                  <li>Built responsive web applications using JavaScript, HTML5, and CSS3</li>
                  <li>Focused on delivering cross-browser compatible solutions</li>
                  <li>Integrated RESTful APIs with frontend applications</li>
                  <li>Participated in agile development processes</li>
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
                  React, Next.js, TypeScript, JavaScript (ES6+), Redux, Redux Toolkit, HTML5, CSS3, TailwindCSS, Styled Components
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Backend & API</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Node.js, Express, GraphQL, RESTful APIs, MongoDB, Serverless (AWS Lambda)
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Tools & Infrastructure</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Git, GitHub, Jest, React Testing Library, Webpack, CI/CD, Docker, Kubernetes
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Soft Skills</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Technical Leadership, Mentoring, Problem Solving, Communication, Agile Methodologies
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
                    Bachelor of Technology in Computer Science
                  </h4>
                  <div className="text-gray-600 dark:text-gray-400 text-sm italic mt-1 md:mt-0">
                    2010 – 2014
                  </div>
                </div>
                <div className="text-indigo-600 dark:text-indigo-400">JNTU Hyderabad</div>
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
                  Amazon Web Services, 2022
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Professional Scrum Master I (PSM I)
                </h4>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  Scrum.org, 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

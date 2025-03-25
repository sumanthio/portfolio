import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Coming soon! I'll be sharing my thoughts, tutorials, and insights on frontend
              development and web technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Blog Section Under Construction
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm currently working on creating valuable content for this blog. Soon, you'll find
              articles about:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left mb-8">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                  Frontend Development
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  React, Next.js, TypeScript, and modern web development techniques
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                  Performance Optimization
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Strategies for building fast, responsive web applications
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">UI/UX Design</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Creating beautiful, intuitive user interfaces and experiences
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Career Insights</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Tips and advice for growing as a frontend developer
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm transition-colors duration-300"
            >
              Get Notified When Blog Launches
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from 'next/link';

export default function UsesPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My Setup & Tools
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              A comprehensive list of the tools, software, hardware, and services I use on a daily
              basis.
            </p>
          </div>
        </div>
      </section>

      {/* Tools & Setup Sections */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hardware */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 pb-2 border-b border-gray-200 dark:border-gray-700">
              Hardware
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Computer & Devices
                </h3>
                <ul className="space-y-4">
                  <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="font-medium text-gray-900 dark:text-white">
                      MacBook Pro 16" (2023)
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 mt-1">
                      M2 Max, 32GB RAM, 1TB SSD - My primary development machine
                    </div>
                  </li>
                  <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="font-medium text-gray-900 dark:text-white">Mac Mini (2020)</div>
                    <div className="text-gray-600 dark:text-gray-300 mt-1">
                      M1, 16GB RAM, 512GB SSD - Secondary workstation
                    </div>
                  </li>
                  <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="font-medium text-gray-900 dark:text-white">
                      iPad Pro 12.9" (2022)
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 mt-1">
                      Used for reading documentation, sketching UI designs, and note-taking
                    </div>
                  </li>
                  <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="font-medium text-gray-900 dark:text-white">iPhone 14 Pro</div>
                    <div className="text-gray-600 dark:text-gray-300 mt-1">
                      For mobile testing and everyday use
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Peripherals & Accessories
                </h3>
                <ul className="space-y-4">
                  <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="font-medium text-gray-900 dark:text-white">
                      Dual 27" LG UltraFine 5K Displays
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 mt-1">
                      Perfect for multitasking and detailed design work
                    </div>
                  </li>
                  <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="font-medium text-gray-900 dark:text-white">
                      Keychron K3 Mechanical Keyboard
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 mt-1">
                      Low-profile with Brown switches - great for long coding sessions
                    </div>
                  </li>
                  <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="font-medium text-gray-900 dark:text-white">
                      Logitech MX Master 3 Mouse
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 mt-1">
                      Ergonomic and customizable for development workflows
                    </div>
                  </li>
                  <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="font-medium text-gray-900 dark:text-white">
                      CalDigit TS4 Thunderbolt Dock
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 mt-1">
                      For connecting all peripherals with a single cable
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Software */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 pb-2 border-b border-gray-200 dark:border-gray-700">
              Software & Development Tools
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Code Editor & IDE
                </h3>
                <ul className="space-y-4">
                  <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="font-medium text-gray-900 dark:text-white">VS Code</div>
                    <div className="text-gray-600 dark:text-gray-300 mt-1">
                      Primary editor with custom settings and extensions for React/Next.js
                      development
                    </div>
                  </li>
                  <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="font-medium text-gray-900 dark:text-white">
                      JetBrains WebStorm
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 mt-1">
                      For larger projects that benefit from a full IDE
                    </div>
                  </li>
                  <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="font-medium text-gray-900 dark:text-white">Vim</div>
                    <div className="text-gray-600 dark:text-gray-300 mt-1">
                      For quick edits and when working in the terminal
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Terminal & CLI
                </h3>
                <ul className="space-y-4">
                  <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="font-medium text-gray-900 dark:text-white">iTerm2</div>
                    <div className="text-gray-600 dark:text-gray-300 mt-1">
                      Terminal emulator with custom configuration
                    </div>
                  </li>
                  <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="font-medium text-gray-900 dark:text-white">Oh My Zsh</div>
                    <div className="text-gray-600 dark:text-gray-300 mt-1">
                      With custom theme and plugins for Git, Node, and more
                    </div>
                  </li>
                  <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="font-medium text-gray-900 dark:text-white">Homebrew</div>
                    <div className="text-gray-600 dark:text-gray-300 mt-1">
                      Package manager for macOS
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Design & Prototyping
                </h3>
                <ul className="space-y-4">
                  <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="font-medium text-gray-900 dark:text-white">Figma</div>
                    <div className="text-gray-600 dark:text-gray-300 mt-1">
                      For UI design, prototyping, and collaboration with designers
                    </div>
                  </li>
                  <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="font-medium text-gray-900 dark:text-white">
                      Adobe Creative Cloud
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 mt-1">
                      Photoshop and Illustrator for image editing and graphics
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Productivity & Organization
                </h3>
                <ul className="space-y-4">
                  <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="font-medium text-gray-900 dark:text-white">Notion</div>
                    <div className="text-gray-600 dark:text-gray-300 mt-1">
                      For notes, documentation, and personal knowledge management
                    </div>
                  </li>
                  <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="font-medium text-gray-900 dark:text-white">Slack</div>
                    <div className="text-gray-600 dark:text-gray-300 mt-1">
                      Team communication and collaboration
                    </div>
                  </li>
                  <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="font-medium text-gray-900 dark:text-white">1Password</div>
                    <div className="text-gray-600 dark:text-gray-300 mt-1">
                      Password management and secure notes
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Services & Subscriptions */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 pb-2 border-b border-gray-200 dark:border-gray-700">
              Services & Subscriptions
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Development & Hosting
                </h3>
                <ul className="space-y-4">
                  <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="font-medium text-gray-900 dark:text-white">GitHub Pro</div>
                    <div className="text-gray-600 dark:text-gray-300 mt-1">
                      For code hosting, version control, and collaboration
                    </div>
                  </li>
                  <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="font-medium text-gray-900 dark:text-white">Vercel</div>
                    <div className="text-gray-600 dark:text-gray-300 mt-1">
                      For hosting Next.js applications with preview deployments
                    </div>
                  </li>
                  <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="font-medium text-gray-900 dark:text-white">AWS</div>
                    <div className="text-gray-600 dark:text-gray-300 mt-1">
                      For more complex hosting needs and serverless functions
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Learning & Resources
                </h3>
                <ul className="space-y-4">
                  <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="font-medium text-gray-900 dark:text-white">
                      Frontend Masters
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 mt-1">
                      For in-depth courses on frontend technologies
                    </div>
                  </li>
                  <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="font-medium text-gray-900 dark:text-white">Spotify Premium</div>
                    <div className="text-gray-600 dark:text-gray-300 mt-1">
                      For focus music while coding
                    </div>
                  </li>
                  <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="font-medium text-gray-900 dark:text-white">ChatGPT Plus</div>
                    <div className="text-gray-600 dark:text-gray-300 mt-1">
                      For quick code explanations and problem-solving assistance
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-indigo-600 dark:bg-indigo-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Have a question about my setup?
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Feel free to reach out if you have any questions about the tools I use or want
            recommendations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-indigo-600 bg-white hover:bg-gray-50 rounded-md shadow-sm transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

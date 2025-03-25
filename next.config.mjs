/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Configure image optimization
   */
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  /**
   * Configure page extensions
   */
  pageExtensions: ['ts', 'tsx', 'mdx'],

  /**
   * Configure headers
   */
  headers: async () => {
    return [
      {
        // Apply these headers to all routes
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },

  /**
   * Configure redirects
   */
  redirects: async () => {
    return [];
  },

  /**
   * Configure React strict mode
   */
  reactStrictMode: true,

  /**
   * Configure trailing slash behavior
   */
  trailingSlash: false,

  /**
   * Configure experimental features
   */
  experimental: {
    serverComponentsExternalPackages: [],
  },
};

export default nextConfig; 
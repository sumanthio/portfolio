import type { NextConfig } from 'next';

/**
 * Type-safe configuration for Next.js
 */
const nextConfig: NextConfig = {
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
   * Configure TypeScript error handling
   */
  typescript: {
    // Only run type-checking in CI environment
    ignoreBuildErrors: process.env.NODE_ENV === 'development',
  },

  /**
   * Configure ESLint behavior
   */
  eslint: {
    // Only run ESLint in CI environment
    ignoreDuringBuilds: process.env.NODE_ENV === 'development',
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
   * Configure output
   */
  output: 'standalone',

  /**
   * Configure server components
   */
  experimental: {
    serverComponentsExternalPackages: [],
  },
};

export default nextConfig;

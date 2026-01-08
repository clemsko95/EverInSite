import type { NextConfig } from "next";
import path from "node:path";
const loaderPath = require.resolve('orchids-visual-edits/loader.js');

// Force rebuild - 2025-12-07 v3 - Add redirects for old Google verification
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  outputFileTracingRoot: path.resolve(__dirname, '../../'),
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [loaderPath]
      }
    }
  }
}

export default nextConfig;
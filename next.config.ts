import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'storage.googleapis.com', 
      'upload.wikimedia.org',
      'www.apple.com',
      'logos-world.net',
      'randomuser.me'
    ]
  },
  productionBrowserSourceMaps: false, // Disable source maps in production
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig

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
  }
}

export default nextConfig

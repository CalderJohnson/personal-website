/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Tells Next.js to generate static HTML
  basePath: '/personal-website', // Replaces leading '/' with your repository path
  images: {
    unoptimized: true, // Disables server-side image optimization
  },
};

module.exports = nextConfig;
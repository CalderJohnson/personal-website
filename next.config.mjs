const nextConfig = {
  output: 'export', // Tells Next.js to generate static HTML
  basePath: '/personal-website',
  images: {
    unoptimized: true, // Disables server-side image optimization
  },
};

export default nextConfig;
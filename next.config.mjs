/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
      },
      {
        protocol: 'https', 
        hostname: 'user-images.githubusercontent.com',
      },
    ],
    unoptimized: true, // Allow GIFs and other formats
  },
};

export default nextConfig;

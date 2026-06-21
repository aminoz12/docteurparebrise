/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    // Optimized at serve time by @netlify/plugin-nextjs (WebP/AVIF + resizing)
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 100]
  }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["platform-lookaside.fbsbx.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media-exp1.licdn.com", "firebasestorage.googleapis.com"],
  },
  reactStrictMode: true,
  // swcMinify: true,
}

module.exports = nextConfig

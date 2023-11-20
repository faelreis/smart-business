/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['media.graphassets.com', 'other-image-host.com'],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i1.ytimg.com",
        pathname: "/vi/**",
      },
    ],
  },
};

module.exports = nextConfig;

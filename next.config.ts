
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "z-p3-scontent.fdac12-1.fna.fbcdn.net",
      },
    ],
  },
};

module.exports = nextConfig;

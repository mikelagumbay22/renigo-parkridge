/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'toprealty.com.ph',
      },
      {
        protocol: 'https',
        hostname: 'd78e7d51k2tkt.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
      },
      {
        protocol: 'https',
        hostname: 'blogger.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'marketplace.canva.com',
      },
      // New image domains
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 't4.ftcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'wallpapers.com',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
      },
    ],
  },
};

module.exports = nextConfig;

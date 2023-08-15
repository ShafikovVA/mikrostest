/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.mikros74.ru',
        port: '',
        pathname: '/storage/**',
      },
    ],
  },
}


module.exports = nextConfig

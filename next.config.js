/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.example.com/:path*',
      },
    ]
  },
  i18n: {
    locales: ["en-US", "tr-TR"],
    defaultLocale: "en-US",
  },
}

module.exports = nextConfig

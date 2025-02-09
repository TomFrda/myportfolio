/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/myportfolio',
  assetPrefix: '/myportfolio',
}

module.exports = nextConfig

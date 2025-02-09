/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  // Make sure this matches your GitHub repository name
  basePath: '/myportfolio',
  // Add this to ensure proper asset loading
  assetPrefix: '/myportfolio',
}

module.exports = nextConfig

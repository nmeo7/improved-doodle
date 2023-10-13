/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    loader: 'akamai',
    path: '',
  },
  output: 'export'
}

module.exports = nextConfig

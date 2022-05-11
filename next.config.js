/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { esmExternals: true },
  images: {
    loader: 'akamai',
    path: '',
  }
}

module.exports = nextConfig

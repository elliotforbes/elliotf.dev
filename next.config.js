/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  experimental: { esmExternals: true },
  images: {
    loader: 'akamai',
    path: '',
  }
}

module.exports = nextConfig

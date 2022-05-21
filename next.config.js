const withMarkdoc = require("@markdoc/next.js");

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

module.exports = withMarkdoc()({
 pageExtensions: ["js", "md", "mdoc"],
});

module.exports = nextConfig

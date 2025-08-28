const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isProd ? '/essentis-website' : '',
  assetPrefix: isProd ? '/essentis-website/' : '',
  env: { NEXT_PUBLIC_BASE_PATH: isProd ? '/essentis-website' : '' }
}

module.exports = nextConfig

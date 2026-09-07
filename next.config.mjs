/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  assetPrefix:  '',
  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'standalone',

}

export default nextConfig

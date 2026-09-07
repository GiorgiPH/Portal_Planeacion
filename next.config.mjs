/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  assetPrefix:  '',
  trailingSlash: false,

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'standalone',

}

export default nextConfig

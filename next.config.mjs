/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/portal-planeacion' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portal-planeacion' : '',
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

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/portal-planeacion',
  assetPrefix: '/portal-planeacion',
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

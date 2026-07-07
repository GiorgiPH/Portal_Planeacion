/** @type {import('next').NextConfig} */
const nextConfig = {
  
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

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: '',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

export default nextConfig

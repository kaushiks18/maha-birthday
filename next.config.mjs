/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/maha-birthday',
  assetPrefix: '/maha-birthday'
};

export default nextConfig;

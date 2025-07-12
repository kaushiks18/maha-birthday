/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/maha-birthday' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/maha-birthday/' : ''
};

export default nextConfig;

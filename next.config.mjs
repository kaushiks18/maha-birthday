/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/maha-birthday' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/maha-birthday/' : '',
  // This ensures that the out directory will contain a subfolder for GitHub Pages
  distDir: process.env.NODE_ENV === 'production' ? 'out/maha-birthday' : 'out'
};

export default nextConfig;

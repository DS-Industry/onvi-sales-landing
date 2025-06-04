const nextConfig: import('next').NextConfig = {
  // Recommended for static deployments
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/onvi-sales-landing',
  assetPrefix: '/onvi-sales-landing/',
  trailingSlash: true,
};

export default nextConfig;


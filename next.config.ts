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

  async rewrites() {
    return [
      {
        source: '/.well-known/:path*',
        destination: '/.well-known/:path*',
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/.well-known/apple-app-site-association',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json',
          },
        ],
      },
      {
        source: '/.well-known/assetlinks.json',
        headers: [
          { key: 'Content-Type', value: 'application/json' }
        ],
      }
    ];
  },
};

export default nextConfig;


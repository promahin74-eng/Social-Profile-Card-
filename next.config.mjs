import withPWAInit from '@ducanh2912/next-pwa';

const withPWA = withPWAInit({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: /^https?.*\/api\/football.*/i,
      handler: 'NetworkFirst',
      options: { cacheName: 'goalzone-live-scores' },
    },
    {
      urlPattern: /^https?.*\/api\/news.*/i,
      handler: 'StaleWhileRevalidate',
      options: { cacheName: 'goalzone-news' },
    },
  ],
});

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
};

export default withPWA(nextConfig);

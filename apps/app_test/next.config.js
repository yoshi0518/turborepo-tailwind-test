/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/dates', '@mantine/hooks', '@mantine/notifications'],
  },
};

module.exports = nextConfig;

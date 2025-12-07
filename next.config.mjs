/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Exclude ioredis from client bundle
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  // Ensure server-only modules are not bundled for client
  experimental: {
    serverComponentsExternalPackages: ['ioredis'],
  },
};

export default nextConfig;


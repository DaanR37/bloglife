/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'frontend-case-api.sbdev.nl' },
    ],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Exclude manifest.json from being loaded as a module
    config.module.rules.push({
      test: /manifest\.json$/,
      type: "javascript/auto",
      use: [],
    });

    return config;
  },
}

module.exports = nextConfig;

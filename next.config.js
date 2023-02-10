const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'maximilian',
        mongodb_password: '2YkcXq43KyPk0vqp',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site-dev',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'maximilian',
      mongodb_password: '2YkcXq43KyPk0vqp',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-site',
    },
  };
};



/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: false,
    scrollRestoration: true,
  },
};

module.exports = nextConfig;


const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})



const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new DuplicatePackageCheckerPlugin())
    config.resolve.alias['fast-deep-equal'] = path.resolve(
      __dirname,
      'node_modules',
      'fast-deep-equal'
    )
    return config
  },
}

module.exports = withBundleAnalyzer({})
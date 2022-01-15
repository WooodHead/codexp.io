const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');

const env = require('dotenv').config().parsed || {};

const withPlugins = require('next-compose-plugins');

const isProd = process.env.NODE_ENV === 'production';

const plugins = [];

if (process.env.ANALYZE === 'true') {
  plugins.push([require('@next/bundle-analyzer'), { enabled: true }]);
}
const configs = withPlugins(plugins, {
  // swcMinify: true,
  experimental: {
    // ssr and displayName are configured by default
    styledComponents: !isProd,
  },
  webpack: (config, options) => {
    config.plugins.push(new WindiCSSWebpackPlugin());

    return config;
  },
  env: {
    PORT: 3333,
    ...env,
  },
  assetPrefix: isProd ? env.ASSETPREFIX || undefined : undefined,
  eslint: {
    ignoreDuringBuilds: true,
  },
});

module.exports = configs;

const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');

module.exports = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, options) => {
    config.plugins.push(new WindiCSSWebpackPlugin());

    return config;
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname
  },
};

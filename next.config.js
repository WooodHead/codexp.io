const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
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
});

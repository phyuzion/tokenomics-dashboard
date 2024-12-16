const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    assert: require.resolve("assert"),
  };

  config.plugins = (config.plugins || []).concat([
    new NodePolyfillPlugin(),
  ]);

  return config;
};

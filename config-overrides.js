const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    assert: require.resolve("assert"),               // assert 폴리필 추가
    buffer: require.resolve("buffer"),               // buffer 폴리필 추가
    crypto: require.resolve("crypto-browserify"),    // crypto 폴리필 추가
    stream: require.resolve("stream-browserify"),    // stream 폴리필 추가
  };

  config.plugins = (config.plugins || []).concat([
    new NodePolyfillPlugin(),
  ]);

  return config;
};

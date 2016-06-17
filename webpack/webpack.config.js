const path = require('path');

module.exports = (options) => ({
  entry: options.entry,
  output: Object.assign({
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
  }, options.output),
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        // query: options.babelQuery,
      },
    ],
  },
  plugins: options.plugins,
});

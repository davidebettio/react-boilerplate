const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config');

const templateContent = () => {
  const html = fs.readFileSync(
    path.resolve(process.cwd(), 'app/index.html')
  ).toString();

  return html;
};

const plugins = [
  // new webpack.NoErrorsPlugin(),
  new HtmlWebpackPlugin({
    template: path.resolve(process.cwd(), 'app/index.html'), //templateContent(),
  }),
];

module.exports = baseConfig({
  entry: [
    './app/app.js',
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  plugins,
});

const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//'../../node_modules/mirador/dist/mirador.min.js'
module.exports = {
  entry: '../src/components/MiradorViewer.jsx',
  output: {
    filename: 'mirador.min.js',
    path: path.resolve('..', '..', 'node_modules', 'mirador', 'dist', 'mirador.min.js'),
    publicPath: './dist/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.IgnorePlugin({
      resourceRegExp: /@blueprintjs\/(core|icons)/, // ignore optional UI framework dependencies
    }),
  ],
};
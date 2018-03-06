const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

var config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Pug Template',
      xesc: 'A verry long descriptions with test and bla',
      template: '!!pug-loader!src/index.pug',

    }),
  ]
}
module.exports = config;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

var config = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Puge Template',
      xesc: 'A verry long descriptions with Salar Teach',
      template: '!!pug-loader!src/index.pug',
      posts: [ {name:"salar", age:33},{name:"lond", age:23},{name:"jenny", age:24} 
      ]
    }),
  ]
}
module.exports = config;
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
      posts: [ {name:"salar", age:33},{name:"lond", age:23},{name:"jenny", age:24} 
      ]
    }),
  ]
}
module.exports = config;
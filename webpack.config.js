var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, '');
var APP_DIR = path.resolve(__dirname, 'js');

module.exports = {
  name: 'client',
  entry: APP_DIR + '/client.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : APP_DIR,
        exclude: /(node_modules|bower_components)/,
        loader : 'babel-loader'
      }
    ]
  }
};

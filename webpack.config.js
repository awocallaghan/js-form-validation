'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/form-validation.js',
  output: {
    path: __dirname + '/dist/',
    filename: 'form-validation.min.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};

const webpack = require('webpack');

module.exports = {
  context: __dirname + "/src",
  entry: "./index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,               // type of file to transform
      loaders: ['babel-loader'],   // what loaders to use
      exclude: /node_modules/      // don't transform these files
    }, {
      test: /\.css$/,
      loaders: [
        'style-loader',
        'css-loader',
      ],
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};


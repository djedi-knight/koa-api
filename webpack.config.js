const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src', 'server'),
  entry: './index.js',
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js"
  },
  module : {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  }
};

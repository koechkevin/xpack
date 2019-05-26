const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');

dotenv.config();
const DIR = path.join(__dirname, '');
const SRC = path.resolve(DIR, 'src');
module.exports = {
  entry: ['@babel/polyfill',SRC + '/index.js'],
  output: {
    path: path.resolve(DIR, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: process.env.PORT||3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },{
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
};

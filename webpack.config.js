const webpack = require('webpack');
const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
  entry: path.resolve(__dirname, './frontend/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          },
        }
      }, 
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: [          
          // Creates 'style' nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ]
      },
    ],
  },
  performance: {
    hints: false,
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), 
    // new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin()
  ],
  // devServer: {
  //   publicPath: '/build',
  //   contentBase: path.resolve(__dirname, './dist'),
  //   compress: true,
  //   port: 8080,
  //   hot: true,
  // },
  devServer: {
    publicPath: '/build',
    compress: true,
    port: 8080,
    proxy: {
      '/': 'http://localhost:3000/'
    }
  }
}

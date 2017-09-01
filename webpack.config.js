'use strict'
const webpack           = require('webpack');
const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR         = path.resolve(__dirname, 'dist');
const APP_DIR           = path.resolve(__dirname, 'src');

module.exports = {
  entry: [
  'webpack-hot-middleware/client',
  `${APP_DIR}/index.js`,
  ],
  output: {
    path: `${BUILD_DIR}`,
    publicPath: `${BUILD_DIR}`,
    filename: `./js/[name].js`,
  },
  cache: true,
  devtool: 'eval-source-map',
  stats: {
    colors: true,
    reasons: true
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Urban Arts Summer Intensive',
      xhtml: true,
      inject: false,
      debug: true,
      template: 'src/index.html',
      appMountId: 'root-container'
    }),
    new ExtractTextPlugin({
      filename:'/css/[name].css',
      disable: false,
      allChunks: true
    }),
    new webpack.LoaderOptionsPlugin({
    debug: true
    })
  ],
  //just added this
    devServer: {
      historyApiFallback: true
  },

  module : {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader"]
  })


      },
      {
        test: /\.svg$/,
        include: path.join(__dirname, 'src'),
        loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext'
      },
      {
        test: /\.gif$/,
        include: path.join(__dirname, 'src'),
        loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]'
      },
      { test: /\.jpg$/,
        include: path.join(__dirname, 'src'),
        loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: `babel-loader`
      },
      {
        test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
        include: path.join(__dirname, 'src'),
        loader: 'file-loader?name=/fonts/[name].[ext]'

      }
    ]
  }

};

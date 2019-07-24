'use strict'
const path = require('path');
const webpack = require('webpack');
const merge = require("webpack-merge/lib");
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const APP_DIR = path.resolve(__dirname, '../src/index.js'); 

module.exports = env => {
  const { PLATFORM, VERSION } = env;
  return merge([
    {
      entry: [APP_DIR],
  devServer: {
    hot: true,
    watchOptions: {
      poll: true
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      { 
        test: /\.js$/, 
       use: 'babel-loader' 
      },
      {
        test: /\.less$/,
        use: [
          PLATFORM === "production"
            ? MiniCssExtractPlugin.loader
            : "vue-style-loader",
          "css-loader",
          "less-loader"
        ]
      },
         
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject:true
    }),
    new webpack.DefinePlugin({ 
      'process.env.VERSION': JSON.stringify(VERSION),
      'process.env.PLATFORM': JSON.stringify(PLATFORM)
    }),
    new CopyWebpackPlugin([{       
      from: path.resolve(__dirname, '../static/img'),
      to: path.resolve(__dirname, '../dist/static/img'),
      toType: 'dir'
    }])    
   ] 
  }]
)}


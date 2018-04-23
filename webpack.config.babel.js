/**
 * @copyright Breword
 * @author chenyuan
 */

'use strict'

import { resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin'
import webpack from 'webpack'

const absolute_path_of = path => resolve(__dirname, path)

const dependencies = [
  'babel-polyfill',
  'react',
  'prop-types',
  'styled-components',
  'react-loadable',
  'redux-saga',
]

// TODO: Make vendor bundle chunk hash, not bundle hash.
const config = {
  entry: {
    vendor: dependencies,
    app: './src'
  },
  target: 'web',
  output: {
    path: absolute_path_of('dist'),
    publicPath: '/',
    chunkFilename: '[name].[chunkhash].chunk.js',
    filename: '[name].[hash].bundle.js',
  },
  resolve: {
    alias: {
      components: absolute_path_of('src/components'),
      modules: absolute_path_of('src/modules'),
    },
    modules: [
      'node_modules',
      absolute_path_of('src'),
    ],
    extensions: ['.js', '.json', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: absolute_path_of('src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [['env', { modules: false }], 'stage-0', 'react'],
            plugins: [
              'lodash',
              ['import', { libraryName: 'antd', style: 'css' }],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify(
        process.env.NODE_ENV || 'development'
      )
    }),
    new ExtractTextPlugin('[name].[contenthash].css', {
      allChunks: true
    }),
    new LodashModuleReplacementPlugin,
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
      template: '!!html-loader!./src/template.html'
    })
  ]
}

export default config

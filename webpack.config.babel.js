/**
 * @copyright Betanovo.ltd 2017 - present
 * @author chenyuan <chenyuan@betanovo.com>
 */

'use strict'

import { resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const absolute_path_of = path => resolve(__dirname, path)

const config = {
  entry: ['babel-polyfill', './src/app'],
  target: 'web',
  output: {
    path: absolute_path_of('dist'),
    chunkFilename: '[name].[chunkhash].chunk.js',
    filename: '[name].[hash].bundle.js',
  },
  resolve: {
    alias: {
      components: absolute_path_of('src/components')
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
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'stage-0', 'react'],
            cacheDirectory: true,
            plugins: [
              ['import', { libraryName: 'antd', style: 'css' }],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
      template: './src/template.html',
    })
  ]
}

export default config

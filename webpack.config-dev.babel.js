import config from './webpack.config.babel'

config.devtool = 'source-map'

config.devServer = {
  historyApiFallback: true,
  contentBase: config.output.path,
  compress: true,
//   hotOnly: true,
  open: true,
  port: 9000
}

export default config

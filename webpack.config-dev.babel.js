import config from './webpack.config.babel'

config.output.pathinfo = true

config.devServer = {
  historyApiFallback: true,
  contentBase: false,
  compress: true,
  // open: true,
  hot: true,
  port: 9000,
  stats: {
    assets: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: true
  }
}

export default config

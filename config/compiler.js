const webpack = require('webpack')
const webpackConfig = require('../webpack.config.js')
const HMR = require('./hmr')
const compiler = webpack(webpackConfig)

module.exports = function () {
  
  return compiler.watch(
    {
      // Example watchOptions
      aggregateTimeout: 300,
      poll: undefined,
    },
    (err, stats) => {
      // Stats Object
      console.log(
        stats.toString({
          chunks: false, // Makes the build much quieter
          colors: true, // Shows colors in the console
        }),
      )
      if (stats.hasErrors()) {
        console.log("didn't build")
        return
      }
      console.log('built')
      HMR.built()
    },
  )
}
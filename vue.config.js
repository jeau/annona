const webpack = require('webpack')
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ]
  },
  configureWebpack: config => {
        config.output.filename = 'js/annona.js';

  },
  chainWebpack:
    config => {
      config.optimization.delete('splitChunks'),
      config.when(process.env.NODE_ENV === 'production', plugin => {
            plugin.plugin('extract-css').tap(([options, ...args]) => [
                Object.assign({}, options, { filename: 'css/annona.css' }),
                ...args
            ])
        })
    }
}

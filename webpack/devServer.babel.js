'use strict'
export default {
  inline: true,
  contentBase: __dirname + '/docs/',
  watchContentBase: true,
  historyApiFallback: {
    rewrites: [
      {
        from: '/^.*$/',
        to: '/'
      }
    ]
  },
  host: 'localhost',
  hotOnly: true,
  index: 'index.html',
  open: true,
  overlay: true,
  port: 8888,
  watchContentBase: true
}

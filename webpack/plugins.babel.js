'use strict'
import HtmlWebpackPlugin from 'html-webpack-plugin'
export default [
  new HtmlWebpackPlugin({
    template: __dirname + '/../sources/index.html',
    inject: false
  })
]

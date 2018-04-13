'use strict'
export default {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.vue$/,
      exclude: /node_modules/,
      loader: 'vue-loader'
    }
  ]
}

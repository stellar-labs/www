'use strict'
import HtmlWebpackPlugin from 'html-webpack-plugin'
export default env => {
  return {
    mode: env.development ? 'development' : 'production',
    entry: __dirname + '/sources/javascript/index.js',
    output: {
      filename: 'javascript/index.js',
      path: __dirname + '/docs/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: __dirname + '/sources/index.html',
        inject: false
      })
    ],
    devServer: {
      contentBase: __dirname + '/docs/',
      watchContentBase: true
    }
  }
}

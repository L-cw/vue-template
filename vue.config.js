// import { TITLE } from './src/config.js'
const TITLE = require('./src/config.js').TITLE

const path = require('path')
const port = 23333
module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  devServer: {
    open: true,
    port: port,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'http://192.168.9.120:8080/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/rose'
        }
      }
    }
  },

  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: TITLE
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/assets/styles/variables.scss')
      ]
    }
  }
}

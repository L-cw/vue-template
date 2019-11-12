const path = require('path')
module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  devServer: {
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, 'src/assets/styles/index.less')
      ]
    }
  }
}

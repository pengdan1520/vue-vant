'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path')

module.exports = {
  //生产环境
  build: {
    env: {
      NODE_ENV: '"production"'
    },
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // source-map模式
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  // 开发模式下的打包
  dev: {
    env: {
      NODE_ENV: '"development"'
    },
    // 设置反向代理
    proxyTable: {
      '/api': {
        target: '',  //目标接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/api': '/api'   //重写接口
        }
      },
    },
    port: 8080,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    host: 'localhost',
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    useEslint: true,
    showEslintErrorsInOverlay: false,
    // source-map模式
    devtool: '#cheap-module-eval-source-map',
    cacheBusting: true,
    cssSourceMap: false
  }
}

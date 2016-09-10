var path = require('path')
var config = require('../config')
var cssLoaders = require('./css-loaders')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')

var bourbon = require('bourbon')
  .includePaths;
var neat = require('bourbon-neat')
  .includePaths;


module.exports = {
  entry: {
    app: __dirname + '/../src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: "http://localhost:8080/",
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'mixins': path.resolve(__dirname, '../src/mixins'),
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      'models': path.resolve(__dirname, '../src/models'),
      'providers': path.resolve(__dirname, '../src/providers'),
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  sassLoader: {
    includePaths: [bourbon, neat]
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      loader: 'babel',
      include: projectRoot,
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.html$/,
      loader: 'vue-html'
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: utils.assetsPath('/imgs/[name].[hash:7].[ext]')
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: utils.assetsPath('/fonts/[name].[hash:7].[ext]')
      }
    }]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    loaders: utils.cssLoaders()
  }
}
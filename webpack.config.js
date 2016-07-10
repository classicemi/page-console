var webpack = require('webpack');

module.exports = {
  entry: {
    pageConsole: './src/index.js'
  },
  output: {
    path: './lib',
    filename: '[name].min.js',
    library: 'pageConsole',
    libraryTarget: 'umd',
    umdNameDefine: true
  },
  module: {
    loaders: [
      { test: /.js$/, loader: 'babel' },
      { test: /.html$/, loader: 'html' }
    ]
  },
  babel: {
    presets: ['es2015']
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ]
};

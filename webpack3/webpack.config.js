module.exports = function () {
  return {
    entry: './src/index',
    output: {
      library: ['RUI', 'Advertorial'],
      libraryTarget: 'umd',
      libraryExport: "default",
      umdNamedDefine: true,
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader'
          }
        }]
    }

  };
}

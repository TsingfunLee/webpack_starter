const path = require('path');
const base = path.join(__dirname, '..')

module.exports = {
  entry: path.resolve(base, 'src', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(base, 'dist')
  },
	devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve(base, 'dist'),
    historyApiFallback: true,
    inline: true,
    proxy: {
      "/api": "http://localhost:8000"
    }
  },
  module: {
    rules: [
    ]
  },
  resolve: {
  },
  plugins: [
  ]
};
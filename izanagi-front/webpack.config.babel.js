import path from 'path'

export default {
  entry: path.resolve(__dirname, 'src', 'application.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'application.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx']
  },
  plugins: [],
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: process.env.PORT || 9010,
    historyApiFallback: true,
  }
}
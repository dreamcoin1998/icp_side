// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '',
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new friendlyErrorsWebpackPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, './dist'),
    open: false,
    hot: true,
    quiet: true,
    port: 8082,
  },
  module: {
    rules: [
      // JavaScript
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          }, 'postcss-loader'],
      },
    ],
  },
}
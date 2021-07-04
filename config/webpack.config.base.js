// webpack.config.js
/**
 * @type {import('webpack').Configuration}
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '',
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new friendlyErrorsWebpackPlugin(),
  ],
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
        test: /\.(scss|css)$/,
        use: ['style-loader', {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          }, 'postcss-loader'],
      },
      {
        test: /\.css$/,
        include: [
          '/src/',
        ],
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
        test: /\.less$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'less-loader', // compiles Less to CSS
          options: {
           lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
             modifyVars: {
               'primary-color': '#1DA57A',
               'link-color': '#1DA57A',
               'border-radius-base': '2px',
             },
             javascriptEnabled: true,
           },
         },
        }],
      },
    ],
  },
}
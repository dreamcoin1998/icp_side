const path = require('path');
const webpackMerge = require("webpack-merge");
const baseConfig = require('./webpack.config.base.js');

/**
 * @type {import('webpack-dev-server').Configuration}
 */

const devServer = {
    port: 8082,
    host: 'localhost',
    contentBase: path.join(__dirname, '../public'),
    watchContentBase: true,
    publicPath: '/',
    compress: true,
    open: false,
    historyApiFallback: true,
    hot: true,
    quiet: true,
    clientLogLevel: 'error',
    watchOptions: {
        ignored: /node_modules/,
    },
};

/**
 * @type {import('webpack').WebpackOptionsNormalized}
 */

const devConfig = {
    mode: 'development',
    devServer: devServer,
};

module.exports = webpackMerge.merge(baseConfig, devConfig);
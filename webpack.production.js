const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const common = require('./webpack.common');

module.exports = {
    ...common,
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'build.[chunkhash].js',
        chunkFilename: '[id].[chunkhash].js',
    },
    plugins: [
        new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin({
            inject: 'body',
            template: 'src/index.html',
            title: 'Title',
            yandexMetrika: true,
        }),
        new VueLoaderPlugin(),
    ],
};

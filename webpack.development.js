const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const common = require('./webpack.common');

module.exports = {
    ...common,
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        publicPath: '/',
        filename: 'build.js',
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: "body",
            title: 'Title',
            template: 'src/index.html',
        }),
        new VueLoaderPlugin(),
    ],
};

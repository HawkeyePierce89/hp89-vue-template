const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        publicPath: '/',
        filename: 'build.js',
        historyApiFallback: true,
    },
    output: {
        publicPath: '/',
        filename: 'main.js',
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

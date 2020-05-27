const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'build.[chunkhash].js',
        chunkFilename: '[id].[chunkhash].js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: 'body',
            template: 'src/index.html',
            title: 'Title',
        }),
        new VueLoaderPlugin(),
    ],
    optimization: {
        minimizer: [ new TerserPlugin({
            sourceMap: true,
            terserOptions: {
                compress: {
                    pure_funcs: ['console.log'],
                },
            }
        })]
    },
};

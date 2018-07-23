const path = require('path');

module.exports = {
    entry: path.join(__dirname, './src/main.js'),

    module: {
        rules: [{
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /node_modules/,
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: 'style-loader!css-loader!postcss-loader!less-loader',
                },
            },
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        }, {
            test: /\.less/,
            loader: 'style-loader!css-loader!postcss-loader!less-loader',
        }, {
            test: /\.css/,
            loader: 'style-loader!css-loader!postcss-loader',
        }],
    },
    resolve: {
        extensions: ['*', '.js', '.vue'],
        alias: {
            vue$: 'vue/dist/vue.min.js',
        },
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules'),
        ],
    },
};

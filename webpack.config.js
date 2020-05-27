const path = require('path');

const settings = {
    development: require('./webpack.development'),
    production: require('./webpack.production'),
};

module.exports = (env, config) => {
    config = config || {mode : 'development'};

    return {
        mode: config,
        entry: path.join(__dirname, './src/index.js'),
        module: {
            rules: [config.mode === 'production' ? {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
            } : {}, {
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
        ...settings[config.mode],
    }
};

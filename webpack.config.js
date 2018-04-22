const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    filename: 'build.js',
    historyApiFallback: true,
  },
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: 'style-loader!css-loader!less-loader',
          },
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.runtime.min.js',
    },
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    inject: "body",
    template: 'src/index.html',
  })]
};

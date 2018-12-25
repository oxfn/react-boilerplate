const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const PATH_APP_SRC = path.resolve(__dirname, 'src/client/index.js');

module.exports = (env, argv) => {
  const mode = argv.mode || 'development';
  const isDev = mode === 'development';
  const app = [PATH_APP_SRC];
  const plugins = [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ];
  if (isDev) {
    app.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000');
    plugins.unshift(new webpack.HotModuleReplacementPlugin());
  }
  return {
    mode,
    entry: {
      app,
    },
    output: {
      path: path.resolve(__dirname, 'dist/assets'),
      publicPath: '/',
      filename: '[name].js',
    },
    module: {
      rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.html/,
        loader: 'html-loader',
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        loader: 'file-loader',
      }],
    },
    plugins,
    optimization: {
      splitChunks: {
        chunks: 'async',
        cacheGroups: {
          vendor: {
            test: /[/\\]node_modules[/\\]/,
            priority: -10,
          },
          default: {
            minChunks: 2,
            priority: -20,
          },
        },
      },
    },
    devServer: {
      hot: true,
      publicPath: '/',
    },
  };
};

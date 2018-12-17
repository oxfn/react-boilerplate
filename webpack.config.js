const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const externals = ['react', 'react-dom'];

module.exports = [

  // Client build
  {
    entry: {
      app: './src/client/index.js',
      // vendor: externals,
    },
    output: {
      path: path.resolve(__dirname, 'dist/assets'),
      filename: '[name].js',
    },
    // externals,
    devServer: {
      // contentBase: path.resolve(__dirname, 'dist/assets'),
      publicPath: '/',
      hot: true,
      port: 9000,
      proxy: {
        '/api': 'localhost:8000',
      },
      // watchContentBase: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            plugins: ['transform-class-properties'],
            presets: ['@babel/react', '@babel/env'],
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.html/,
          loader: 'html-loader',
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          loader: 'file-loader',
        },
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
    ],
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
  },

  // Server build
  {
    entry: './src/server/index.js',
    target: 'node',
    externals: [nodeExternals()],
    node: {
      __dirname: false,
      __filename: false,
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
          },
        },
      ],
    },
  },
];


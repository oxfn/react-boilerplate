const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = [

  // Client build
  {
    entry: './src/client/index.js',
    output: {
      path: path.resolve(__dirname, 'dist/assets'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            plugins: ['transform-class-properties'],
            presets: ['@babel/env', '@babel/react'],
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          loader: 'file-loader',
        },
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
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


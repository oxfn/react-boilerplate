const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack.config')(process.env, { mode: 'development' });
const apiMiddleware = require('./api');

const app = express();
const webpackCompiler = webpack(webpackConfig);

app.use(webpackHotMiddleware(webpackCompiler));
app.use(webpackDevMiddleware(webpackCompiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  writeToDisk: true,
}));
app.use('/api', apiMiddleware);
app.listen(8001);

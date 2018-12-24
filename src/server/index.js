const express = require('express');
const path = require('path');
const apiMiddleware = require('./api');

const app = express();

app.use(express.static(path.resolve(__dirname, '../../dist/assets')));
app.use('/api', apiMiddleware);
app.listen(8000);

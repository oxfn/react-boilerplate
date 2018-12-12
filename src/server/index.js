import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.resolve(__dirname, 'assets')));

app.listen(8800);


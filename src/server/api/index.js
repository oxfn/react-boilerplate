const express = require('express');
const askEndpoint = require('./ask');

const router = express.Router();

router.use('/ask', askEndpoint);

module.exports = router;

'use strict';
const logger = require('logger').createLogger('logs.log');
const express = require('express');
const pokemonRouter = require('./src/main/gateway/http/router/pokemonRouter')(express.Router());
const cors = require('cors');

const PORT = 8082;
const app = express();

app.use(cors())
app.use('/', pokemonRouter);

app.listen(PORT, () => {
    logger.info('Pokemon application running', { PORT });
});

module.exports = app;
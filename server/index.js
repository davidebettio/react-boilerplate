/* eslint-disable consistent-return */

const express = require('express');
const logger = require('./logger');
const frontendMiddlware = require('./middlewares/frontendMiddleware');

const port = process.env.PORT || 3000;
const app = frontendMiddlware(express());

app.listen(port, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  logger.appStarted(port);
});

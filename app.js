const express = require('express');
const app = express();
const apiRouter = require('./routes/api.router');
const {
  invalidEndpointHandler,
  customErrorHandler,
  send500Error,
  handle405Error,
} = require('./errors');
const listEndpoints = require('express-list-endpoints');

app
  .route('/api')
  .get((req, res, next) => {
    res.send({ endpoints: listEndpoints(app) });
  })
  .all(handle405Error);
app.use('/api', apiRouter);
app.use('/*', invalidEndpointHandler);

app.use(customErrorHandler);
app.use(send500Error);

module.exports = app;

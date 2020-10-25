const express = require('express');
const app = express();
const cors = require('cors');
const apiRouter = require('./routes/api.router');
const {
  invalidEndpointHandler,
  customErrorHandler,
  send500Error,
  handle405Error,
} = require('./errors');
const listEndpoints = require('express-list-endpoints');

app.use(cors());
app.get('/products/:id', function (req, res, next) {
  res.json({ msg: 'This is CORS-enabled for all origins!' });
});

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

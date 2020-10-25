const apiRouter = require('express').Router();
const locationsRouter = require('./locations.router');
const photosRouter = require('./photos.router');

apiRouter.use('/locations', locationsRouter);
apiRouter.use('/photos', photosRouter);

module.exports = apiRouter;

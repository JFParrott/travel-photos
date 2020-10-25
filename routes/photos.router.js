const photosRouter = require('express').Router();
const { getPhotosByLocation } = require('../controllers/photos.controller');

photosRouter.use('/:location', getPhotosByLocation);

module.exports = photosRouter;

const photosRouter = require('express').Router();
const { getPhotosByLocation } = require('../controllers/photos.controller');
const { handle405Error } = require('../errors');

photosRouter.route('/:location').get(getPhotosByLocation).all(handle405Error);

module.exports = photosRouter;

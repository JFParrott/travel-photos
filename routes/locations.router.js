const locationsRouter = require('express').Router();
const { getLocations } = require('../controllers/locations.controller');
const { handle405Error } = require('../errors');

locationsRouter.route('/').get(getLocations).all(handle405Error);

module.exports = locationsRouter;

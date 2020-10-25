exports.locationsRouter = require('express').Router();
const getLocations = require('../controllers/locations.controller');

locationsRouter.use('/', getLocations);

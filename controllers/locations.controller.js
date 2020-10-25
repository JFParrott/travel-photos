const { selectLocations } = require('../models/locations.model');

exports.getLocations = (req, res, next) => {
  selectLocations()
    .then((locations) => {
      res.send({ locations });
    })
    .catch(next);
};

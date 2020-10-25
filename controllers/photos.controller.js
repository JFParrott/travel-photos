const { selectPhotosByLocation } = require('../models/photos.model');

exports.getPhotosByLocation = (req, res, next) => {
  const {
    params: { location },
    query: { limit, p },
  } = req;
  selectPhotosByLocation(location, limit, p)
    .then((responseObject) => {
      res.send(responseObject);
    })
    .catch(next);
};

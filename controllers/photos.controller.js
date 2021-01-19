const { selectPhotosByLocation } = require('../models/photos.model');

exports.getPhotosByLocation = (req, res, next) => {
  const {
    params: { location },
  } = req;
  selectPhotosByLocation(location)
    .then((responseObject) => {
      res.send(responseObject);
    })
    .catch(next);
};

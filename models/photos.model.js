const connection = require('../db/connection');
const { checkLocationExists } = require('./utils.model');

exports.selectPhotosByLocation = (location) => {
  return checkLocationExists(location).then(() => {
    return connection('photos').where({ location }).select('*');
  });
};

const connection = require('../db/connection');

exports.checkLocationExists = (location) => {
  return connection('locations')
    .first()
    .where({ name: location })
    .then((res) => {
      if (!res)
        return Promise.reject({ status: 404, msg: 'Location does not exist' });
      return res;
    });
};

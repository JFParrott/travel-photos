const connection = require('../db/connection');

exports.selectLocations = () => {
  return connection('locations').select('*');
};

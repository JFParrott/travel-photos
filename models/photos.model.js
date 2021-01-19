const connection = require('../db/connection');
const { checkLocationExists } = require('./utils.model');

exports.selectPhotosByLocation = (location) => {
  // const perPage = limit || 1;
  // const currentPage = p || 1;
  // if (currentPage < 1) currentPage = 1;
  // const offsetAmount = (currentPage - 1) * perPage;
  return checkLocationExists(location)
    .then(() => {
      // const paginatedPhotos = connection('photos')
      //   .where({ location })
      //   .select('*')
      //   .limit(perPage)
      //   .offset(offsetAmount);
      return connection('photos').where({ location }).select('*');
      // return Promise.all([paginatedPhotos, allPhotos]);
    })
    .then((images) => {
      return { images };
    });
};

const connection = require('../db/connection');
const { checkLocationExists } = require('./utils.model');

exports.selectPhotosByLocation = (location, limit, p) => {
  const perPage = limit || 6;
  const currentPage = p || 1;
  if (currentPage < 1) currentPage = 1;
  const offsetAmount = (currentPage - 1) * perPage;
  return checkLocationExists(location)
    .then(() => {
      const paginatedPhotos = connection('photos')
        .where({ location })
        .select('*')
        .limit(perPage)
        .offset(offsetAmount);
      const allPhotos = connection('photos').where({ location }).select('*');
      return Promise.all([paginatedPhotos, allPhotos]);
    })
    .then(([paginatedPhotos, allPhotos]) => {
      return { photos: paginatedPhotos, photo_count: allPhotos.length };
    });
};

const data = require('../data/index');
const { locationData, photoData } = data;

exports.seed = function (knex) {
  return knex.migrate
    .rollback()
    .then(() => {
      return knex.migrate.latest();
    })
    .then(() => {
      return Promise.all([
        knex('locations').insert(locationData).returning('*'),
        knex('photos').insert(photoData).returning('*'),
      ]);
    });
};

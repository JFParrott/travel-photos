exports.up = function (knex) {
  return knex.schema.createTable('photos', (photosTable) => {
    photosTable.increments('photo_id');
    photosTable.string('url-tag').notNullable();
    photosTable.string('location').references('locations.name').notNullable();
    photosTable.string('label').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('photos');
};

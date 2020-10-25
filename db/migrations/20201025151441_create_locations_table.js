exports.up = function (knex) {
  return knex.schema.createTable('locations', (locationsTable) => {
    locationsTable.string('name').primary();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('locations');
};

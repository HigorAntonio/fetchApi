
exports.up = async knex => knex.schema.createTable('genres', table => {
  table.increments('id');
  table.text('short_name').unique().notNullable();
  table.text('technical_name');
  table.text('translation');
  table.text('slug');
  table.timestamps();
});

exports.down = async knex => knex.schema.dropTable('genres');
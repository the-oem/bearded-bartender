
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('first_name');
      table.string('last_name');
      table.string('email');
      table.string('password');
      table.timestamp('last_activity');
      table.timestamps(true, true);
    }),
    knex.schema.createTable('favorites', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('users.id');
      table.integer('drink_id').unsigned()
      table.timestamps(true, true);
    }),
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('favorites'),
    knex.schema.dropTable('users')
  ]);
};


exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', (table) => {
      table.increments('id').primary();
      table.string('first_name');
      table.string('last_name');
      table.string('email').unique();
      table.string('password');
      table.timestamp('last_activity');
      table.timestamps(true, true);
    }),
    knex.schema.createTable('favorites', (table) => {
      table.increments('id').primary();
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('users.id');
      table.string('drink_id');
      table.string('name');
      table.integer('rating').unsigned();
      table.timestamps(true, true);
    }),
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('favorites'),
    knex.schema.dropTable('users'),
  ]);
};

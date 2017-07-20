
exports.seed = function (knex, Promise) {
  return knex('favorites').del()
    .then(() => knex('users').del())
    .then(() => {
      return Promise.all([
        knex('users').insert({
          first_name: 'Jason',
          last_name: 'Collins',
          email: '1@1.com',
          password: 'password',
          last_activity: knex.fn.now(),
        }, 'id')
        .then((user) => {
          return knex('favorites').insert([
            { user_id: user[0], drink_id: 12345 },
            { user_id: user[0], drink_id: 54321 },
          ]);
        })
        .then(() => console.log('Seeding complete!'))
        .catch(error => console.log(`Error seeding data: ${error}`)),
      ]);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
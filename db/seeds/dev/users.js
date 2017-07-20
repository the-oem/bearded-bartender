
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: 'Jason', last_name: 'Collins', email: '1@1.com', password: 'password', last_activity: knex.fn.now()},
        {id: 2, first_name: 'Doctor', last_name: 'Who', email: '2@2.com', password: 'password', last_activity: knex.fn.now()},
        {id: 3, first_name: 'Tay', last_name: 'Tay', email: '3@3.com', password: 'password', last_activity: knex.fn.now()},
        {id: 4, first_name: 'Yung', last_name: 'Jhun', email: '4@4.com', password: 'password', last_activity: knex.fn.now()},
        {id: 5, first_name: 'Ron', last_name: 'Swanson', email: '5@5.com', password: 'password', last_activity: knex.fn.now()},
      ]);
    });
};

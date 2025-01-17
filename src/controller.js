const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const db = require('knex')(configuration);
const request = require('request');
const constants = require('./constants');
const apiKey = require('./ADDbApiKey');

function getAllUsers(req, res) {
  db('users').select()
    .then(users => res.status(200).json(users))
    .catch(error => res.status(500).json({ error }));
}

function getUser(req, res) {
  db('users').where(req.body).select()
    .then((users) => {
      switch (users.length) {
        case 0:
          res.status(404).json({ error: 'Could not find matching user.' });
          break;
        case 1:
          res.status(200).json(users[0]);
          break;
        default:
          res.status(404).json({ error: 'Found more than 1 matching user. Uhhh, wtf?' });
          break;
      }
    })
    .catch(error => res.status(500).json({ error }));
}

function createUser(req, res) {
  req.body.email = req.body.email.toLowerCase();
  db('users').insert(req.body, '*')
    .then(user => res.status(201).json({
      status: 'success',
      message: 'New user created',
      id: user,
    }))
    .catch(error => res.status(500).json({ error }));
}

function addFavorite(req, res) {
  db('favorites').insert(req.body, '*')
    .then(favorite => res.status(201).json({
      status: 'success',
      message: 'New favorite created',
      id: favorite,
    }))
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error });
    });
}

function getAllFavorites(req, res) {
  const userId = parseInt(req.params.id, 10);
  db('favorites').where('user_id', userId).select()
    .then(favorites => res.status(200).json(favorites))
    .catch(error => res.status(500).json({ error }));
}

function deleteFavorite(req, res) {
  const drinkId = req.params.drink_id;
  const userId = parseInt(req.params.user_id, 10);
  db('favorites').where('user_id', userId).andWhere('drink_id', drinkId).del()
    .then(favorite => res.status(200).json({
      status: 'success',
      message: 'Favorite deleted',
      count: favorite,
    }))
    .catch(error => res.status(500).json({ error }));
}

function getDrinks(req, res) {
  request({
    uri: constants.DRINKS_URL + apiKey.API_KEY + constants.PAGE_SIZE_6,
    json: true,
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) res.status(200).send(body);
  });
}

function getDrink(req, res) {
  request((`${constants.DRINK_URL + req.params.id}/${apiKey.API_KEY}`), (error, response, body) => {
    if (!error && response.statusCode === 200) res.status(200).send(body);
  });
}

function getDrinksSearch(req, res) {
  request({
    uri: constants.SEARCH_DRINKS_URL.replace('{search_term}', req.body.input) + apiKey.API_KEY + constants.PAGE_SIZE_6,
    json: true,
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) res.status(200).send(body);
  });
}

function getUrl(req, res) {
  request({
    uri: req.body.url,
    json: true,
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) res.status(200).send(body);
  });
}

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  addFavorite,
  getAllFavorites,
  deleteFavorite,
  getDrinks,
  getDrinksSearch,
  getUrl,
  getDrink,
};

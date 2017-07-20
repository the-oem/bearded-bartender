const express = require('express');

const router = express.Router();
const controller = require('./controller');

router.get('/users/all', controller.getAllUsers);
router.post('/users', controller.getUser);
router.post('/users/new', controller.createUser);
router.post('/users/favorites/new', controller.addFavorite);
router.get('/users/:id/favorites', controller.getAllFavorites);
router.delete('/users/:user_id/favorites/:drink_id', controller.deleteFavorite);

module.exports = router;

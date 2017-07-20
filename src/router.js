const express = require('express');

const router = express.Router();
const controller = require('./controller');

router.get('/places', controller.getPlaces);

module.exports = router;

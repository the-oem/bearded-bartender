const request = require('request')
const API_KEY = '?apiKey=45c67617f89144868dafde322f26d8e3';
const APP_ID = '?appId=14178&callback=myCallback';
const BASE_URL = 'http://addb.absolutdrinks.com/drinks/?apiKey=45c67617f89144868dafde322f26d8e3';
const DRINKS_URL = `/drinks/?apiKey=45c67617f89144868dafde322f26d8e3`

function getPlaces(req, res, next) {
  console.log('working');
  request(BASE_URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    }
  })
  console.log('working');
  return;
}

module.exports = {
  getPlaces: getPlaces
};

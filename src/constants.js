const apiKey = require('./ADDbApiKey');

const BASE_ADDB_URL = 'http://addb.absolutdrinks.com';
const DRINKS_URL = `${BASE_ADDB_URL}/drinks/`;
const SEARCH_DRINKS_URL = `${BASE_ADDB_URL}/quickSearch/drinks/{search_term}/`;

module.exports = {
  DRINKS_URL,
  SEARCH_DRINKS_URL,
};

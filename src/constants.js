const apiKey = require('./ADDbApiKey');

const BASE_ADDB_URL = 'http://addb.absolutdrinks.com';
const GET_DRINKS_URL = `${BASE_ADDB_URL}/drinks/${apiKey.API_KEY}`;

module.exports = { GET_DRINKS_URL };

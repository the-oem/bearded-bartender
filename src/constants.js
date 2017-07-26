const BASE_ADDB_URL = 'http://addb.absolutdrinks.com';
const DRINKS_URL = `${BASE_ADDB_URL}/drinks/`;
const SEARCH_DRINKS_URL = `${BASE_ADDB_URL}/quickSearch/drinks/{search_term}/`;
const DRINK_URL = `${BASE_ADDB_URL}/drinks/`;
const PAGE_SIZE_10 = '&pageSize=10';
const PAGE_SIZE_25 = '&pageSize=25';

module.exports = {
  PAGE_SIZE_10,
  PAGE_SIZE_25,
  DRINKS_URL,
  SEARCH_DRINKS_URL,
  DRINK_URL,
};

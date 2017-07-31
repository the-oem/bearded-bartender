export const USE_CACHE = true;
export const USE_STUB = true;
export const AUTH_CACHE_KEY = 'authenticatedUser';

export const GET_USER_URL = '/api/users';
export const CREATE_USER_URL = '/api/users/new';
export const ADD_FAVORITE_URL = '/api/users/favorites/new';
export const GET_FAVORITES_URL = '/api/users/{user_id}/favorites';
export const DELETE_FAVORITE_URL = '/api/users/{user_id}/favorites/{drink_id}';

export const GET_URL = '/api/fetch';
export const GET_DRINKS_URL = '/api/drinks';
export const GET_SEARCH_DRINKS_URL = '/api/drinks/search';
export const GET_DRINK_BY_ID = '/api/drink/';

export const DRINKING_QUOTES = [
  { quote: 'I feel bad for people who don’t drink. When they wake up in the morning, that’s as good as they’re going to feel all day.', whoSaidIt: 'Frank Sinatra' },
  { quote: 'Always do sober what you said you’d do drunk. That will teach you to keep your mouth shut.', whoSaidIt: 'Ernest Hemingway' },
  { quote: 'All is fair in love and beer.', whoSaidIt: 'Kurt Paradis' },
  { quote: 'I cook with wine, sometimes I even add it to the food.', whoSaidIt: 'W.C. Fields' },
  { quote: 'A drunk man’s words are a sober man’s thoughts.', whoSaidIt: 'Steve Fergosi' },
  { quote: 'I’m on a whisky diet. I’ve lost three days already.', whoSaidIt: 'Tommy Cooper' },
  { quote: 'Alcohol is a way of life, alcohol is my way of life, and I aim to keep it.', whoSaidIt: 'Homer Simpson' },
  { quote: 'If you drink, don’t drive. Don’t even putt.', whoSaidIt: 'Dean Martin' },
  { quote: 'Love makes the world go round? Not at all. Whiskey makes it go round twice as fast.', whoSaidIt: 'Compton Mackenzie' },
  { quote: 'Whisky is liquid sunshine.', whoSaidIt: 'George Bernard Shaw' },
];

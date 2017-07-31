import { DRINKING_QUOTES } from './constants';

export const getRandomInt = (min, max) => {
  const minVal = Math.ceil(min);
  const maxVal = Math.floor(max);
  return Math.floor(Math.random() * (maxVal - minVal)) + minVal;
};

export const getRandomQuote = () => {
  console.log('here');
  return DRINKING_QUOTES[getRandomInt(0, DRINKING_QUOTES.length)];
};

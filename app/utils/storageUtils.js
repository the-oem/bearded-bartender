import { USE_CACHE, AUTH_CACHE_KEY } from './constants';

export const saveToCache = (key, data) => {
  if (USE_CACHE) localStorage.setItem(key, JSON.stringify(data));
};

export const getFromCache = (key) => {
  return USE_CACHE ? JSON.parse(localStorage.getItem(key)) : null;
};

export const removeFromCache = (key) => {
  if (USE_CACHE) localStorage.removeItem(key);
};

export const formatAuthForStorage = ({ first_name, last_name, email, id }) => {
  return { first_name, last_name, email, id };
};

export const saveAuthToStorage = (user) => {
  saveToCache(AUTH_CACHE_KEY, formatAuthForStorage(user));
};

export const removeAuthFromStorage = () => removeFromCache(AUTH_CACHE_KEY);

export const getLoginFromCache = () => getFromCache(AUTH_CACHE_KEY);

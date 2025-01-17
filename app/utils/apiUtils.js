import {
  GET_USER_URL,
  GET_DRINKS_URL,
  GET_SEARCH_DRINKS_URL,
  CREATE_USER_URL,
  GET_URL,
  GET_DRINK_BY_ID,
  ADD_FAVORITE_URL,
  GET_FAVORITES_URL,
  DELETE_FAVORITE_URL,
} from './constants';

export default class ApiUtils {

  fetchUser(email, password) {
    return fetch(GET_USER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .catch(error => error);
  }

  createUser(first, last, email, password) {
    return fetch(CREATE_USER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: first,
        last_name: last,
        email,
        password,
      }),
    })
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .catch(error => error);
  }

  addFavorite(userId, drink) {
    return fetch(ADD_FAVORITE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId,
        drink_id: drink.id,
        name: drink.name,
        rating: drink.rating,
      }),
    })
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .catch(error => error);
  }

  deleteFavorite(userId, drinkId) {
    return fetch(DELETE_FAVORITE_URL.replace('{user_id}', userId).replace('{drink_id}', drinkId), {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .catch(error => error);
  }

  getFavorites(userId) {
    return fetch(GET_FAVORITES_URL.replace('{user_id}', userId))
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .catch(error => error);
  }

  fetchAllDrinks() {
    return fetch(GET_DRINKS_URL)
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .catch(error => error);
  }

  fetchSearchDrinks(input) {
    return fetch(GET_SEARCH_DRINKS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        input,
      }),
    })
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .catch(error => error);
  }

  fetchDrinkById(id) {
    return fetch(GET_DRINK_BY_ID + id)
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .catch(error => error);
  }

  fetchUrl(url) {
    return fetch(GET_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url,
      }),
    })
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .catch(error => error);
  }

}

import { GET_USER_URL, GET_DRINKS_URL, GET_SEARCH_DRINKS_URL, CREATE_USER_URL } from './constants';

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

}

import { GET_USER_URL, GET_DRINKS_URL, GET_SEARCH_DRINKS_URL } from './constants';

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
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(error => error);
  }

  fetchAllDrinks() {
    return fetch(GET_DRINKS_URL)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(error => error);
  }


  // {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         movie_id: movie.movie_id,
  //         user_id: userId,
  //         title: movie.title,
  //         poster_path: movie.poster_path,
  //         release_date: movie.releaseDate,
  //         vote_average: movie.voteAverage,
  //         overview: movie.overview,
  //       }


  fetchSearchDrinks(input) {
    console.log('in apiUtils, search term', input);
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
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(error => error);
  }

}

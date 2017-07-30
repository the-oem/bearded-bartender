import ApiUtils from '../utils/apiUtils';
import { saveAuthToStorage, removeAuthFromStorage } from '../utils/storageUtils';

export const userIsAuthenticated = (bool) => {
  return {
    type: 'USER_AUTHENTICATED',
    isAuthenticated: bool,
  };
};

export const userAuthenticationSuccess = (user) => {
  return {
    type: 'USER_AUTHENTICATION_SUCCESS',
    user,
  };
};

export const userAuthenticationFailure = (error) => {
  return {
    type: 'USER_AUTHENTICATION_FAILURE',
    error,
  };
};

export const accountCreationFailure = (error) => {
  return {
    type: 'ACCOUNT_CREATION_FAILURE',
    error,
  };
};

export const userAddFavorite = (response) => {
  return {
    type: 'USER_ADD_FAVORITE',
    response,
  };
};

export const userDeleteFavorite = (response) => {
  return {
    type: 'USER_DELETE_FAVORITE',
    response,
  };
};

export const userGetFavorites = (response) => {
  return {
    type: 'USER_FETCH_FAVORITES_SUCCESS',
    response,
  };
};

export const applicationDatabaseError = (error) => {
  return {
    type: 'APPLICATION_DATABASE_FAILURE',
    error,
  };
};

export const logoutUserAction = () => {
  return (dispatch) => {
    dispatch(userIsAuthenticated(false));
    removeAuthFromStorage();
  };
};

export const fetchFavoritesAction = (userId) => {
  return (dispatch) => {
    return new ApiUtils().getFavorites(userId)
    .then((response) => {
      if (response.name === 'Error') throw Error('Unable to retrieve favorites.');
      dispatch(userGetFavorites(response));
    })
    .catch(err => dispatch(applicationDatabaseError(err)));
  };
};

export const userLoginFromCache = (user) => {
  const { first_name, last_name, email, id } = user;
  return (dispatch) => {
    dispatch(userIsAuthenticated(true));
    dispatch(userAuthenticationSuccess({ first_name, last_name, email, id }));
    dispatch(fetchFavoritesAction(id));
  };
};

export const createAccountAction = (state) => {
  return (dispatch) => {
    return new ApiUtils().createUser(state.firstName, state.lastName, state.email, state.password)
      .then((response) => {
        if (response.name === 'Error') throw Error('Unable to create user. E-mail already used.');
        dispatch(userIsAuthenticated(true));
        dispatch(userAuthenticationSuccess(response.id[0]));
        saveAuthToStorage(response.id[0]);
      })
      .catch((err) => {
        dispatch(userIsAuthenticated(false));
        dispatch(accountCreationFailure(err));
      });
  };
};

export const lookupUserAction = ({ email, password }) => {
  return (dispatch) => {
    return new ApiUtils().fetchUser(email, password)
      .then((response) => {
        if (response.name === 'Error') throw Error('Incorrect username or password.');
        dispatch(userIsAuthenticated(true));
        dispatch(userAuthenticationSuccess(response));
        dispatch(fetchFavoritesAction(response.id));
        saveAuthToStorage(response);
      })
      .catch((err) => {
        dispatch(userIsAuthenticated(false));
        dispatch(userAuthenticationFailure(err));
      });
  };
};

export const setFavoriteAction = (userId, drinkId) => {
  return (dispatch) => {
    return new ApiUtils().addFavorite(userId, drinkId)
      .then((response) => {
        if (response.name === 'Error') throw Error('Unable to add favorite.');
        dispatch(userAddFavorite(response));
        dispatch(fetchFavoritesAction(userId));
      })
      .catch((err) => {
        dispatch(applicationDatabaseError(err));
      });
  };
};

export const removeFavoriteAction = (userId, drinkId) => {
  console.log('getting into this action');
  return (dispatch) => {
    return new ApiUtils().deleteFavorite(userId, drinkId)
    .then((response) => {
      if (response.name === 'Error') throw Error('Unable to delete favorite.');
      dispatch(userDeleteFavorite(response));
      dispatch(fetchFavoritesAction(userId));
    })
    .catch(err => dispatch(applicationDatabaseError(err)));
  };
};

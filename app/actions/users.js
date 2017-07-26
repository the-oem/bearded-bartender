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

export const logoutUserAction = () => {
  return (dispatch) => {
    dispatch(userIsAuthenticated(false));
    removeAuthFromStorage();
  };
};

export const userLoginFromCache = (user) => {
  const { first_name, last_name, email, id } = user;
  return (dispatch) => {
    dispatch(userIsAuthenticated(true));
    dispatch(userAuthenticationSuccess({ first_name, last_name, email, id }));
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
        saveAuthToStorage(response);
      })
      .catch((err) => {
        dispatch(userIsAuthenticated(false));
        dispatch(userAuthenticationFailure(err));
      });
  };
};

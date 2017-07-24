import ApiUtils from '../utils/apiUtils';

export const userIsAuthenticated = (bool) => {
  return {
    type: 'USER_AUTHENTICATED',
    isAuthenticated: bool,
  };
};

export const userAuthenticationSuccess = (user) => {
  console.log('user', user);
  return {
    type: 'USER_AUTHENTICATION_SUCCESS',
    user,
  };
};

export const userAuthenticationFailure = (error) => {
  console.log('ERROR', error);
  return {
    type: 'USER_AUTHENTICATION_FAILURE',
    error,
  };
};

export const accountCreationFailure = (error) => {
  console.log('ERROR', error);
  return {
    type: 'ACCOUNT_CREATION_FAILURE',
    error,
  };
};

export const createAccountAction = (state) => {
  return (dispatch) => {
    return new ApiUtils().createUser(state.firstName, state.lastName, state.email, state.password)
      .then((response) => {
        if (response.name === 'Error') throw Error('Unable to create user.');
        // TODO Implement local storage for user authentication
        dispatch(userIsAuthenticated(true));
        dispatch(userAuthenticationSuccess(response.id[0]));
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
        if (response.name === 'Error') throw Error('User not found. Incorrect username or password.');
        dispatch(userIsAuthenticated(true));
        dispatch(userAuthenticationSuccess(response));
      })
      .catch((err) => {
        dispatch(userIsAuthenticated(false));
        dispatch(userAuthenticationFailure(err));
      });
  };
};

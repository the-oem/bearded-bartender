import ApiUtils from '../utils/apiUtils';

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

export const createAccountAction = (state) => {
  console.log('in createAccountAction');
  return (dispatch) => {
    return new ApiUtils().createUser(state.name, state.email, state.password)
      .then((response) => {
        if (response.name === 'Error') throw Error('Unable to create user.');
        // const user = formatAuthForStorage(state.name, state.email, response.id);
        // saveToCache('authenticatedUser', user);
        // dispatch(userLoginFromCache(user));
      })
      .catch((err) => {
        dispatch(userIsAuthenticated(false));
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

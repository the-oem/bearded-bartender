export const userIsAuthenticated = (state = false, action) => {
  switch (action.type) {
    case 'USER_AUTHENTICATED':
      return action.isAuthenticated;
    default:
      return state;
  }
};

export const userAuthenticationFailure = (state = {}, action) => {
  switch (action.type) {
    case 'USER_AUTHENTICATION_FAILURE':
      return { message: action.error.message };
    case 'USER_AUTHENTICATION_SUCCESS':
      return {};
    default:
      return state;
  }
};

export const userAuthenticationSuccess = (state = {}, action) => {
  switch (action.type) {
    case 'USER_AUTHENTICATION_SUCCESS':
      return {
        id: action.user.id,
        name: `${action.user.first_name} ${action.user.last_name}`,
        email: action.user.email,
      };
    default:
      return state;
  }
};
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
        fullName: `${action.user.first_name} ${action.user.last_name}`,
        firstName: action.user.first_name,
        email: action.user.email,
      };
    default:
      return state;
  }
};

export const accountCreationFailure = (state = {}, action) => {
  switch (action.type) {
    case 'ACCOUNT_CREATION_FAILURE':
      return { message: action.error.message };
    default:
      return state;
  }
};

export const userAddFavorite = (state = {}, action) => {
  switch (action.type) {
    case 'USER_ADD_FAVORITE':
      return { addFavoriteMessage: action.response.message };

    default:
      return state;
  }
};

export const userDeleteFavorite = (state = {}, action) => {
  switch (action.type) {
    case 'USER_DELETE_FAVORITE':
      return { deleteFavoriteMessage: action.message };

    default:
      return state;
  }
};

export const favorites = (state = [], action) => {
  switch (action.type) {
    case 'USER_FETCH_FAVORITES_SUCCESS':
      return [...action.response];

    default:
      return state;
  }
};

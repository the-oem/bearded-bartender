import * as actions from './users';

describe('actions', () => {
  it('should create an action to indicate user is authenticated', () => {
    const bool = true;
    const expectedAction = {
      type: 'USER_AUTHENTICATED',
      isAuthenticated: bool,
    };
    expect(actions.userIsAuthenticated(bool)).toEqual(expectedAction);
  });

  it('should create an action to indicate User was found', () => {
    const user = {};
    const expectedAction = {
      type: 'USER_AUTHENTICATION_SUCCESS',
      user,
    };
    expect(actions.userAuthenticationSuccess(user)).toEqual(expectedAction);
  });

  it('should create an action with failure to authenticate', () => {
    const error = {};
    const expectedAction = {
      type: 'USER_AUTHENTICATION_FAILURE',
      error,
    };
    expect(actions.userAuthenticationFailure(error)).toEqual(expectedAction);
  });

  it('should create an action with failure to create account', () => {
    const error = {};
    const expectedAction = {
      type: 'ACCOUNT_CREATION_FAILURE',
      error,
    };
    expect(actions.accountCreationFailure(error)).toEqual(expectedAction);
  });

  it('should create an action when adding a favorite', () => {
    const response = {};
    const expectedAction = {
      type: 'USER_ADD_FAVORITE',
      response,
    };
    expect(actions.userAddFavorite(response)).toEqual(expectedAction);
  });

  it('should create an action when deleting a favorite', () => {
    const response = {};
    const expectedAction = {
      type: 'USER_DELETE_FAVORITE',
      response,
    };
    expect(actions.userDeleteFavorite(response)).toEqual(expectedAction);
  });

  it('should create an action when fetching a users favorites', () => {
    const response = {};
    const expectedAction = {
      type: 'USER_FETCH_FAVORITES_SUCCESS',
      response,
    };
    expect(actions.userGetFavorites(response)).toEqual(expectedAction);
  });

  it('should create an action when a database error has occured', () => {
    const error = {};
    const expectedAction = {
      type: 'APPLICATION_DATABASE_FAILURE',
      error,
    };
    expect(actions.applicationDatabaseError(error)).toEqual(expectedAction);
  });
});

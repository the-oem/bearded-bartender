import * as reducers from './user-reducer';

describe('User Authentication Reducers', () => {
  it('should return the initial state for userIsAuthenticated', () => {
    expect(reducers.userIsAuthenticated(undefined, {})).toEqual(false);
  });

  it('should return the new state for userIsAuthenticated', () => {
    expect(reducers.userIsAuthenticated(undefined, {
      type: 'USER_AUTHENTICATED',
      isAuthenticated: true,
    })).toEqual(true);
  });

  it('should return the initial state for userAuthenticationFailure', () => {
    expect(reducers.userAuthenticationFailure(undefined, {})).toEqual({});
  });

  it('should return the new state for userAuthenticationFailure', () => {
    const result = {
      message: 'error',
    };
    expect(reducers.userAuthenticationFailure(undefined, {
      type: 'USER_AUTHENTICATION_FAILURE',
      error: {
        message: 'error',
      },
    })).toEqual(result);
  });

  it('should reset state for userAuthenticationSuccess on auth failure', () => {
    expect(reducers.userAuthenticationFailure(undefined, {
      type: 'USER_AUTHENTICATION_SUCCESS',
    })).toEqual({});
  });

  it('should return the initial state for userAuthenticationSuccess', () => {
    expect(reducers.userAuthenticationSuccess(undefined, {})).toEqual({});
  });

  it('should return the new state for userAuthenticationSuccess', () => {
    const results = {
      id: 1,
      fullName: 'Frodo Baggins',
      firstName: 'Frodo',
      email: 'suh@dude.com',
    };
    expect(reducers.userAuthenticationSuccess(undefined, {
      type: 'USER_AUTHENTICATION_SUCCESS',
      user: {
        id: 1,
        first_name: 'Frodo',
        last_name: 'Baggins',
        email: 'suh@dude.com',
      },
    })).toEqual(results);
  });
});

describe('User Account Creation Reducers', () => {
  it('should return the initial state for accountCreationFailure', () => {
    expect(reducers.accountCreationFailure(undefined, {})).toEqual({});
  });

  it('should return the new state for accountCreationFailure', () => {
    const result = {
      message: 'error',
    };
    expect(reducers.accountCreationFailure(undefined, {
      type: 'ACCOUNT_CREATION_FAILURE',
      error: {
        message: 'error',
      },
    })).toEqual(result);
  });
});

describe('User Favorites Reducers', () => {
  it('should return the initial state for userAddFavorite', () => {
    expect(reducers.userAddFavorite(undefined, {})).toEqual({});
  });

  it('should return the new state for userAddFavorite', () => {
    const result = {
      addFavoriteMessage: 'success',
    };
    expect(reducers.userAddFavorite(undefined, {
      type: 'USER_ADD_FAVORITE',
      response: {
        message: 'success',
      },
    })).toEqual(result);
  });

  it('should return the initial state for userDeleteFavorite', () => {
    expect(reducers.userDeleteFavorite(undefined, {})).toEqual({});
  });

  it('should return the new state for userDeleteFavorite', () => {
    const result = {
      deleteFavoriteMessage: 'success',
    };
    expect(reducers.userDeleteFavorite(undefined, {
      type: 'USER_DELETE_FAVORITE',
      message: 'success',
    })).toEqual(result);
  });

  it('should return the initial state for favorites', () => {
    expect(reducers.favorites(undefined, {})).toEqual([]);
  });

  it('should return the new state for favorites', () => {
    const result = [
      { id: 1, favorite: 'one' },
      { id: 2, favorite: 'two' },
    ];
    expect(reducers.favorites(undefined, {
      type: 'USER_FETCH_FAVORITES_SUCCESS',
      response: [
        { id: 1, favorite: 'one' },
        { id: 2, favorite: 'two' },
      ],
    })).toEqual(result);
  });
});

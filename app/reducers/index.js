import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { items, itemsHasErrored, itemsIsLoading } from './search-reducer';
import { userIsAuthenticated, userAuthenticationSuccess, userAuthenticationFailure, accountCreationFailure } from './user-reducer';

const rootReducer = combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  userIsAuthenticated,
  userAuthenticationSuccess,
  userAuthenticationFailure,
  accountCreationFailure,
  router: routerReducer(),
});

export default rootReducer;

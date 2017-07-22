import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { items, itemsHasErrored, itemsIsLoading } from './search-reducer';
// import { userIsAuthenticated, userAuthenticationSuccess, userAuthenticationFailure } from './user-reducer';
// import { userAddFavorite, userDeleteFavorite, favorites } from './favorites-reducer';

const rootReducer = combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  router: routerReducer(),
});

export default rootReducer;

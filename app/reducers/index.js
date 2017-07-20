import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// import { items, itemsHasErrored, itemsIsLoading } from './items-reducer';
// import { userIsAuthenticated, userAuthenticationSuccess, userAuthenticationFailure } from './user-reducer';
// import { userAddFavorite, userDeleteFavorite, favorites } from './favorites-reducer';

const rootReducer = combineReducers({
  router: routerReducer(),
});

export default rootReducer;

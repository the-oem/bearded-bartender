import ApiUtils from '../utils/apiUtils';

export const itemsHasErrored = (bool) => {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool,
  };
};

export const itemsIsLoading = (bool) => {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool,
  };
};

export const itemsFetchDataSuccess = (results) => {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    results,
  };
};

export const fetchUrlAction = (url) => {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));
    return new ApiUtils().fetchUrl(url)
    .then((results) => {
      dispatch(itemsFetchDataSuccess(results));
      dispatch(itemsIsLoading(false));
    })
    .catch(() => dispatch(itemsHasErrored(true)));
  };
};

export const fetchDrinksSearchAction = (input) => {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));
    return new ApiUtils().fetchSearchDrinks(input)
      .then((results) => {
        dispatch(itemsFetchDataSuccess(results));
        dispatch(itemsIsLoading(false));
      })
      .catch(() => dispatch(itemsHasErrored(true)));
  };
};

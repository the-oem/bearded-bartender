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
  console.log('ITEMS_FETCH_DATA_SUCCESS firing...', results);
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    results,
  };
};

export const fetchDrinksSearchAction = (input) => {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));
    return new ApiUtils().fetchSearchDrinks(input)
      .then((results) => {
        console.log('results', results);
        dispatch(itemsFetchDataSuccess(results));
        dispatch(itemsIsLoading(false));
      })
      .catch(() => dispatch(itemsHasErrored(true)));
  };
};

import * as actions from './search';

describe('actions', () => {
  it('should create an action to indicate an error', () => {
    const bool = true;
    const expectedAction = {
      type: 'ITEMS_HAS_ERRORED',
      hasErrored: bool,
    };
    expect(actions.itemsHasErrored(bool)).toEqual(expectedAction);
  });

  it('should create an action to indicate items are loading', () => {
    const bool = true;
    const expectedAction = {
      type: 'ITEMS_IS_LOADING',
      isLoading: bool,
    };
    expect(actions.itemsIsLoading(bool)).toEqual(expectedAction);
  });

  it('should create an action with successful return of items', () => {
    const results = {};
    const expectedAction = {
      type: 'ITEMS_FETCH_DATA_SUCCESS',
      results,
    };
    expect(actions.itemsFetchDataSuccess(results)).toEqual(expectedAction);
  });
});

import * as reducers from './search-reducer';

describe('Search Reducers', () => {
  it('should return the initial state for itemsHasErrored', () => {
    expect(reducers.itemsHasErrored(undefined, {})).toEqual(false);
  });

  it('should return the new state for itemsHasErrored', () => {
    expect(reducers.itemsHasErrored(undefined, {
      type: 'ITEMS_HAS_ERRORED',
      hasErrored: true,
    })).toEqual(true);
  });

  it('should return the initial state for itemsIsLoading', () => {
    expect(reducers.itemsIsLoading(undefined, {})).toEqual(false);
  });

  it('should return the new state for itemsIsLoading', () => {
    expect(reducers.itemsIsLoading(undefined, {
      type: 'ITEMS_IS_LOADING',
      isLoading: true,
    })).toEqual(true);
  });

  it('should return the initial state for items', () => {
    expect(reducers.items(undefined, {})).toEqual({});
  });

  it('should return the new state for items', () => {
    const results = {
      items: [],
    };
    expect(reducers.items(undefined, {
      type: 'ITEMS_FETCH_DATA_SUCCESS',
      results: {
        items: [],
      },
    })).toEqual(results);
  });
});

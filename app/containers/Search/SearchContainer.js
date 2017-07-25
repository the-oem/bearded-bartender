import { connect } from 'react-redux';
import Search from '../../components/Search/Search';
import { fetchDrinksSearchAction, fetchUrlAction } from '../../actions/search';

const mapStateToProps = (state) => {
  return {
    items: state.items,
    favorites: state.favorites,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDrinksSearch: input => dispatch(fetchDrinksSearchAction(input)),
    fetchUrl: url => dispatch(fetchUrlAction(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

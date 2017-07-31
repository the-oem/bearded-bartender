import { connect } from 'react-redux';
import DrinkDetail from '../../components/DrinkDetail/DrinkDetail';
import { setFavoriteAction, removeFavoriteAction } from '../../actions/users';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFavorite: (userId, drink) => (dispatch(setFavoriteAction(userId, drink))),
    removeFavorite: (userId, drinkId) => (dispatch(removeFavoriteAction(userId, drinkId))),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkDetail);

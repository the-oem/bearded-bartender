import { connect } from 'react-redux';
import FavoritesList from '../../components/FavoritesList/FavoritesList';

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(FavoritesList);

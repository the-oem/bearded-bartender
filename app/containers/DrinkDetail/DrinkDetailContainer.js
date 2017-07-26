import { connect } from 'react-redux';
import DrinkDetail from '../../components/DrinkDetail/DrinkDetail';

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkDetail);

import { connect } from 'react-redux';
import Search from '../../components/Search/Search';

const mapStateToProps = (state) => {
  return state;
};


export default connect(mapStateToProps, null)(Search);

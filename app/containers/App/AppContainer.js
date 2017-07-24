import { connect } from 'react-redux';
import App from '../../components/app.jsx';
import { userLoginFromCache } from '../../actions/users';

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => {
  return {
    loginFromCache: user => dispatch(userLoginFromCache(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

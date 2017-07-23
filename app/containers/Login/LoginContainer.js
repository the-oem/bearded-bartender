import { connect } from 'react-redux';
import Login from '../../components/Login/Login';
import { lookupUserAction, userIsAuthenticated } from '../../actions/users';

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state);
  return {
    errorMessage: state.userAuthenticationFailure.message,
    user: state.userAuthenticationSuccess,
    userIsAuthenticated: state.userIsAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAuthentication: state => dispatch(lookupUserAction(state)),
    handleLogout: () => dispatch(userIsAuthenticated(false)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

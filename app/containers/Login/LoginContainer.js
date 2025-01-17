import { connect } from 'react-redux';
import Login from '../../components/Login/Login';
import { lookupUserAction, logoutUserAction } from '../../actions/users';

const mapStateToProps = (state) => {
  return {
    loginErrorMessage: state.userAuthenticationFailure.message,
    user: state.userAuthenticationSuccess,
    userIsAuthenticated: state.userIsAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAuthentication: state => dispatch(lookupUserAction(state)),
    handleLogout: () => dispatch(logoutUserAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

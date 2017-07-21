import { connect } from 'react-redux';
import Login from '../../components/Login/Login';

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => {
  return {
    handleAuthentication: (state) => {
      dispatch(makeUserCall(state));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

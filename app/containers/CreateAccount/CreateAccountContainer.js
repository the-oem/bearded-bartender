import { connect } from 'react-redux';
import CreateAccount from '../../components/CreateAccount/CreateAccount';
import { createAccountAction } from '../../actions/users';

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => {
  return {
    handleCreateAccount: state => dispatch(createAccountAction(state)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);

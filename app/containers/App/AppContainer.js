import { connect } from 'react-redux';
import App from '../../components/app.jsx';

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(App);

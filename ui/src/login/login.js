import { connect } from 'react-redux';
import { setLogin } from 'redux/actions';
import Login from 'login/view';

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
});
const mapDispatchToProps = dispatch => ({
  setLogin: (loggedIn) => {
    dispatch(setLogin(loggedIn));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

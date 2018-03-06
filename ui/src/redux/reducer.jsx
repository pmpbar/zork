import { SET_LOGIN } from 'redux/actions';
/**
 * Base reducers
 */
const defaultState = {
  loggedIn: false,
};

const base = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        loggedIn: action.loggedIn,
      };
    default:
      return state;
  }
};

export default base;

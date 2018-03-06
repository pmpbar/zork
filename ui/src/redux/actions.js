function makeActionCreator(type, ...argNames) {
  return (...args) => {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
}

export const SET_LOGIN = 'SET_LOGIN';

export const setLogin = makeActionCreator(SET_LOGIN, 'loggedIn');

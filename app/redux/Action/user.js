import {
  IS_LOGGED_IN,
  IS_SUPPORT_SCREEN,
  RECOVER_PASSWORD,
  RESET_ERROR,
  USERS,
} from '../Types';

export const users = userData => {
  return dispatch => {
    dispatch({
      type: USERS,
      payload: userData,
    });
  };
};

export const isLoggedIn = login => {
  return dispatch => {
    dispatch({
      type: IS_LOGGED_IN,
      payload: login,
    });
  };
};

export const resetError = reset => {
  return dispatch => {
    dispatch({
      type: RESET_ERROR,
      payload: reset,
    });
  };
};

export const isSupportScreen = support => {
  return dispatch => {
    dispatch({
      type: IS_SUPPORT_SCREEN,
      payload: support,
    });
  };
};

export const recoverPassword = (email, key) => {
  return dispatch => {
    dispatch({
      type: RECOVER_PASSWORD,
      payload: {[email]: key},
    });
  };
};

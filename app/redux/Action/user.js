import {
  CREATE_USERS,
  IS_LOGGED_IN,
  IS_SUPPORT_SCREEN,
  RESET_ERROR,
} from '../Types';

export const createUsers = userData => {
  return dispatch => {
    dispatch({
      type: CREATE_USERS,
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

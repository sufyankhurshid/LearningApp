import {CREATE_USERS, IS_LOGGED_IN} from '../Types';

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

import {
  BLOCK_USER,
  CREATE_USER_POST,
  DELETE_USER_POST,
  FETCH_USER_POST,
  IS_LOGGED_IN,
  IS_SUPPORT_SCREEN,
  LOGIN_STATUS,
  RECOVER_PASSWORD,
  RESET_ERROR,
  UPDATE_USER_POST,
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

export const loginStatus = status => {
  return dispatch => {
    dispatch({
      type: LOGIN_STATUS,
      payload: status,
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

export const blockUser = block => {
  return dispatch => {
    dispatch({
      type: BLOCK_USER,
      payload: block,
    });
  };
};

export const fetchUserPost = fetch => {
  return dispatch => {
    dispatch({
      type: FETCH_USER_POST,
      payload: fetch,
    });
  };
};

export const createUserPost = post => {
  return dispatch => {
    dispatch({
      type: CREATE_USER_POST,
      payload: post,
    });
  };
};

export const updateUserPost = update => {
  return dispatch => {
    dispatch({
      type: UPDATE_USER_POST,
      payload: update,
    });
  };
};

export const deleteUserPost = id => {
  return dispatch => {
    dispatch({
      type: DELETE_USER_POST,
      payload: id,
    });
  };
};

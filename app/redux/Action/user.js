import {USER_DETAILS} from '../Types';

export const userDetails = userData => {
  return dispatch => {
    dispatch({
      type: USER_DETAILS,
      payload: userData,
    });
  };
};

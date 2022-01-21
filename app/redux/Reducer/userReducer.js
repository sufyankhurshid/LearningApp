import {USER_DETAILS} from '../Types';

const INITIAL_STATE = {
  userDetails: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_DETAILS: {
      return {
        ...state,
        userDetails: [...(state?.userDetails ?? []), action?.payload],
      };
    }
    default:
      return state;
  }
};

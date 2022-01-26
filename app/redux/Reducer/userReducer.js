import {
  CREATE_USERS,
  IS_LOGGED_IN,
  IS_SUPPORT_SCREEN,
  RESET_ERROR,
} from '../Types';

const INITIAL_STATE = {
  createUsers: [],
  isLoggedIn: false,
  isSupport: false,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_USERS: {
      const alreadyExist = state?.createUsers?.find(
        user => user?.email === action?.payload?.email,
      );
      if (alreadyExist) {
        return {
          ...state,
          error: 'Email is already exist...',
        };
      }

      return {
        ...state,
        createUsers: [...(state?.createUsers ?? []), action?.payload],
      };
    }

    case IS_SUPPORT_SCREEN: {
      return {
        ...state,
        isSupport: action?.payload,
      };
    }

    case IS_LOGGED_IN: {
      return {
        ...state,
        isLoggedIn: action?.payload,
      };
    }

    case RESET_ERROR: {
      return {
        ...state,
        error: '',
      };
    }
    default:
      return state;
  }
};

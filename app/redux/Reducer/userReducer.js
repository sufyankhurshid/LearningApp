import {
  BLOCK_USER,
  IS_LOGGED_IN,
  IS_SUPPORT_SCREEN,
  LOGIN_STATUS,
  RECOVER_PASSWORD,
  RESET_ERROR,
  USERS,
} from '../Types';

const INITIAL_STATE = {
  users: [],
  isLoggedIn: false,
  isSupport: false,
  error: '',
  recoveries: {},
  blockUsers: [],
  loginStatus: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERS: {
      const alreadyExist = state?.users?.find(
        user => user?.userEmail === action?.payload?.userEmail,
      );
      if (alreadyExist) {
        return {
          ...state,
          error: 'Email is already exist...',
        };
      }
      const id = state?.users?.length + 1;
      const addId = {...action?.payload, id};
      return {
        ...state,
        users: [...(state?.users ?? []), addId],
        error: '',
      };
    }

    case LOGIN_STATUS: {
      return {
        ...state,
        loginStatus: action?.payload,
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

    case RECOVER_PASSWORD: {
      const obj1 = action?.payload;
      const obj2 = state?.recoveries;
      let recoveriesObject = Object.assign(obj2, obj1);
      return {
        ...state,
        recoveries: recoveriesObject,
      };
    }

    case BLOCK_USER: {
      return {
        ...state,
        blockUsers: [...(state?.blockUsers ?? []), action?.payload],
      };
    }

    default:
      return state;
  }
};

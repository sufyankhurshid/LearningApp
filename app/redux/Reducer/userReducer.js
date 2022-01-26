import {
  IS_LOGGED_IN,
  IS_SUPPORT_SCREEN,
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
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERS: {
      const alreadyExist = state?.users?.find(
        user => user?.email === action?.payload?.email,
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
      let recoveriesObject = Object.assign(obj1, obj2);
      return {
        ...state,
        recoveries: recoveriesObject,
      };
    }
    default:
      return state;
  }
};

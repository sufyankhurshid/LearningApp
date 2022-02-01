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
  UPDATE_LOGIN_STATUS,
  UPDATE_USER_POST,
  UPDATE_USER_PROFILE,
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
  fetchUserPost: [],
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
      const userCode = '';
      const addId = {...action?.payload, id, userCode};

      return {
        ...state,
        users: [...(state?.users ?? []), addId],
        error: '',
      };
    }

    case UPDATE_USER_PROFILE: {
      const update = state?.users.map(user => {
        if (user.id === action?.payload?.id) {
          return action?.payload;
        }
        return user;
      });
      return {
        ...state,
        users: update,
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

    case UPDATE_LOGIN_STATUS: {
      const update = state?.loginStatus.map(user => {
        if (user.id === action?.payload?.id) {
          return action?.payload;
        }
        return user;
      });
      return {
        ...state,
        loginStatus: update,
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
      const alreadyExist = state?.blockUsers?.find(
        blockUsers => blockUsers?.userEmail === action?.payload?.userEmail,
      );
      if (alreadyExist) {
        return {
          ...state,
          error: 'User is already exist block...',
        };
      }
      return {
        ...state,
        blockUsers: [...(state?.blockUsers ?? []), action?.payload],
      };
    }

    case FETCH_USER_POST: {
      return {
        ...state,
        fetchUserPost: action?.payload,
      };
    }

    case CREATE_USER_POST: {
      const id = state?.fetchUserPost?.length + 1;
      const addId = {...action?.payload, id};

      return {
        ...state,
        fetchUserPost: [...(state?.fetchUserPost ?? []), addId],
      };
    }

    case UPDATE_USER_POST: {
      const update = state?.fetchUserPost.map(post => {
        if (post.id === action?.payload?.id) {
          return action?.payload;
        }
        return post;
      });
      return {
        ...state,
        fetchUserPost: update,
      };
    }

    case DELETE_USER_POST: {
      const newArray = state?.fetchUserPost?.filter(
        post => post?.id !== action?.payload,
      );
      return {
        ...state,
        fetchUserPost: newArray,
      };
    }

    default:
      return state;
  }
};

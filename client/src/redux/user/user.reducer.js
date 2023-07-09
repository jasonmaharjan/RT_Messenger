import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  isUserFetching: false,
  selectedServer: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.LOG_IN_START:
      return {
        ...state,
        isUserFetching: true,
      };

    case UserActionTypes.LOG_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        isUserFetching: false,
      };

    case UserActionTypes.LOG_OUT_START:
      return {
        ...state,
        currentUser: null,
      };

    case UserActionTypes.LOG_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };

    case UserActionTypes.LOG_IN_FAILURE:
    case UserActionTypes.LOG_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
        isUserFetching: false,
      };

    case UserActionTypes.SET_SELECTED_SERVER:
      return {
        ...state,
        selectedServer: action.payload
      }

    case UserActionTypes.RESET_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export default userReducer;

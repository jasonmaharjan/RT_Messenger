import { UserActionTypes } from "./user.types";

// log in actions
export const logInStart = (emailAndPassword) => ({
  type: UserActionTypes.LOG_IN_START,
  payload: emailAndPassword,
});

export const logInSuccess = (user) => ({
  type: UserActionTypes.LOG_IN_SUCCESS,
  payload: user,
});

export const logInFailure = (error) => ({
  type: UserActionTypes.LOG_IN_FAILURE,
  payload: error,
});

// sign Up actions
export const signUpStart = (signUpData) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: signUpData,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});

// log out actions
export const logOutStart = () => ({
  type: UserActionTypes.LOG_OUT_START,
});

export const logOutSuccess = () => ({
  type: UserActionTypes.LOG_OUT_SUCCESS,
});

export const logOutFailure = (error) => ({
  type: UserActionTypes.LOG_OUT_FAILURE,
  payload: error,
});

export const resetError = () => ({
  type: UserActionTypes.RESET_ERROR,
});

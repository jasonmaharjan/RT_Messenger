import { takeLatest, put, all, call } from "redux-saga/effects";
import { UserActionTypes } from "./user.types";
import { logInSuccess, logInFailure } from "./user.actions";
import { signUpSuccess, signUpFailure } from "./user.actions";
import { logOutSuccess, logOutFailure } from "./user.actions";

import { login, signup, logout } from "../../api/axios";

// Generator functions
export function* logInWithEmail({ payload: { email, password } }) {
  try {
    const userData = yield call(login, email, password);

    if (userData) {
      yield put(logInSuccess(userData));
    } else {
      yield put(logInFailure("Invalid login credentials"));
    }
  } catch (error) {
    yield put(logInFailure("Invalid login credentials"));
  }
}

export function* signUp({ payload }) {
  try {
    const user = yield call(signup, payload);
    if (user) {
      yield call(signUpSuccess(user));
    } else {
      yield call(signUpFailure("Invalid user input"));
    }
  } catch (error) {
    yield put(signUpFailure("Invalid user input"));
  }
}

export function* logOut() {
  try {
    // destroy JWT from database + localStorage
    yield call(logout, localStorage.getItem("token"));
    yield put(logOutSuccess());
  } catch (error) {
    yield put(logOutFailure(error));
  }
}

export function* onLogInStart() {
  yield takeLatest(UserActionTypes.LOG_IN_START, logInWithEmail);
}

export function* onSignUp() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onLogOutStart() {
  yield takeLatest(UserActionTypes.LOG_OUT_START, logOut);
}

export function* userSagas() {
  yield all([call(onLogInStart), call(onSignUp), call(onLogOutStart)]);
}

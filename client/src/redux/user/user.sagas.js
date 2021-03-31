import { takeLatest, put, all, call } from "redux-saga/effects";
import { UserActionTypes } from "./user.types";
import { logInSuccess, logInFailure } from "./user.actions";
import { signUpSuccess, signUpFailure } from "./user.actions";
import { signOutSuccess, signOutFailure } from "./user.actions";

import { login, signup } from "../../axios";

// Generator functions
export function* logInWithEmail({ payload: { email, password } }) {
  try {
    const userData = yield call(login, email, password);

    if (userData) {
      yield put(logInSuccess(userData));
    } else {
      yield put(logInFailure("Incorrect login credentials"));
    }
  } catch (error) {
    yield put(logInFailure(error));
  }
}

export function* signUp({ payload }) {
  try {
    const user = yield call(signup, payload);
    console.log(user);
    if (user) {
      yield call(signUpSuccess(user));
    } else {
      yield call(signUpFailure("Invalid user credentials"));
    }
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signOut() {
  try {
    // destroy JWT from the browser here
    // yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onLogInStart() {
  yield takeLatest(UserActionTypes.LOG_IN_START, logInWithEmail);
}

export function* onSignUp() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([call(onLogInStart), call(onSignUp), call(onSignOutStart)]);
}

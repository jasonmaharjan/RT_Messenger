import { takeLatest, put, all, call } from "redux-saga/effects";
import { ServerActionTypes } from "./server.types";

import { createServerSuccess, createServerFailure } from "./server.actions";

export function* createServer({ payload }) {
  try {
    console.log(payload);
    // axios method here
    yield put(createServerSuccess());
  } catch (error) {
    yield put(createServerFailure(error));
  }
}

export function* onCreateServer() {
  yield takeLatest(ServerActionTypes.CREATE_SERVER, createServer);
}

export function* serverSagas() {
  yield all([call(onCreateServer)]);
}

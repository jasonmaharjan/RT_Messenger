import { takeLatest, put, all, call } from "redux-saga/effects";
import { ServerActionTypes } from "./server.types";

import { createServerSuccess, createServerFailure } from "./server.actions";
import { getServerDataSuccess, getServerDataFailure } from "./server.actions";

import { getServerData, createServerData } from "../../axios";

export function* getServer({ payload }) {
  try {
    const data = yield call(getServerData, payload);
    if (data) {
      yield put(getServerDataSuccess(data));
    }
  } catch (error) {
    yield put(getServerDataFailure(error));
  }
}

export function* createServer({ payload }) {
  try {
    const serverData = yield call(createServerData, payload);
    if (serverData) {
      yield put(createServerSuccess(serverData));
    } else {
      yield put(createServerFailure("error creating server"));
    }
  } catch (error) {
    yield put(createServerFailure(error));
  }
}

export function* onGetServerData() {
  yield takeLatest(ServerActionTypes.GET_SERVER_DATA, getServer);
}

export function* onCreateServer() {
  yield takeLatest(ServerActionTypes.CREATE_SERVER, createServer);
}

export function* serverSagas() {
  yield all([call(onGetServerData), call(onCreateServer)]);
}

import { takeLatest, put, all, call } from "redux-saga/effects";
import { ServerActionTypes } from "./server.types";

import { createServerSuccess, createServerFailure } from "./server.actions";
import { getServerDataSuccess, getServerDataFailure } from "./server.actions";
import {
  arrangeServerListSuccess,
  arrangeServerListFailure,
} from "./server.actions";

import {
  getServerData,
  createServerData,
  arrangeServers,
} from "../../api/axios";

export function* getServer({ payload }) {
  try {
    const servers = yield call(getServerData, payload);
    if (servers) {
      yield put(getServerDataSuccess(servers));
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

export function* arrangeServer({ payload }) {
  try {
    const newServerList = yield call(arrangeServers, payload);
    if (newServerList) {
      console.log(newServerList);
      yield put(arrangeServerListSuccess(newServerList));
    }
  } catch (error) {
    yield put(arrangeServerListFailure(error));
  }
}

export function* onGetServerData() {
  yield takeLatest(ServerActionTypes.GET_SERVER_DATA, getServer);
}

export function* onCreateServer() {
  yield takeLatest(ServerActionTypes.CREATE_SERVER, createServer);
}

export function* onArrangeServerList() {
  yield takeLatest(ServerActionTypes.ARRANGE_SERVER_LIST, arrangeServer);
}

export function* serverSagas() {
  yield all([
    call(onGetServerData),
    call(onCreateServer),
    call(onArrangeServerList),
  ]);
}

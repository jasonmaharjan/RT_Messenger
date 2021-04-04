import { all, call } from "redux-saga/effects";
import { userSagas } from "./user/user.sagas";
import { serverSagas } from "./server/server.sagas";

export default function* rootSaga() {
  yield all([call(userSagas), call(serverSagas)]);
}

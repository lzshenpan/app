import { all } from "redux-saga/effects";
import authSagas from "./login/sagas";



export default function* rootSaga(getState) {
    yield all([
      authSagas(),
    ]);
  }
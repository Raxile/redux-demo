import { getPostSaga } from "./posts/saga";
import { all } from "redux-saga/effects";
export default function* rootSaga() {
  yield all([getPostSaga()]);
}

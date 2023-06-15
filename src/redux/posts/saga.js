import { call, put, takeEvery } from "redux-saga/effects";
import callGetPost from "./https";
import { getPostError, getPostSuccess } from "./action";
import { GET_POST } from "./actionTypes";

export function* getPostSaga() {
  try {
    const response = yield call(callGetPost);
    if (response?.status) {
      yield put(getPostSuccess(response));
    } else {
      yield put(getPostError(response));
    }
  } catch (error) {
    yield put(getPostError(error));
  }
}

export default function* rootSaga() {
  yield takeEvery(GET_POST, getPostSaga);
}

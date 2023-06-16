import { call, put, takeEvery } from "redux-saga/effects";
import { callDeletePost, callGetPost } from "./https";
import {
  deletePostError,
  deletePostSuccess,
  getPostError,
  getPostSuccess,
} from "./action";
import { DELETE_POST, GET_POST } from "./actionTypes";

function* GetPostSaga() {
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
function* DeletePostSaga(action) {
  try {
    const response = yield call(callDeletePost, action.payload);
    if (response?.status) {
      yield put(deletePostSuccess(response));
    } else {
      yield put(deletePostError(response));
    }
  } catch (error) {
    yield put(deletePostError(error));
  }
}

export default function* rootPostSaga() {
  yield takeEvery(GET_POST, GetPostSaga);
  yield takeEvery(DELETE_POST, DeletePostSaga);
}

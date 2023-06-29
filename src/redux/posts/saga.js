import { call, put, takeEvery } from "redux-saga/effects";
import { callAddPost, callDeletePost, callGetPost } from "./https";
import {
  addPostError,
  addPostSuccess,
  deletePostError,
  deletePostSuccess,
  getPostError,
  getPostSuccess,
} from "./action";
import { ADD_POST, DELETE_POST, GET_POST } from "./actionTypes";

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
function* AddPostSaga(action) {
  const { value, cb } = action.payload;
  try {
    const response = yield call(callAddPost, value);
    if (response?.status) {
      yield put(addPostSuccess(response));
    } else {
      yield put(addPostError(response));
    }
    action.payload.cb();
  } catch (error) {
    yield put(addPostError(error));
    cb();
  }
}

export default function* rootPostSaga() {
  yield takeEvery(GET_POST, GetPostSaga);
  yield takeEvery(DELETE_POST, DeletePostSaga);
  yield takeEvery(ADD_POST, AddPostSaga);
}

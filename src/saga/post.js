import { call, put, takeEvery, delay } from "redux-saga/effects";
import postApi from "../api/postApi";

import {
  createPost,
  createPostSuccess,
  createPostFaild,
  fetchPost,
  fetchPostSuccess,
  fetchPostFaild,
  removePost,
  removePostSuccess,
  removePostFaild
} from "../features/PostAdminList/postSlice";
import {
  hiddenLoading,
  showLoading,
} from "../features/UiLoading/uiLoadingSlice";

function* watchCreatePostAction({ payload }) {
  try {
    yield put(showLoading());
    yield call(postApi.createPost, payload);
    yield put(createPostSuccess());
    yield put(fetchPost());
    yield delay(2000);
    yield put(hiddenLoading());
  } catch (error) {
    yield put(createPostFaild);
    yield delay(2000);
    yield put(hiddenLoading());
  }
}

function* watchFetchPostAction() {
  try {
    const resp = yield call(postApi.getAllPost);
    yield put(fetchPostSuccess(resp));
  } catch (error) {
    yield put(fetchPostFaild());
  }
}

function* watchRemovePostAction({payload}) {
  try {
    yield put(showLoading());
    yield call(postApi.removePost, payload);
    yield put(removePostSuccess());
    yield put(fetchPost());
    yield delay(2000);
    yield put(hiddenLoading());
  } catch (error) {
    yield put(removePostFaild());
    yield delay(2000);
    yield put(hiddenLoading());
  }
}

export const postSagas = [
  takeEvery(createPost.type, watchCreatePostAction),
  takeEvery(fetchPost.type, watchFetchPostAction),
  takeEvery(removePost.type, watchRemovePostAction)
];

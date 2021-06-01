import { call, put, takeEvery, delay } from "redux-saga/effects";
import authApi from "../api/authApi";
import {
  fetchAccountLogin,
  fetchAccountLoginFaild,
  fetchAccountLoginSuccess,
  setStateDatalogin,
} from "../features/FormLogin/loginSlice";

import {
  fetchAccount,
  fetchAccountFaild,
  fetchAccountSuccess,
} from "../features/FormRegister/registerSlice";

import {
  hiddenLoading,
  showLoading,
} from "../features/UiLoading/uiLoadingSlice";

function* watchFetchRegisterAction({ payload }) {
  try {
    yield put(showLoading());
    yield call(authApi.registerUser, payload);
    yield put(fetchAccountSuccess());
    yield delay(2000);
    yield put(hiddenLoading());
  } catch (error) {
    yield put(fetchAccountFaild());
    yield delay(2000);
    yield put(hiddenLoading());
  }
}

function* watchFetchLoginAction({ payload }) {
  try {
    yield put(showLoading());
    const resp = yield call(authApi.loginUser, payload);
    yield put(setStateDatalogin(payload.login));
    yield put(fetchAccountLoginSuccess(resp));
    yield delay(2000);
    yield put(hiddenLoading());
  } catch (error) {
    yield put(fetchAccountLoginFaild());
    yield delay(2000);
    yield put(hiddenLoading());
  }
}

export const authSagas = [
  takeEvery(fetchAccount.type, watchFetchRegisterAction),
  takeEvery(fetchAccountLogin.type, watchFetchLoginAction),
]

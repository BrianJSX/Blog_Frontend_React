import { call, put, delay, takeEvery, takeLatest } from "redux-saga/effects";
import {
  fetchAccount,
  fetchAccountFaild,
  fetchAccountSuccess
} from "../features/FormRegister/registerSlice";
import {
  showLoading,
  hiddenLoading,
} from "../features/UiLoading/uiLoadingSlice";
import registerApi from "../api/authApi";

function* watchFetchRegisterAction({ payload }) {
  try {
    yield put(showLoading());
    const resp = yield call(registerApi.registerUser, payload);
    yield put(fetchAccountSuccess());
    yield put(hiddenLoading());
  } catch (error) {
    yield put(fetchAccountFaild());
    yield put(hiddenLoading());
  }
}

function* rootSaga() {
  yield takeEvery(fetchAccount.type, watchFetchRegisterAction);
}

export default rootSaga;

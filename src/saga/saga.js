import { call, put, takeEvery } from "redux-saga/effects";
import authApi from "../api/authApi";
import {
    fetchAccountLogin,
    fetchAccountLoginFaild, fetchAccountLoginSuccess,
    setStateDatalogin
} from "../features/FormLogin/loginSlice";
import {
    fetchAccount,
    fetchAccountFaild,
    fetchAccountSuccess
} from "../features/FormRegister/registerSlice";
import {
    hiddenLoading, showLoading
} from "../features/UiLoading/uiLoadingSlice";

function* watchFetchRegisterAction({ payload }) {
    try {
        yield put(showLoading());
        yield call(authApi.registerUser, payload);
        yield put(fetchAccountSuccess());
        yield put(hiddenLoading());
    } catch (error) {
        yield put(fetchAccountFaild());
        yield put(hiddenLoading());
    }
}

function* watchFetchLoginAction({ payload }) {
    
    try {
        yield put(showLoading());
        const resp = yield call(authApi.loginUser, payload);
        yield put(setStateDatalogin(payload.login));
        yield put(fetchAccountLoginSuccess(resp));
        yield put(hiddenLoading());

    } catch (error) {
        yield put(fetchAccountLoginFaild());
        yield put(hiddenLoading());
    }
}

function* rootSaga() {
    yield takeEvery(fetchAccount.type, watchFetchRegisterAction);
    yield takeEvery(fetchAccountLogin.type, watchFetchLoginAction);
}

export default rootSaga;
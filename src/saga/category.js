import { call, delay, fork, put, take, takeEvery } from "redux-saga/effects";
import categoryApi from "../api/categoryApi";
import {
  createCategory,
  createCategoryFaild,
  createCategorySuccess,
  fetchCategory,
  fetchCategoryFaild,
  fetchCategorySuccess,
  removeCategory,
  removeCategorySuccess,
  removeCategoryFaild,
} from "../features/CategoryAdminList/categorySlice";
import {
  hiddenLoading,
  showLoading,
} from "../features/UiLoading/uiLoadingSlice";

function* watchFetchCategoryAction() {
  try {
    const resp = yield call(categoryApi.getAllCategory);
    yield put(fetchCategorySuccess(resp));
  } catch (error) {
    yield put(fetchCategoryFaild());
  }
}

function* watchCreateCategoryAction({ payload }) {
  try {
    yield put(showLoading());
    console.log(payload);
    const resp = yield call(categoryApi.CreateCategory, payload);
    console.log(resp);
    yield put(createCategorySuccess());
    yield put(fetchCategory());
    yield delay(2000);
    yield put(hiddenLoading());
  } catch (error) {
    yield put(createCategoryFaild());
    yield delay(2000);
    yield put(hiddenLoading());
  }
}

function* watchRemoveCategoryAction({payload}) {
    try {
        yield put(showLoading());
        const resp = yield call(categoryApi.removeCategory, payload);
        console.log(resp);
        yield put(removeCategorySuccess());
        yield put(fetchCategory());
        yield delay(2000);
        yield put(hiddenLoading());
      } catch (error) {
        yield put(removeCategoryFaild());
        yield delay(2000);
        yield put(hiddenLoading());
      }
}

export const categorySagas = [
  takeEvery(fetchCategory.type, watchFetchCategoryAction),
  takeEvery(createCategory.type, watchCreateCategoryAction),
  takeEvery(removeCategory.type, watchRemoveCategoryAction),
];

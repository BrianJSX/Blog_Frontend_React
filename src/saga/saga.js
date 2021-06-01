import { all } from '@redux-saga/core/effects';
import {authSagas} from './auth';
import {categorySagas} from './category';

function* rootSaga() {
  yield all(
    [
      ...authSagas,
      ...categorySagas,
    ]
  )
}

export default rootSaga;

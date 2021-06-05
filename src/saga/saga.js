import { all } from '@redux-saga/core/effects';
import {authSagas} from './auth';
import {categorySagas} from './category';
import {postSagas} from './post';

function* rootSaga() {
  yield all(
    [
      ...authSagas,
      ...categorySagas,
      ...postSagas
    ]
  )
}

export default rootSaga;

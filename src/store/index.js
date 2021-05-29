import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import saga from '../saga/saga';
import registerReducer from '../features/FormRegister/registerSlice';
import uiLoadingReducer from '../features/UiLoading/uiLoadingSlice';

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ serializableCheck: false, thunk: false }), sagaMiddleware];
const devMode = process.env.NODE_ENV === 'development';

export default configureStore({
  reducer: {
   register: registerReducer,
   uiLoading: uiLoadingReducer
  },
  middleware,
  devTools: devMode,
});

sagaMiddleware.run(saga);

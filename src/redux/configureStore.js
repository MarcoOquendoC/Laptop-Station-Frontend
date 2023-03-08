import logger from 'redux-logger';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import homeReducer from './Home/home';

const rootReducer = combineReducers({
  images: homeReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

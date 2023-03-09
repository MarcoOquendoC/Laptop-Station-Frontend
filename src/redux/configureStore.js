import logger from 'redux-logger';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import homeReducer from './Home/home';
import authReducer from './Registration/auth';

const rootReducer = combineReducers({
  items: homeReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

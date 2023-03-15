import logger from 'redux-logger';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import homeReducer from './Home/home';
import authReducer from './Registration/auth';
import reserveReducer from './Reserve/reserve';

const rootReducer = combineReducers({
  items: homeReducer,
  auth: authReducer,
  reserves: reserveReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

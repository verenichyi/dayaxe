import { combineReducers, configureStore } from '@reduxjs/toolkit';
import auth from '../slices/auth';
import hotels from '../slices/hotels';
import hotelPasses from '../slices/hotel-passes';

export const rootReducer = combineReducers({
  auth,
  hotels,
  hotelPasses,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import userReducer from "../reducers/user";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Redux 스토어에서 사용되는 TypeScript 타입들을 정의
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

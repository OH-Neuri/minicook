import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userAccessReducer from "../reducers/userAccess";
import userLikedReducer from "../reducers/userLiked";
import recipeReducer from "../reducers/recipe";

export const store = configureStore({
  reducer: {
    recipe: recipeReducer,
    userAccess: userAccessReducer,
    userLiked: userLikedReducer,
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

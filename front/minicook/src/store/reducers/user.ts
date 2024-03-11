import { authClient } from "../../lib/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserType from "../../type/user";
import { RootState } from "../store";

export const getUser = createAsyncThunk(`user/getUser`, async () => {
  const res = await authClient.get("user/info");
  return res.data;
});

export const initialState: UserType = {
  userId: 0,
  user: null,
  name: "",
  email: "",
  userGetLoading: false,
  userGetError: false,
  likeRecipe: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    tempSetUser(state, action) {
      state.user = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state, action) => {
        state.userGetLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.userGetLoading = false;
        state.userGetError = false;
        return { ...state, ...action.payload };
      });
  },
});

export const { tempSetUser } = userSlice.actions;

export default userSlice.reducer;

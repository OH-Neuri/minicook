import { createSlice } from "@reduxjs/toolkit";

const userAccessSlice = createSlice({
  name: "userAccess",
  initialState: {
    user: false,
  },
  reducers: {
    tempSetUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { tempSetUser } = userAccessSlice.actions;
export default userAccessSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authClient } from "../../api";
import { UserLikedType } from "../../type";


export const getLikedRecipesDate = createAsyncThunk(
  `userLiked/getUserLikedRecipe`,
  async (type: number) => {
    const res = await authClient.get(`user/like/${type}`);
    return res.data;
  }
);
export const getLikedRecipesLike = createAsyncThunk(
  `userLiked/getLikedRecipesLike`,
  async (type: number) => {
    const res = await authClient.get(`user/like/${type}`);
    return res.data;
  }
);
export const getLikedRecipesDictionary = createAsyncThunk(
  `userLiked/getLikedRecipesDictionary`,
  async (type: number) => {
    const res = await authClient.get(`user/like/${type}`);
    return res.data;
  }
);

// 좋아요 레시피 삭제하기
export const removeLikedRecipes = createAsyncThunk(
  `userLiked/removedLikedRecipes`,
  async (removeIndex: string[]) => {
    const requestData = { removeIndex };
    const res = await authClient.post("user/like", requestData);
    return res.data;
  }
);

export const initialState: UserLikedType = {
  recipeId: [],
  recipeGetLoading: false,
  recipeGetError: false,
  isModify: false,
  removeRecipeId: [],
  recipeRemoveLoading: false,
  recipeRemoveError: false,
};

const userLikedSlice = createSlice({
  name: "userLiked",
  initialState,
  reducers: {
    setRecipeId(state, action) {
      return {
        ...state,
        recipeId: action.payload,
      };
    },
    setRemoveRecipeId(state, action) {
      return {
        ...state,
        recipeId: state.recipeId.filter((index) => action.payload.indexOf(index) === -1),
      };
    },
    setModify(state) {
      state.isModify = !state.isModify;
    },
    setResetRemoveIndex(state) {
      state.removeRecipeId = [];
    },
    setAddRemoveIndex(state, action) {
      return {
        ...state,
        removeRecipeId: [...state.removeRecipeId, action.payload],
      };
    },
    setSliceRemoveIndex(state, action) {
      return {
        ...state,
        removeRecipeId: state.removeRecipeId.filter((index) => index !== action.payload),
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLikedRecipesDate.pending, (state, action) => {
        state.recipeGetLoading = true;
      })
      .addCase(getLikedRecipesDate.fulfilled, (state, action) => {
        state.recipeGetLoading = false;
        state.recipeGetError = false;
        return { ...state, ...action.payload };
      })
      .addCase(getLikedRecipesDate.rejected, (state, action) => {
        state.recipeGetError = true;
      })
      .addCase(getLikedRecipesLike.fulfilled, (state, action) => {
        return { ...state, ...action.payload };
      })
      .addCase(getLikedRecipesDictionary.fulfilled, (state, action) => {
        return { ...state, ...action.payload };
      })
      .addCase(removeLikedRecipes.pending, (state, action) => {
        state.recipeRemoveLoading = true;
      })
      .addCase(removeLikedRecipes.fulfilled, (state, action) => {
        state.recipeRemoveLoading = false;
        state.recipeRemoveError = false;
        return { ...state, ...action.payload };
      })
      .addCase(removeLikedRecipes.rejected, (state, action) => {
        state.recipeRemoveError = true;
      });
  },
});

export const {
  setRecipeId,
  setRemoveRecipeId,
  setModify,
  setResetRemoveIndex,
  setAddRemoveIndex,
  setSliceRemoveIndex,
} = userLikedSlice.actions;

export default userLikedSlice.reducer;

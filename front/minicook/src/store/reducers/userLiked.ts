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
  async (removeIndex: number[]) => {
    const requestData = { removeIndex };
    const res = await authClient.post("user/like", requestData);
    return res.data;
  }
);

export const initialState: UserLikedType = {
  recipe: [],
  recipeGetLoading: false,
  recipeGetError: false,
  recipeRemoveLoading: false,
  recipeRemoveError: false,
  tab: 0,
  modify: false,
  removeIndex: [],
};

const userLikedSlice = createSlice({
  name: "userLiked",
  initialState,
  reducers: {
    setRecipe(state, action) {
      state.recipe = action.payload;
    },
    setTab(state, action) {
      switch (action.payload) {
        // tab : 0, 날짜순
        case 0:
          //getLikedRecipesDate(action.payload);
          break;
        // tab : 1, 좋아요순
        case 1:
          //getLikedRecipesLike(action.payload);
          break;
        // tab : 2, 사전순
        case 2:
          //getLikedRecipesDictionary(action.payload);
          break;
      }
      state.tab = action.payload;
    },
    setModify(state) {
      state.modify = !state.modify;
    },
    setResetRemoveIndex(state) {
      state.removeIndex = [];
    },
    setAddRemoveIndex(state, action) {
      return {
        ...state,
        removeIndex: [...state.removeIndex, action.payload],
      };
    },
    setSliceRemoveIndex(state, action) {
      return {
        ...state,
        removeIndex: state.removeIndex.filter((index) => index !== action.payload),
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
  setRecipe,
  setTab,
  setModify,
  setResetRemoveIndex,
  setAddRemoveIndex,
  setSliceRemoveIndex,
} = userLikedSlice.actions;

export default userLikedSlice.reducer;

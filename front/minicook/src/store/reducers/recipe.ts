import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RecipeStoreType } from "../../type";
import { collection, getDocs, query } from "firebase/firestore";
import { fireStore } from "../../firebase/firebaseClient";

export const getRecipes = createAsyncThunk(`recipe/getRecipes`, async () => {
  const docRef = collection(fireStore, "recipe");
  //const q = query(docRef);
  const querySnapshot = await getDocs(docRef);

  const data: any = querySnapshot.docs.map((doc) => {
    const recipeData = doc.data();
    return {
      id: doc.id,
      ...recipeData,
    };
  });
  return data;
});

export const initialState: RecipeStoreType = {
  recipe: [],
  recipeGetLoading: false,
  recipeGetError: false,
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecipes.pending, (state, action) => {
        state.recipeGetLoading = true;
      })
      .addCase(getRecipes.fulfilled, (state, action) => {
        return {
          recipeGetLoading: false,
          recipeGetError: false,
          recipe: action.payload,
        };
      })
      .addCase(getRecipes.rejected, (state, action) => {
        state.recipeGetLoading = false;
        state.recipeGetError = true;
      });
  },
});

export default recipeSlice.reducer;

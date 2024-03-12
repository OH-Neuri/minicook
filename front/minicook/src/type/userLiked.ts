import Recipe from "../data/type/recipe";

export interface UserLikedType {
  recipe: Recipe[];
  recipeGetLoading: boolean;
  recipeGetError: boolean;
  recipeRemoveLoading: boolean;
  recipeRemoveError: boolean;
  tab: number;
  modify: boolean;
  removeIndex: number[];
}

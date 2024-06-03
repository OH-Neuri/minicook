// 레시피 타입
export interface RecipeType {
  id: string;
  name: string;
  like: number;
  ingredients: string[];
  thumbnail: string;
  image: string[];
  content: string[];
}
export interface RecipeStoreType {
  recipe: RecipeType[];
  recipeGetLoading: boolean;
  recipeGetError: boolean;
}

// 사용자 정보 타입
export interface UserInfoType {
  user: boolean | null;
  email: string;
  nickname: string;
  userGetLoading: boolean;
  userGetError: string | boolean;
  likeRecipe: number[];
}

// 사용자 타입
export interface UserType {
  email: string;
  nickname: string;
}

// 사용자가 좋아요한 레시피 정보 타입
export interface UserLikedType {
  recipeId: string[];
  recipeGetLoading: boolean;
  recipeGetError: boolean;
  recipeRemoveLoading: boolean;
  recipeRemoveError: boolean;
  isModify: boolean;
  removeRecipeId: string[];
}


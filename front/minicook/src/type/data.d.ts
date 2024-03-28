// 레시피 타입
export interface RecipeType { 
  id: number;
  name: string;
  like: number;
  ingredients: string[];
  thumbnail: string;
  image: string[];
  content: string[];
}

// 사용자 타입
export interface UserType {
  user: boolean | null;
  nickname: string;
  email: string;
  userGetLoading: boolean;
  userGetError: string | boolean;
  likeRecipe: number[];
}

// 사용자가 좋아요한 레시피 정보 타입
export interface UserLikedType {
  recipe: RecipeType[];
  recipeGetLoading: boolean;
  recipeGetError: boolean;
  recipeRemoveLoading: boolean;
  recipeRemoveError: boolean;
  tab: number;
  modify: boolean;
  removeIndex: number[];
}


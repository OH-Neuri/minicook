interface UserType {
  userId: number;
  user: boolean | null;
  name: string;
  email: string;
  userGetLoading: boolean;
  userGetError: string | boolean;
  likeRecipe: number[];
}

export default UserType;

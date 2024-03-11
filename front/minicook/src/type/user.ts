interface UserType {
  userId: Number;
  user: boolean | null;
  email: String;
  userGetLoading: boolean;
  userGetError: String | boolean;
  likeRecipe: String[];
}

export default UserType;

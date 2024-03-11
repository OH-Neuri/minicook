interface UserType {
  userId: Number;
  user: boolean | null;
  name: String;
  email: String;
  userGetLoading: boolean;
  userGetError: String | boolean;
  likeRecipe: String[];
}

export default UserType;

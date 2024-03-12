import React from "react";
import MyPageTemplate from "../../components/mypage/MyPageTemplate";
import UserInfoContainer from "../../container/mypage/UserInfoContainer";
import UserLikedRecipesContainer from "../../container/mypage/UserLikedRecipesContainer";
const MyPage = () => {
  return (
    <MyPageTemplate>
      <UserInfoContainer />
      <UserLikedRecipesContainer />
    </MyPageTemplate>
  );
};

export default MyPage;

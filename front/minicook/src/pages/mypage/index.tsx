import React from "react";
import styled from "styled-components";
import UserLikedRecipesContainer from "../../containers/mypage/userLikedRecipesContainer";
import UserInfoContainer from "../../containers/mypage/userInfoContainer";

const MyPage = () => {
  return (
    <MyPageWrapper>
      <UserInfoContainer />
      <UserLikedRecipesContainer />
    </MyPageWrapper>
  );
};
const MyPageWrapper = styled.div`
width: 100%;
height: 100vh;
padding: 15px;
background-color:#F4F1EB ;
display: flex;
flex-direction: column;
align-items: center;
`;
export default MyPage;

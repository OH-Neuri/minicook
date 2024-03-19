import React from "react";
import styled from "styled-components";
import UserInfo from "../../container/mypage/UserInfo";
import UserLikedRecipes from "../../container/mypage/UserLikedRecipes";
const MyPage = () => {
  return (
    <MyPageWrapper>
      <UserInfo />
      <UserLikedRecipes />
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

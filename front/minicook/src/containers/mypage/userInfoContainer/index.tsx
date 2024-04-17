import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { UserType } from "../../../type";

const UserInfoContainer = () => {
  const [user, setUser] = useState<UserType>({ email: "", nickname: "" });

  useEffect(() => {
    try {
      const userEmail = localStorage.getItem("email");
      const userNickname = localStorage.getItem("nickname");

      if (userEmail && userNickname) {
        const email = userEmail.replace(/^"(.*)"$/, "$1");
        const nickname = userNickname.replace(/^"(.*)"$/, "$1");
        setUser({ email: email, nickname: nickname });
      }
    } catch (e) {
      console.log("localStroage is not working");
    }
  }, []);

  return (
    <UserInfoWrapper>
      <div className='header'>개인 정보</div>
      <div className='header-item'>
        <StyledBox type='닉네임' value={user.nickname} />
        <StyledBox type='이메일' value={user.email} />
      </div>
    </UserInfoWrapper>
  );
};

const UserInfoWrapper = styled.div`
  width: 100%;
  height: 100px;
  padding: 0 20px;
  max-width: 1000px;
  
  .header{
    width: 100%;
    font-size: x-large;
    font-weight:600;
    margin-bottom: 10px;
  }
  
  .header-item{
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media screen and (max-width: 790px) {
    flex-wrap: wrap;
    gap: 5px;
    }
  }
`;

const StyledBox = ({ type, value }: { type: string; value: string }) => {
  return (
    <StyledBoxWrapper>
      <div className='text items-center'>{`${type}:  ${value}`}</div>
    </StyledBoxWrapper>
  );
};

const StyledBoxWrapper = styled.div`
  width:270px;
  height: 40px;
  background-color: #e1e1e1;
  border-radius : 10px;
  
  .text{
      height: inherit;
      font-size: medium;
      display: flex;
      align-items: center;
      padding: 0 1rem;
  }
`;

export default UserInfoContainer;

import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/store";

const UserInfo = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <UserInfoWrapper>
      <div className='header'>개인 정보</div>
      <div className='header-item'>
        <StyledBox type='이름' value={user.name} />
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
      <div className='text items-center'>{`${type}: ${value}`}</div>
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

export default UserInfo;

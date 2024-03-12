import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/store";
const UserInfoContainer = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <UserInfoContainerWrapper>
      <div className='header'>개인 정보</div>
      <div className='flex justify-between'>
        <StyledBox type='이름' value={user.name} />
        <StyledBox type='이메일' value={user.email} />
      </div>
    </UserInfoContainerWrapper>
  );
};
const UserInfoContainerWrapper = styled.div`
width: 80%;
height: 10%;
.header{
    font-size: x-large;
    font-weight:600 ;
    margin-bottom: 1dvi;
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
width:16rem;
height: 2.3rem;
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

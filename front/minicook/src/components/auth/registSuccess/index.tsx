import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface RegistSuccessWrapper {
  onRegist: ()=>void;
}
const RegistSuccess: React.FC<RegistSuccessWrapper> = ({ onRegist }) => {
  return (
    <RegistSuccessWrapper>
      <div>🎉환영합니다!🎉</div>
      <div>회원가입이 완료되었습니다.</div>
      <div>로그인하여 서비스를 이용해보세요.</div>
      <StyledLink to={"/login"} onClick={onRegist}>
        로그인
      </StyledLink>
    </RegistSuccessWrapper>
  );
};

const RegistSuccessWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    font-size: medium;
    font-weight: 600;
  }
`;
const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
    background-color: #476801;
    border-radius: 5px;
    color:white;
    height: 3rem;
    &:hover{
        background-color: #365000;
    }
`;

export default RegistSuccess;
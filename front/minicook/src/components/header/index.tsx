import React from "react";
import styled from "styled-components";
import mainLogo from "../header/assets/minicook_logo.svg";
import { Link } from "react-router-dom";

interface HeaderProps {
  user: boolean | null;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <HeaderWrapper>
      <Section>
        <MainLogo to='/'>
          <img width={115} height={115} src={mainLogo} alt='Minicook Icon' />
        </MainLogo>
        <div className='header-button'>
          {user ? (
            <>
              <SytledLink to='/myPage'>마이페이지</SytledLink>
              <StyledButton onClick={handleLogout}>로그아웃</StyledButton>
            </>
          ) : (
            <>
              <SytledLink to='/login'>로그인</SytledLink>
              <SytledLink to='/register'>회원가입</SytledLink>
            </>
          )}
        </div>
      </Section>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
background-color: ${(props) => props.theme.colors.green1}
`;

const Section = styled.div`
width: 100%;
max-width: 1200px;
height:85px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px 20px;

.header-button{
  min-width: 200px;
  display: flex;
  justify-content: end;
  align-items: center;
  cursor: pointer;
  }
`;

const MainLogo = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 790px) {
     > img{
      width: 100px;
     }
  }
    @media screen and (max-width: 500px) {
     > img{
      width: 90px;
     }
  }
`;

const StyledButton = styled.button`
    height: 10px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    margin-left: 30px;

    font-size:small;
    color: white;
`;
const SytledLink = styled(Link)`
      height: 10px;
      display: flex;
      align-items: center;
      padding: 0 10px;
      margin-left: 30px;
      
      font-size:small;
      color: white;
`;

export default Header;

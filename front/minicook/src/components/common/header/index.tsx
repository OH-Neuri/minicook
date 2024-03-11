import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../../navBar";
import mainLogo from "../header/assets/minicook_logo.svg";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { tempSetUser } from "../../../store/reducers/user";

interface HeaderProps {
  user: boolean | null;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  const handleLogout = () => {
    onLogout();
  };
  useEffect(() => {
    console.log("asdasd");
  }, []);
  return (
    <>
      <HeaderWrapper>
        <MainLogo to='/'>
          <img width={115} height={115} src={mainLogo} alt={`미니쿡아이콘`}></img>
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
      </HeaderWrapper>
      <NavBar />
    </>
  );
};

const HeaderWrapper = styled.div`
width:100%;
height:5rem;
display: flex;
justify-content: space-between;
align-items: center;
text-align: center;
padding: 0 20%;
background-color: #455631;

.header-button{
  display: flex;
  justify-content: end;
  align-items: center;
  cursor: pointer;
  }
  
`;
const MainLogo = styled(NavLink)`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const StyledButton = styled.button`
    display: flex;
      align-items: center;
      height: 1.75rem;
      padding: 0 1.4rem;
      margin-left: 1.1rem;
      border-radius: 0px;
      font-size:small;
      color: white;
`;
const SytledLink = styled(NavLink)`
      display: flex;
      align-items: center;
      height: 1.75rem;
      padding: 0 1.4rem;
      margin-left: 1.1rem;
      border-radius: 0px;
      font-size:small;
      color: white;
      `;
//
export default Header;

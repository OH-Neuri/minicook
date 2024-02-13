import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../navBar";
import mncLogo from "./assets/minicook-logo.svg";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [user, setUser] = useState(true);
  const navigate = useNavigate();

  const changePage = (e: React.MouseEvent<HTMLDivElement>) => {
    const page = e.currentTarget.dataset.id;
    navigate(`/${page}`);
  };

  return (
    <>
      <HeaderWrapper>
        <div className='header__logo cursor-pointer' data-id={""} onClick={changePage}>
          <img width={38} height={38} src={mncLogo} alt={`미니쿡아이콘`}></img>
          <span className='text-2xl px-2 font-semibold'>미니쿡</span>
        </div>
        <div className='header__button cursor-pointer'>
          {user ? (
            <>
              <div data-id={"login"} onClick={(e) => changePage(e)}>
                로그인
              </div>
              <div data-id={"signup"} onClick={(e) => changePage(e)}>
                회원가입
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </HeaderWrapper>
      <NavBar></NavBar>
    </>
  );
};
// 일단 JSX부분에 html 처럼 작성하고, 그 구분되는 클래스는 Wrapper 컴포넌트 안에 작성한다.
const HeaderWrapper = styled.div`
width:100%;
height:4.3rem;
display: flex;
justify-content: space-between;
align-items: center;
text-align: center;
padding: 0 20%;
background-color: ${(props) => props.theme.mainColor};


 .header__logo{
  display: flex;
  align-items: center;
}

.header__button{
  display: flex;
  justify-content: end;
  align-items: center;
  
    > div {
      display: flex;
      align-items: center;
      border: 1px solid #969696;
      height: 1.75rem;
      padding: 0 1.4rem;
      margin-left: 1.1rem;
      border-radius: 15px;
      font-size:small;
      background-color: white;
    }
  }

`;
//
export default Header;

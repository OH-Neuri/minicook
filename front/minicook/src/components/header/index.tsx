import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../navBar";
import mainLogo from "../../data/assets/minicook_logo.svg";
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
        <div className='header-logo cursor-pointer' data-id={""} onClick={changePage}>
          <img width={115} height={115} src={mainLogo} alt={`미니쿡아이콘`}></img>
        </div>
        <div className='header-button cursor-pointer'>
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
height:5rem;
display: flex;
justify-content: space-between;
align-items: center;
text-align: center;
padding: 0 20%;
background-color: #455631;


 .header-logo{
  display: flex;
  align-items: center;
}

.header-button{
  display: flex;
  justify-content: end;
  align-items: center;
  
    > div {
      display: flex;
      align-items: center;
      height: 1.75rem;
      padding: 0 1.4rem;
      margin-left: 1.1rem;
      border-radius: 0px;
      font-size:small;
      /*border: 1px solid #d3bea7;*/
      /*background-color: #dcae79;*/
      color: white;
    }
  }

`;
//
export default Header;

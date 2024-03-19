import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SearchBarInput from "../search/searchBarInput";
import { Link } from "react-router-dom";
import recipe from "../../data/recipe";
import SearchBarInfo from "../search/searchBarInfo";

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState<boolean>(false);
  const navbarInfoRef = useRef<HTMLDivElement | null>(null);
  const [input, setInput] = useState<string>("");

  const handleOpenSearchBar = () => setNavBarOpen(true);
  const handleCloseSearchBar = () => setNavBarOpen(false);

  const handleInput = useCallback((newInput: string) => {
    setInput(newInput);
  }, []);

  useEffect(() => {
    const handler = (e: { target: any }) => {
      if (
        navBarOpen &&
        navbarInfoRef.current &&
        !navbarInfoRef.current.contains(e.target)
      )
        handleCloseSearchBar();
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [navBarOpen]);

  return (
    <NavBarWrapper>
      <Section>
        <StyledLink to='/recipe/select'>레시피 선택</StyledLink>
        <div className='navbar-search-wrapper' ref={navbarInfoRef}>
          <SearchBarInput
            onChangeInput={handleInput}
            onSearchClick={handleOpenSearchBar}
          />
          {navBarOpen && <SearchBarInfo input={input} recipe={recipe} />}
        </div>
        <StyledText>#대파#삼겹살#김밥</StyledText>
      </Section>
    </NavBarWrapper>
  );
};

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top :  1.8px solid #fffbf5;
  border-bottom:  1.8px solid #fffbf5;
  background-color:white;
`;

const Section = styled.div`
height:60px;
width: 100%;
max-width: 1200px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px 20px;

  .navbar-search-wrapper{
    width: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
    min-width: 130px;
    font-weight: 600;
    
 @media screen and (max-width: 790px) {
  min-width: 80px;
}
`;

const StyledText = styled.div`
    min-width: 130px;
    display: flex;
    justify-content: end;
    box-sizing: border-box;
    
    color:gray;
    font-size: small;
    font-weight: 300;
// 모바일
 @media screen and (max-width: 790px) {
  min-width: 80px;
}
`;


export default NavBar;

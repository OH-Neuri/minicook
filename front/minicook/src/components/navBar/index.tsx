import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SearchBarInput from "../searchBarInput";
import tab from "./data/data";
import { useNavigate } from "react-router-dom";
import recipe from "../../data/recipe";
import SearchBarInfo from "../searchBarInfo";

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState<boolean>(false);
  const navbarInfoRef = useRef<HTMLDivElement | null>(null);
  const [input, setInput] = useState<string>("");
  const navigate = useNavigate();

  const changePage = (e: React.MouseEvent<HTMLDivElement>) => {
    const page = e.currentTarget.dataset.id;
    navigate(`/${page}`);
  };

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
      ) {
        handleCloseSearchBar();
      }
    };
    document.addEventListener("click", handler);
  }, [navBarOpen]);

  return (
    <NavBarWrapper>
      <div className='navbar-info'>
        <div className='navbar-list'>
          {tab.map(({ title, link }) => (
            <div
              className='navbar-items'
              key={title}
              data-id={link}
              onClick={(e) => changePage(e)}>
              {title}
            </div>
          ))}
        </div>
        <div className='navbar-search-wrapper' ref={navbarInfoRef}>
          <SearchBarInput
            onChangeInput={handleInput}
            onSearchClick={handleOpenSearchBar}
          />
          {navBarOpen && <SearchBarInfo input={input} recipe={recipe} />}
        </div>
        <div className='navbar-text'>
          <>{recipe}</>#대파 #삼겹살 #김밥
        </div>
      </div>
    </NavBarWrapper>
  );
};

const NavBarWrapper = styled.div`
  height:3.3rem;
  width : 100%;
  display: flex;
  justify-content: center;
  border-top :  1.8px solid #fffbf5;
  border-bottom:  1.8px solid #fffbf5;
  background-color:white;
  .navbar-search-wrapper{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position:relative;
  }
  .navbar-info{
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navbar-text{
    font-size: small;
    width: 25%;
    justify-content: end;
    display: flex;
    color:gray;
    font-weight: 300;
  }

  .navbar-list{
    display: flex;
    width: 25%;
  }
  .navbar-items{
    font-weight: 600;
  }
  
  `;

export default NavBar;

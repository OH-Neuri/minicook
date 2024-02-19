import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SearchBar from "../searchBar";
import tab from "./data/data";
import { useNavigate } from "react-router-dom";
import recipe from "../../data/recipe";
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
  const handleInput = (newInput: string) => {
    setInput(newInput);
  };

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
    <>
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
          <div ref={navbarInfoRef}>
            <SearchBar onChangeInput={handleInput} onSearchClick={handleOpenSearchBar} />
            {navBarOpen && (
              <div className='search-bar-info'>
                <div className='search-bar-info-wrapper'>
                  <div className='search-bar-info-recipe'>
                    <div className='mb-1 font-black text-lg'>재료명</div>
                    <div className='search-bar-info-List'>
                      {recipe.map(
                        ({ id, thumbnail, name, ingredients }) =>
                          input &&
                          ingredients.some((i) => new RegExp(input).test(i)) && (
                            <div className='search-bar-info-item'>
                              <div>
                                <div className='font-extrabold text-base'>{`${name}`}</div>
                                <div className='text'>{`재료 : ${ingredients}`}</div>
                              </div>
                            </div>
                          )
                      )}
                    </div>
                  </div>
                  <div className='search-bar-info-menu'>
                    <div className='mb-1 font-black text-lg'>요리명</div>
                    <div className='search-bar-info-List'>
                      {recipe.map(
                        ({ id, thumbnail, name, ingredients }) =>
                          input &&
                          new RegExp(input).test(name) && (
                            <div className='search-bar-info-item'>
                              <div>
                                <div className='font-extrabold text-base'>{`${name}`}</div>
                                <div className='text'>{`재료 : ${ingredients}`}</div>
                              </div>
                            </div>
                          )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className='navbar-text'>#대파 #삼겹살 #김밥</div>
        </div>
      </NavBarWrapper>
    </>
  );
};

const NavBarWrapper = styled.div`
  height:3.3rem;
  width  : 100%;
  display: flex;
  justify-content: center;
  border-top :  1.8px solid #fffbf5;
  border-bottom:  1.8px solid #fffbf5;
  background-color:white;
  position: relative;
  .search-bar-info{
    top:3rem;
    height: 19rem;
    background-color: #ffffff;
    width: 60%;
    position: absolute;
    left: 23rem;
    z-index: 10;
    opacity: 0;
    animation: fadeIn 0.2s ease-out forwards;
    border-bottom: 2px solid #cdc7be;
    display: flex;
    justify-content: center;
    .search-bar-info-wrapper{
      padding: 0.5rem 0;
      width: 60%;
      display: flex;
      justify-content: space-evenly;
      .search-bar-info-recipe{
        padding: 0.5rem 0.5rem;
        overflow-y: scroll;
        overflow-x: hidden; 
    background-color: #f4efeb;
        width: 45%;
        display: flex;
        flex-direction: column;
        align-items: center;
        scroll-behavior: auto;
        .search-bar-info-item{
          margin-bottom: 1rem;
          display: flex;
        }
      }
      .search-bar-info-recipe::-webkit-scrollbar-thumb{
        background: none
      }
      .search-bar-info-menu{
        padding: 0.5rem 0.5rem;
        overflow-y: scroll;
        overflow-x: hidden; 
    background-color: #f4efeb;

        width: 43%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .search-bar-info-item{
          margin-bottom: 1rem;
          display: flex;
        }
      }
      .search-bar-info-menu::-webkit-scrollbar-thumb{
        background: none
      }
    }
  }
   @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px); /* 시작 시 상단에서 -10px 이동 */
    }
    to {
      opacity: 1;
      transform: translateY(0); /* 끝날 때 이동하지 않음 */
    }
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

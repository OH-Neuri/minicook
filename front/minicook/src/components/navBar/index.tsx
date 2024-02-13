import React from "react";
import styled from "styled-components";
import SearchBar from "../searchBar";
import menu from "./data/menu";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();

  const changePage = (e: React.MouseEvent<HTMLDivElement>) => {
    const page = e.currentTarget.dataset.id;
    navigate(`/${page}`);
  };

  return (
    <>
      <NavBarWrapper>
        <div className='navbar__info'>
          <div className='navbar__list'>
            {menu.map(({ title, link }) => (
              <div
                className='navbar__items'
                key={title}
                data-id={link}
                onClick={(e) => changePage(e)}>
                {title}
              </div>
            ))}
          </div>
          <SearchBar />
          <div className='navbar__text'>#대파 #삼겹살 #김밥</div>
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
  border-top :  1px solid rgb(190, 190, 190);
  border-bottom:  1px solid rgb(190, 190, 190);
  background-color: ${(props) => props.theme.mainColor};

  .navbar__info{
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navbar__text{
    font-size: small;
    width: 25%;
    justify-content: end;
    display: flex;
    color:gray;
    font-weight: 300;
  }

  .navbar__list{
    display: flex;
    width: 25%;
  }
  .navbar__items{
    font-weight: 600;
  }
  
  `;

export default NavBar;

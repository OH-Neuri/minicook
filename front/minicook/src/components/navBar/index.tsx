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
        <div className='navbar-info'>
          <div className='navbar-list'>
            {menu.map(({ title, link }) => (
              <div
                className='navbar-items'
                key={title}
                data-id={link}
                onClick={(e) => changePage(e)}>
                {title}
              </div>
            ))}
          </div>
          <SearchBar />
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
  background-color: ${(props) => props.theme.colors.color1};

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

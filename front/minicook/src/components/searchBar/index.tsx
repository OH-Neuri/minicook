import React from "react";
import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <SearchBarWrapper className='cursor-pointer'>
      <div className='search-icon focus:hidden'>
        <IoSearchOutline size={22} />
      </div>
      <div className='search-input-wrapper'>
        <input
          className='search-input'
          placeholder='재료, 요리명 등 다양하게 검색해보세요! (예: 마늘)'></input>
      </div>
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.div`
 height: 2.2rem;
 display: flex;
 width: 22rem;
 background-color:#fcfcfc;
 border : 1px solid #d3bea7;
 border-radius: 25px;
 display: flex;
 align-items: center;
 padding:0 0.8rem;

 .search-input-wrapper{
  display: flex;
  justify-content: center;
  width: 18rem;
 }
 .search-input{
  font-size: smaller;
  background-color:#fcfcfc;
  margin-left:1rem;
  outline: none;
  width: 20rem;
 }
 .search-input::placeholder{
  font-size: small;
  color: #444444
 }

`;
export default SearchBar;

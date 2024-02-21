import React, { useState } from "react";
import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";

interface SearchBarInputProps {
  onSearchClick: () => void;
  onChangeInput: (newInput: string) => void;
}

const SearchBarInput: React.FC<SearchBarInputProps> = ({
  onSearchClick,
  onChangeInput,
}) => {
  const handleSearchBar = (e: React.MouseEvent<HTMLDivElement>) => {
    onSearchClick();
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeInput(e.target.value);
  };

  return (
    <SearchBarWrapper className='cursor-pointer' onClick={handleSearchBar}>
      <div className='search-icon focus:hidden'>
        <IoSearchOutline size={22} />
      </div>
      <div className='search-input-wrapper' onClick={(e) => handleSearchBar(e)}>
        <input
          className='search-input'
          placeholder='재료, 요리명 등 다양하게 검색해보세요! (예: 마늘)'
          onChange={handleInput}></input>
      </div>
      <div className='search-list'></div>
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.div`
 height: 2.4rem;
 display: flex;
 width: 22rem;
 background-color:#fefdfc;
 border-bottom : 2px solid #eee0d0;
 border-radius: 15px;
 display: flex;
 align-items: center;
 padding:0 0.8rem;
 position:relative;

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

.search-list{
  z-index: 10;
  position: absolute;

}
`;

export default SearchBarInput;

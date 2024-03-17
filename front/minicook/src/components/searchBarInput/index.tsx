import React from "react";
import styled from "styled-components";
import { IoSearchOutline } from "@react-icons/all-files/io5/IoSearchOutline";

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
        <div className='flex items-center'>
          <input
            className='search-input'
            placeholder='재료, 요리명 등 다양하게 검색해보세요! (예: 마늘)'
            onChange={handleInput}
          />
        </div>
      </div>
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.div`
 height: 2.7rem;
 display: flex;
 width: 23rem;
 background-color:#fefdfc;
 border: 2px solid #eee0d0;
 border-radius: 20px;
 display: flex;
 align-items: center;
 padding:0 0.9rem;
 position:relative;

 .search-input-wrapper{
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
    .search-input{
      font-size: smaller;
      width: 17rem;
        outline: none;
  }
    .search-input::placeholder{
    font-size: small;
    color: #444444
  }
 }
`;

export default SearchBarInput;

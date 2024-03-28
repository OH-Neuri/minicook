import React, { useCallback } from "react";
import styled from "styled-components";
import { IoSearchOutline } from "@react-icons/all-files/io5/IoSearchOutline";

interface SearchBarFormProps {
  onSearchClick: () => void;
  onChangeInput: (newInput: string) => void;
}

const SearchBarForm: React.FC<SearchBarFormProps> = ({
  onSearchClick,
  onChangeInput,
}) => {
  const handleSearchBar = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    onSearchClick();
  }, []);

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeInput(e.target.value);
  }, []);

  return (
    <SearchBarWrapper className='cursor-pointer' onClick={handleSearchBar}>
      <div className='search-icon focus:hidden'>
        <IoSearchOutline size={20} />
      </div>
      <div className='search-input-wrapper' onClick={(e) => handleSearchBar(e)}>
        <input
          className='search-input'
          placeholder='재료, 요리명 등 다양하게 검색해보세요! (예: 마늘)'
          onChange={handleInput}></input>
      </div>
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.div`
 height: 45px;
 width: 100%;
 max-width: 400px;
 display: flex;
 align-items: center;
 justify-content: center;
 padding:0 10px;

 background-color:#fefdfc;
 border: 2px solid #eee0d0;
 border-radius: 20px;

 @media screen and (max-width: 790px) {
  width: 210px;
}
 @media screen and (max-width: 400px) {
  width: 190px;

}
 .search-icon{
  width: 20px;
 }

 .search-input-wrapper{
  width: 92%;
  display: flex;
  justify-content: center;
  align-items: center;

    .search-input{
      display: flex;
      justify-content: start;
      align-items: center;
      font-size: smaller;
      width: 95%;
      outline: none;
    }

    .search-input::placeholder{
      text-align: center;
      font-size: 14px;
      color: #444444;
      @media screen and (max-width: 790px) {
        font-size: small;
      }
  }
 }
`;

export default React.memo(SearchBarForm);

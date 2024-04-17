import React from "react";
import SearchBarItem from "../searchBarItem";
import styled from "styled-components";
import { RecipeType } from "../../../type";

interface SearchBarListProps {
  title: string;
  recipe: RecipeType[];
}

const SearchBarList: React.FC<SearchBarListProps> = ({ title, recipe }) => {
  return (
    <SearchBarListWrapper>
      <div className='mb-1 font-black text-lg'>{title}</div>
      {recipe.map(({ id, name, ingredients, like }, index) => (
        <SearchBarItem
          id={id}
          key={index}
          like={like}
          name={name}
          ingredients={ingredients}
        />
      ))}
    </SearchBarListWrapper>
  );
};

const SearchBarListWrapper = styled.div`
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px;
  overflow-y: scroll;
  overflow-x: hidden; 
  border-radius: 15px;
  scroll-behavior: auto;
  background-color: #f4efeb;
  
  @media screen and (max-width: 790px) {
    max-width: 400px;
    height: 280px;
  }
  @media screen and (max-width: 450px) {
    max-width: 330px;
    height: 215px;
  }
  &::-webkit-scrollbar-thumb{
      background: none
    }

`;
export default SearchBarList;

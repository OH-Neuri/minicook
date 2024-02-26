import React from "react";
import SearchBarItem from "../searchBarItem";
import Recipe from "../../../data/type/recipe";
import styled from "styled-components";

interface SearchBarListProps {
  input: string;
  title: string;
  recipe: Recipe[];
  children?: React.ReactNode;
}

const SearchBarList: React.FC<SearchBarListProps> = ({
  input,
  title,
  recipe,
  children,
}) => {
  return (
    <SearchBarListWrapper>
      <div className='mb-1 font-black text-lg'>{title}</div>
      {title === "재료명"
        ? recipe.map(
            ({ id, name, ingredients, like }) =>
              input &&
              ingredients.some((ingredient) => new RegExp(input).test(ingredient)) && (
                <SearchBarItem
                  key={id}
                  id={id}
                  like={like}
                  name={name}
                  ingredients={ingredients}
                />
              )
          )
        : recipe.map(
            ({ id, name, ingredients, like }) =>
              input &&
              new RegExp(input).test(name) && (
                <SearchBarItem
                  key={id}
                  id={id}
                  like={like}
                  name={name}
                  ingredients={ingredients}
                />
              )
          )}
    </SearchBarListWrapper>
  );
};
const SearchBarListWrapper = styled.div`
    padding: 0.7rem 0.7rem;
    overflow-y: scroll;
    overflow-x: hidden; 
    background-color: #f4efeb;
    border-radius: 15px;
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    scroll-behavior: auto;
    &::-webkit-scrollbar-thumb{
        background: none
      }

`;
export default SearchBarList;

import React from "react";
import styled from "styled-components";
import SearchBarList from "./searchBarList";
import Recipe from "../../data/type/recipe";

interface SearchBarInfoProps {
  input: string;
  recipe: Recipe[];
}

const SearchBarInfo: React.FC<SearchBarInfoProps> = ({ input, recipe }) => {
  return (
    <SearchBarInfoWrapper>
      <SearchBarList title='재료명' input={input} recipe={recipe} />
      <SearchBarList title='요리명' input={input} recipe={recipe} />
    </SearchBarInfoWrapper>
  );
};

const SearchBarInfoWrapper = styled.div`
    background-color: #ffffff;
    height: 40vh;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    top:2.5rem;
    left: 0rem;
    z-index: 10;
    opacity: 0;
    animation: fadeIn 0.2s ease-out forwards;
    border-bottom: 2px solid #cdc7be;
    display: flex;
    justify-content: space-evenly;
    padding: 0.5rem 0;
    position:absolute;

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
  `;

export default SearchBarInfo;

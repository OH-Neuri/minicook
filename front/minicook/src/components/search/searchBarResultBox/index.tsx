import React from "react";
import styled from "styled-components";
import SearchBarList from "../searchBarResultList";
import { RecipeType } from "../../../type";


interface SearchBarInfoProps {
  input: string;
  recipe: RecipeType[];
}

const SearchBarResultBox: React.FC<SearchBarInfoProps> = ({ input, recipe }) => {
  return (
    <SearchBarInfoWrapper>
      <SearchBarList title='재료명' input={input} recipe={recipe} />
      <SearchBarList title='요리명' input={input} recipe={recipe} />
    </SearchBarInfoWrapper>
  );
};

const SearchBarInfoWrapper = styled.div`
    height: 330px;
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 0;
    display: flex;
    justify-content: space-evenly;

    position:absolute;
    top:50px;
    z-index: 10;
    
    background-color: #ffffff;
    animation: fadeIn 0.2s ease-out forwards;
    border-bottom: 2px solid #cdc7be;

    @media screen and (max-width: 790px) {
      flex-wrap: wrap;
      max-width: 450px;
      height: 600px;
    }
    @media screen and (max-width: 450px) {
      max-width: 450px;
      height: 480px;
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
  `;

export default SearchBarResultBox;

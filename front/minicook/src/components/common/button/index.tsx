import React from "react";
import styled from "styled-components";
import Recipe from "../../../data/type/recipe";
import { GoPlus } from "react-icons/go";
export const button = ({}) => {
  return <div>Button</div>;
};

interface RecipeLikeButtonProps {
  recipe: Recipe;
}

export const RecipeLikeButton: React.FC<RecipeLikeButtonProps> = ({ recipe }) => {
  return (
    <RecipeLikeButtonBlock>
      <div className='button-text'>
        <GoPlus fill='white' size={25} />
        저장하기
      </div>
    </RecipeLikeButtonBlock>
  );
};
const RecipeLikeButtonBlock = styled.div`
  width: 20rem;
  height: 3.4rem;
  background-color: #476500;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    filter: brightness(80%);
  }
  .button-text{
    display: flex;
    font-weight: 500;
    font-size: medium;
    align-items: center;
    color:white;

  }
`;

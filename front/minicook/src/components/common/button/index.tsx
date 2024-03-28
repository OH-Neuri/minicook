import React from "react";
import styled from "styled-components";
import Recipe from "../../../data/type/recipe";
import { GoPlus } from "@react-icons/all-files/go/GoPlus";
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
  width: 320px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.green1};
  
  &:hover{
    filter: brightness(80%);
  
  }
  .button-text{
    display: flex;
    align-items: center;
    
    font-weight: 500;
    font-size: medium;
    color:white;

  }
`;

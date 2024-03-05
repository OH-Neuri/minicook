import React from "react";
import styled from "styled-components";

interface RecipeIngredientsProps {
  ingredients: string[];
}

const RecipeIngredients: React.FC<RecipeIngredientsProps> = ({ ingredients }) => {
  return (
    <RecipeIngredientsBlock>
      <div className='header'>레시피 재료</div>
      <div className='content'>
        - 필수 재료
        <div className='content-ingredients'>
          {ingredients.map((ingredient) => (
            <div className='font-medium text-gray-500'>{`${ingredient}, `}&nbsp;</div>
          ))}
        </div>
      </div>
    </RecipeIngredientsBlock>
  );
};
const RecipeIngredientsBlock = styled.div`
width: 100%;
height: 45%;
margin-top: 2rem;
padding: 0.5rem 0.8rem;

.header{
    font-size: x-large;
    font-weight: 700;
}
.content{
    margin-top: 1rem;
    font-weight: 600;
    font-size: large;
    color:#d12600;

    .content-ingredients{
        display: flex;
        flex-wrap: wrap;
        margin-top: 0.5rem;
    }
}
`;
export default RecipeIngredients;

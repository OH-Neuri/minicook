import React from "react";
import styled from "styled-components";

interface RecipeIngredientsProps {
  ingredients: string[];
}
/**
 * RecipeIngredients 컴포넌트
 *
 * props로 받은 레시피의 재료를 보여주는 프레젠테이션 컴포넌트입니다.
 * @prop {string[]} ingredients - 화면에 보여줄 레시피
 *
 */
const RecipeIngredients: React.FC<RecipeIngredientsProps> = ({ ingredients }) => {
  return (
    <RecipeIngredientsBlock>
      <div className='header'>레시피 재료</div>
      <div className='content'>
        - 필수 재료
        <div className='content-ingredients'>
          {ingredients.map((ingredient, i) => (
            <div key={i} className='font-medium text-gray-500'>
              {`${ingredient}, `}&nbsp;
            </div>
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
    width: 200px;
    font-size: x-large;
    font-weight: 700;
}
.content{
    width: 300px;
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

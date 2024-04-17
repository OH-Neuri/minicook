import React from "react";
import styled from "styled-components";
import ReacipeCard from "../recipeCard";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { RecipeType } from "../../../type";

interface RecipeSelectViewProps {
  recipe: RecipeType[];
}
/**
 * RecomendRecipeView 컴포넌트
 *
 * props로 받은 레시피들을 보여주는 프레젠테이션 컴포넌트 입니다.
 * @prop {string[]} filteredIngredients - 화면에 보여줄 레시피 배열
 */
const RecipeViewBox: React.FC<RecipeSelectViewProps> = ({ recipe }) => {
  const modify = useSelector((state: RootState) => state.userLiked.isModify);

  return (
    <RecipeViewBoxWrapper>
      {recipe.map((recipe) => (
        <ReacipeCard key={recipe.id} recipe={recipe} detail={false} modify={modify} />
      ))}
    </RecipeViewBoxWrapper>
  );
};

const RecipeViewBoxWrapper = styled.div`
width: 100%;
max-width: 1080px;
height: 100%;
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 20px;
overflow-y: scroll;
padding: 0 10px;
    @media screen and (max-width: 790px) {
    max-width: 600px;
    height: 100%;
    }
`;
export default React.memo(RecipeViewBox);

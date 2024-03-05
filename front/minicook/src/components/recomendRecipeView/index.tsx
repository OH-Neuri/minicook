import React, { useEffect, useState } from "react";
import styled from "styled-components";
import recipe from "../../data/recipe";
import Recipe from "../../data/type/recipe";
import ReacipeCard from "../common/card";
interface RecipeSelectViewProps {
  selectedIngredients: string[];
}
/**
 * RecomendRecipeView 컴포넌트
 *
 * 레시피 선택 페이지에서 사용자가 선택한 재료들이 들어간 레시피를 보여주는 컴포넌트 입니다.
 * 선택된 재료들이 담긴 배열을 props로 받으면 해당 재료가 들어간 레시피를 보여줍니다.
 * @prop {string[]} selectedIngredients - 사용자가 선택한 재료 배열
 */
const RecomendRecipeView: React.FC<RecipeSelectViewProps> = ({ selectedIngredients }) => {
  const [recommendedRecipes, setRecommendedRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    // 선택한 재료 배열들로 레시피 필터링 하기
    if (selectedIngredients) {
      const fliteredRecipes = recipe.filter((r) =>
        selectedIngredients.some((i) => r.ingredients.includes(i))
      );
      setRecommendedRecipes(fliteredRecipes);
    }
  }, [selectedIngredients]);

  return (
    <RecomendRecipeViewWrapper>
      {recommendedRecipes.map((recipe) => (
        <ReacipeCard key={recipe.id} recipe={recipe} detail={false} />
      ))}
    </RecomendRecipeViewWrapper>
  );
};

const RecomendRecipeViewWrapper = styled.div`
width: 100%;
height: 100%;
flex-wrap: wrap;
display: flex;
gap: 1.2rem;
overflow-y: scroll;
padding: 0 0.5rem;
    
`;
export default RecomendRecipeView;

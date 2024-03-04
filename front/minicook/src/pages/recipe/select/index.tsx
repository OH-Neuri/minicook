import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { produce } from "immer";
import ingredientsMenu, {
  SelectedIngredients,
  IngredientsMenuType,
} from "./data/ingredients";
import CategorySelectHeader from "../../../components/categorySelectHeader";
import RecomendRecipeView from "../../../components/recomendRecipeView";
import IngredientsMiddleTag from "../../../components/ingredientsMiddleTag/inex";

/**
 * RecipeSelect 컴포넌트
 *
 * 레시피 선택 페이지에서 레시피 선택의 전체 영역을 차지하고 있는 컴포넌트
 */
const RecipeSelect = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<SelectedIngredients[]>(
    []
  );
  const [IngredientInfo, setIngredientInfo] =
    useState<IngredientsMenuType[]>(ingredientsMenu);

  /**
   * 재료 정보 배열의 재료 클릭 상태 업데이트 하는 함수
   * {name:"대파", checked : (false <-> true)}
   *
   * @param {number} categoryID - 카테고리 번호
   * @param {string} ingredientName - 재료명
   */
  const handleIngredientToggle = useCallback(
    (categoryId: number, ingredientName: string) => {
      setIngredientInfo(
        produce((draft) => {
          if (categoryId !== -1) {
            const ingredientIndex = draft[categoryId].ingredients.findIndex(
              (ingredient) => ingredient.name === ingredientName
            );

            if (ingredientIndex !== -1) {
              draft[categoryId].ingredients[ingredientIndex].checked =
                !draft[categoryId].ingredients[ingredientIndex].checked;
            }
          }
        })
      );
    },
    [IngredientInfo]
  );

  /**
   * 사용자가 선택한 재료 배열 업데이트 함수
   *
   * @param {string} ingredientName - 재료명
   */
  const handleSelectedIngredient = useCallback(
    (ingredientName: string, categoryNumber: number) => {
      setSelectedIngredients((prev) =>
        produce(prev, (draft) => {
          const index = draft.findIndex((item) => item.name === ingredientName);
          if (index == -1) {
            draft.push({ name: ingredientName, category: categoryNumber });
          } else {
            draft.splice(index, 1);
          }
        })
      );
    },
    [selectedIngredients]
  );

  return (
    <RecipeSelectWrapper>
      <CategorySelectHeader
        ingredientInfo={IngredientInfo}
        onToggle={handleIngredientToggle}
        onSelect={handleSelectedIngredient}
      />
      <IngredientsMiddleTag
        selectedIngredients={selectedIngredients}
        onToggle={handleIngredientToggle}
        onSelect={handleSelectedIngredient}
      />
      {<RecomendRecipeView selectedIngredients={selectedIngredients} />}
    </RecipeSelectWrapper>
  );
};

const RecipeSelectWrapper = styled.div`
background-color: #F4F1EB;
display: flex;
flex-direction: column;
gap:1rem;
width:100%;
height: 85vh;
padding: 3.5rem 30% 6rem 30%;
`;

export default RecipeSelect;

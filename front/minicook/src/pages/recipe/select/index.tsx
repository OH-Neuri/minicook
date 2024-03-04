import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { produce } from "immer";
import ingredientsMenu, { IngredientsMenuType } from "./data/ingredients";
import CategorySelectHeader from "../../../components/categorySelectHeader";
import RecomendRecipeView from "../../../components/recomendRecipeView";
import IngredientsMiddleTag from "../../../components/ingredientsMiddleTag/inex";

/**
 * RecipeSelect 컴포넌트
 *
 * 레시피 선택 페이지에서 레시피 선택의 전체 영역을 차지하고 있는 컴포넌트
 */
const RecipeSelect = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [IngredientInfo, setIngredientInfo] =
    useState<IngredientsMenuType[]>(ingredientsMenu);

  /**
   * 재료 정보 배열의 재료 클릭 상태 업데이트 하는 함수
   * {name:"대파", checked : (false <-> true)}
   *
   * @param {string} ingredientName - 재료명
   */
  const handleIngredientToggle = useCallback(
    (ingredientName: string) => {
      setIngredientInfo(
        produce((draft) => {
          // 해당 재료의 category 인덱스 저장
          const categoryIndex = draft.findIndex((category) =>
            category.ingredients.some((ingredient) => ingredient.name === ingredientName)
          );

          if (categoryIndex !== -1) {
            // 해당 재료의 ingredients 인덱스 저장
            const ingredientIndex = draft[categoryIndex].ingredients.findIndex(
              (ingredient) => ingredient.name === ingredientName
            );

            if (ingredientIndex !== -1) {
              draft[categoryIndex].ingredients[ingredientIndex].checked =
                !draft[categoryIndex].ingredients[ingredientIndex].checked;
            }
          }
        })
      );
    },
    [IngredientInfo]
  );
  useEffect(() => {
    /**
     * 재료 상태 배열에서 클릭한 배열만 추출하는 함수
     *
     * @param {IngredientsMenuType[]} allIngredientsMenu - 재료명
     */
    const getAllCheckedIngredients = (
      allIngredientsMenu: IngredientsMenuType[]
    ): string[] => {
      return allIngredientsMenu.flatMap((category) =>
        category.ingredients
          .filter((ingredient) => ingredient.checked)
          .map((ingredient) => ingredient.name)
      );
    };
    setSelectedIngredients(getAllCheckedIngredients(IngredientInfo));
  }, [IngredientInfo]);

  return (
    <RecipeSelectWrapper>
      <CategorySelectHeader
        ingredientInfo={IngredientInfo}
        onToggle={handleIngredientToggle}
      />
      <IngredientsMiddleTag
        selectedIngredients={selectedIngredients}
        onToggle={handleIngredientToggle}
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

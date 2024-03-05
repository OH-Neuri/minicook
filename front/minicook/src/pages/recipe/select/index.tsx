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

  /**
   * 재료 상태 배열에서 클릭한 배열만 추출하는 함수
   *  true, 배열에 없는 경우 => 배열에 추가
   *  false, 배열에 있는 경우 => 배열에서 삭제
   * @param {IngredientsMenuType[]} allIngredientsMenu - 재료명
   */
  const handleSelectedIngredients = useCallback(
    (allIngredientsMenu: IngredientsMenuType[]) => {
      setSelectedIngredients(
        produce((draft) => {
          allIngredientsMenu.forEach((category, categoryIndex) => {
            category.ingredients.forEach((ingredient, ingredientIndex) => {
              // 재료를 선택했을 경우
              if (ingredient.checked && !selectedIngredients.includes(ingredient.name)) {
                draft.push(ingredient.name);
              } else if (
                !ingredient.checked &&
                selectedIngredients.includes(ingredient.name)
              ) {
                draft.splice(
                  draft.findIndex((name) => name === ingredient.name),
                  1
                );
              }
            });
          });
        })
      );
    },
    [selectedIngredients]
  );
  useEffect(() => {
    handleSelectedIngredients(IngredientInfo);
  }, [IngredientInfo]);

  return (
    <RecipeSelectWrapper>
      <div className='select-header'>
        <CategorySelectHeader
          ingredientInfo={IngredientInfo}
          onToggle={handleIngredientToggle}
        />
        <IngredientsMiddleTag
          selectedIngredients={selectedIngredients}
          onToggle={handleIngredientToggle}
        />
      </div>
      <div className='select-view'>
        {<RecomendRecipeView selectedIngredients={selectedIngredients} />}
      </div>
    </RecipeSelectWrapper>
  );
};

const RecipeSelectWrapper = styled.div`
background-color: #F4F1EB;
display: flex;
flex-direction: column;
gap:1rem;
width:100%;
height: 90vh;
padding: 3.5rem 23% 6rem 23%;
.select-header{
  width: 100%;
  height: 22%;
  padding: 0 13%;
}
  .select-view{
  width: 100%;
  height: 78%;
}
`;

export default RecipeSelect;

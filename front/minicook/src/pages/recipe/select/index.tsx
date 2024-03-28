import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { produce } from "immer";
import ingredientsMenu, { IngredientsMenuType } from "./data/ingredients";

import RecipeViewBox from "../../../components/recipe/recipeViewBox";
import Recipe from "../../../data/type/recipe";
import recipe from "../../../data/recipe";
import IngredientsMiddleBadge from "../../../components/recipeSelct/ingredientsMiddleBadge/inex";
import CategoryContainer from "../../../containers/recipeSelect/categoryContainer";

/**
 * RecipeSelect 컴포넌트
 *
 * 레시피 선택 페이지에서 레시피 선택의 전체 영역을 차지하고 있는 컴포넌트
 */
const RecipeSelect = () => {
  const [IngredientInfo, setIngredientInfo] =
    useState<IngredientsMenuType[]>(ingredientsMenu);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [recommendedRecipes, setRecommendedRecipes] = useState<Recipe[]>([]);

  /**
   * 재료 정보 배열의 재료 클릭 상태 업데이트 하는 함수(button)
   * IngredientInfo = ... {name:"대파", checked : (false <-> true)}
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
   * 재료 상태 배열에서 클릭한 재료만 추출하는 함수(badge)
   *
   * selectedIngredients = {"대파", "양파", "물"}
   * @param {IngredientsMenuType[]} allIngredientsMenu - 재료명배열
   */
  const handleSelectedIngredients = useCallback(
    (allIngredientsMenu: IngredientsMenuType[]) => {
      setSelectedIngredients(
        produce((draft) => {
          allIngredientsMenu.forEach((category, categoryIndex) => {
            category.ingredients.forEach((ingredient, ingredientIndex) => {
              // 재료를 선택했는데 배열에 없는 경우, 배열에 추가
              if (ingredient.checked && !selectedIngredients.includes(ingredient.name)) {
                draft.push(ingredient.name);
              } else if (
                // 재료를 체크하지 않았는데 배열에 있는 경우, 배열에서 삭제
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

  // 클릭한 재료들이 들어간 레시피 필터링하는 함수
  // api 호출해서 필터링한 레시피 받아오기 => 임시로 recipe 데이터로 필터링 중

  const handlefilterRecipes = useCallback(
    (selectedIngredientsArray: string[]) => {
      if (selectedIngredientsArray) {
        const fliteredRecipes = recipe.filter((r) =>
          selectedIngredientsArray.some((i) => r.ingredients.includes(i))
        );
        setRecommendedRecipes(fliteredRecipes);
      }
    },
    [selectedIngredients]
  );

  // 재료가 클릭될 때마다 선택된 재료 배열 갱신
  useEffect(() => {
    handleSelectedIngredients(IngredientInfo);
  }, [IngredientInfo]);

  // 재료 배열 갱신될 때마다 레시피 필터링 다시하기
  useEffect(() => {
    handlefilterRecipes(selectedIngredients);
  }, [selectedIngredients]);

  // 페이지 이동 시 최상단으로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <RecipeSelectWrapper>
      <CategoryContainer
        ingredientInfo={IngredientInfo}
        onToggle={handleIngredientToggle}
      />
      <IngredientsMiddleBadge
        selectedIngredients={selectedIngredients}
        onToggle={handleIngredientToggle}
      />
      <div className='select-view'>
        {<RecipeViewBox filteredIngredients={recommendedRecipes} />}
      </div>
    </RecipeSelectWrapper>
  );
};

const RecipeSelectWrapper = styled.div`
width:100%;
height: 900px;
display: flex;
flex-direction: column;
align-items: center;
background-color: #F4F1EB;
padding: 30px 0px;
  .select-view{
  height: 65%;
  margin-top: 10px;
}

`;

export default RecipeSelect;

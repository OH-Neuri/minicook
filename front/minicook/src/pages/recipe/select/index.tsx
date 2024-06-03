import React, { Suspense, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { produce } from "immer";
import ingredientsMenu, { IngredientsMenuType } from "./data/ingredients";

import RecipeViewBox from "../../../components/recipe/recipeViewBox";
import IngredientsMiddleBadge from "../../../components/recipeSelct/ingredientsMiddleBadge/inex";
import CategoryContainer from "../../../containers/recipeSelect/categoryContainer";
import { RecipeType } from "../../../type";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { getRecipes } from "../../../store/reducers/recipe";
import Loading from "../../../components/common/loading";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../../../components/common/errorFallback";

const RecipeSelect = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [IngredientInfo, setIngredientInfo] =
    useState<IngredientsMenuType[]>(ingredientsMenu);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [recommendedRecipes, setRecommendedRecipes] = useState<RecipeType[]>([]);
  const recipes = useSelector((state: RootState) => state.recipe.recipe);
  const recipesLoading = useSelector((state: RootState) => state.recipe.recipeGetLoading);
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
    (selectedIngredientsArray: string[] | undefined) => {
      if (!selectedIngredientsArray) {
        return []; // 선택된 재료가 없는 경우 빈 배열 반환
      }
      if (selectedIngredientsArray) {
        const selectedIngredientsPatterns = selectedIngredients.map(
          (ingredient) => new RegExp(ingredient, "i")
        );
        return recipes.filter((recipe) => {
          return recipe.ingredients.some((ingredient) => {
            // 선택된 재료들 중 하나라도 레시피의 재료와 일치하는지 확인
            return selectedIngredientsPatterns.some((pattern) =>
              pattern.test(ingredient)
            );
          });
        });
      }
      return [];
    },
    [selectedIngredients]
  );

  // 재료가 클릭될 때마다 선택된 재료 배열 갱신
  useEffect(() => {
    handleSelectedIngredients(IngredientInfo);
  }, [IngredientInfo]);

  // 재료 배열 갱신될 때마다 레시피 필터링 다시하기
  useEffect(() => {
    setRecommendedRecipes(handlefilterRecipes(selectedIngredients));
  }, [selectedIngredients]);

  // 페이지 이동 시 최상단으로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
    if (recipes.length === 0) dispatch(getRecipes());
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
        <ErrorBoundary FallbackComponent={ErrorFallback}></ErrorBoundary>
        {recipesLoading ? <Loading /> : <RecipeViewBox recipe={recommendedRecipes} />}
      </div>
    </RecipeSelectWrapper>
  );
};

const RecipeSelectWrapper = styled.div`
width:100%;
height: 78%;
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

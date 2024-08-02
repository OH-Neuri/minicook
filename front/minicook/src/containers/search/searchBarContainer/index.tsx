import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { RecipeType } from "../../../type";
import SearchBarList from "../../../components/search/searchBarList";
import { collection, getDocs, query } from "firebase/firestore";
import { fireStore } from "../../../firebase/firebaseClient";

interface ISearchBarInfoProps {
  input: string;
}

const SearchBarContainer: React.FC<ISearchBarInfoProps> = ({ input }) => {
  const [searchRecipes, setSearchRecipes] = useState<{
    filteredByIngredients: RecipeType[];
    filteredByName: RecipeType[];
  }>({
    filteredByIngredients: [],
    filteredByName: [],
  });

  // 파베 recipe 조회
  const getRecipe = async () => {
    const docRef = collection(fireStore, "recipe");
    const querySnapshot = await getDocs(docRef);

    const filteredByIngredients: any = await querySnapshot.docs
      .map((doc) => {
        const recipeData = doc.data();
        const ingredients = recipeData.ingredients;
        if (ingredients) {
          const hasMatchingIngredient = ingredients.some((ingredient: string) =>
            new RegExp(input).test(ingredient)
          );
          if (hasMatchingIngredient) {
            // 문서의 ID를 포함시키기 위해 doc.id를 데이터에 추가합니다.
            return { ...recipeData, id: doc.id as string };
          }
        }
      })
      .filter((data: any): data is RecipeType & { id: string } => data);

    const filteredByName = await querySnapshot.docs
      .map((doc: any) => {
        const recipeData = doc.data();
        const name = doc.data().name;
        if (name && new RegExp(input).test(name))
          return { ...recipeData, id: doc.id as string };
      })
      .filter((data: any): data is RecipeType & { id: string } => data);

    setSearchRecipes({ filteredByIngredients, filteredByName });
  };

  useEffect(() => {
    if (input) getRecipe();
  }, [input]);

  return (
    <SearchBarContainerWrapper>
      <SearchBarList title='재료명' recipe={searchRecipes.filteredByIngredients} />
      <SearchBarList title='요리명' recipe={searchRecipes.filteredByName} />
    </SearchBarContainerWrapper>
  );
};

const SearchBarContainerWrapper = styled.div`
    height: 330px;
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 0;
    display: flex;
    justify-content: space-evenly;

    position:absolute;
    top:50px;
    z-index: 10;
    
    background-color: #ffffff;
    animation: fadeIn 0.2s ease-out forwards;
    border-bottom: 2px solid #cdc7be;

    @media screen and (max-width: 790px) {
      flex-wrap: wrap;
      max-width: 450px;
      height: 600px;
    }
    @media screen and (max-width: 450px) {
      max-width: 450px;
      height: 480px;
    }

    @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px); /* 시작 시 상단에서 -10px 이동 */
    }
    to {
      opacity: 1;
      transform: translateY(0); /* 끝날 때 이동하지 않음 */
    }
  }
  `;

export default SearchBarContainer;

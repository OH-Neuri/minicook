import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { RecipeType } from "../../../type";
import SearchBarList from "../../../components/search/searchBarList";
import { collection, getDocs, query } from "firebase/firestore";
import { fireStore } from "../../../firebase/firebaseClient";

interface SearchBarInfoProps {
  input: string;
}

const filterRecipes = (querySnapshot: any, input: string) => {
  const filteredByIngredients = querySnapshot.docs
    .map((doc: any) => {
      const ingredients = doc.data().ingredients;
      if (ingredients) {
        const hasMatchingIngredient = ingredients.some((ingredient: string) =>
          new RegExp(input).test(ingredient)
        );
        if (hasMatchingIngredient) return doc.data() as RecipeType;
      }
    })
    .filter((data: any): data is RecipeType => !!data);

  const filteredByName = querySnapshot.docs
    .map((doc: any) => {
      const name = doc.data().name;
      if (name && new RegExp(input).test(name)) return doc.data() as RecipeType;
    })
    .filter((data: any): data is RecipeType => !!data);

  return { filteredByIngredients, filteredByName };
};

const SearchBarContainer: React.FC<SearchBarInfoProps> = ({ input }) => {
  const [searchRecipes, setSearchRecipes] = useState<{
    filteredByIngredients: RecipeType[];
    filteredByName: RecipeType[];
  }>({
    filteredByIngredients: [],
    filteredByName: [],
  });

  // 파베 recipe 조회
  const getRecipe = useCallback(async () => {
    const docRef = collection(fireStore, "recipe");
    const q = query(docRef);
    const querySnapshot = await getDocs(q);

    const { filteredByIngredients, filteredByName } = filterRecipes(querySnapshot, input);
    setSearchRecipes({ filteredByIngredients, filteredByName });
  }, [input]);

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

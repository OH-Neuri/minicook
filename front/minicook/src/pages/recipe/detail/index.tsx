import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import RecipeDetail from "../../../components/recipe/recipeDetail";
import RecipeCard from "../../../components/recipe/recipeCard";

import { RecipeLikeButton } from "../../../components/common/button";
import RecipeIngredients from "../../../components/recipe/recipeIngredients";
import { RecipeType } from "../../../type";
import { fireStore } from "../../../firebase/firebaseClient";
import { doc, getDoc } from "firebase/firestore";

const RecipeDetailPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  const [detailRecipe, setDetailRecipe] = useState<RecipeType>({
    id: "",
    name: "",
    like: 0,
    ingredients: [],
    thumbnail: "",
    image: [],
    content: [],
  });

  const handlePage = (pageIndex: number) => {
    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams);
      newSearchParams.set("page", pageIndex.toString());
      return newSearchParams;
    });
  };

  const getRecipe = useCallback(async (id: string) => {
    const recipeDoc = doc(fireStore, "recipe", id);
    const docSnap = await getDoc(recipeDoc);
    if (docSnap.exists()) {
      const data = docSnap.data() as RecipeType;
      setDetailRecipe(data);
    }
  }, []);

  useEffect(() => {
    var width = window.innerWidth;
    if (width > 860) window.scrollTo(0, 0);
  }, [searchParams]);

  useEffect(() => {
    const recipeId: string | null = searchParams.get("id");
    if (recipeId) getRecipe(recipeId);
  }, []);

  return (
    <RecipeDetailPageWrapper>
      <div className='detail-info'>
        <RecipeCard recipe={detailRecipe} detail={true} />
        <RecipeLikeButton recipe={detailRecipe} />
        <RecipeIngredients ingredients={detailRecipe.ingredients} />
      </div>
      <RecipeDetail recipe={detailRecipe} page={page} onChangePage={handlePage} />
    </RecipeDetailPageWrapper>
  );
};

const RecipeDetailPageWrapper = styled.div`
  width: 100%;
  height: 70%;

  padding: 60px 20px 40px 20px;
  background-color: #F4F1EB;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .detail-info{
    flex-direction: column;
    justify-content: center;
  }
 @media screen and (max-width: 860px) {
  height:1200px;
  flex-wrap: wrap;
  }
`;

export default RecipeDetailPage;

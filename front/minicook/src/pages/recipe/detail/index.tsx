import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import RecipeDetail from "../../../components/recipe/recipeDetail";
import RecipeCard from "../../../components/recipe/recipeCard";
import Recipe from "../../../data/type/recipe";
import recipe from "../../../data/recipe";
import { RecipeLikeButton } from "../../../components/common/button";
import RecipeIngredients from "../../../components/recipe/recipeIngredients";

const RecipeDetailPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const recipeId = Number(searchParams.get("id"));
  const page = searchParams.get("page");

  const [currentRecipe, setcurrentRecipe] = useState<Recipe>({
    id: 0,
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

  useEffect(() => {
    setcurrentRecipe(recipe[recipeId]);
    window.scrollTo(0, 0);
  }, [searchParams]);

  return (
    <RecipeDetailPageWrapper>
      <div className='detail-info'>
        <RecipeCard recipe={currentRecipe} detail={true} />
        <RecipeLikeButton recipe={currentRecipe} />
        <RecipeIngredients ingredients={currentRecipe.ingredients} />
      </div>
      <RecipeDetail recipe={currentRecipe} page={page} onChangePage={handlePage} />
    </RecipeDetailPageWrapper>
  );
};
const RecipeDetailPageWrapper = styled.div`
  width: 100%;
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
  flex-wrap: wrap;
  }
`;

export default RecipeDetailPage;

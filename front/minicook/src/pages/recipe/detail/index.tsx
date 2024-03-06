import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import RecipeDetail from "../../../components/recipeDetail";
import RecipeCard from "../../../components/common/card";
import Recipe from "../../../data/type/recipe";
import recipe from "../../../data/recipe";
import { RecipeLikeButton } from "../../../components/common/button";
import RecipeIngredients from "../../../components/recipeIngredients";

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
  }, [searchParams]);

  return (
    <RecipeDetailPageBlock>
      <div className='detail-info'>
        <RecipeCard recipe={currentRecipe} detail={true} />
        <RecipeLikeButton recipe={currentRecipe} />
        <RecipeIngredients ingredients={currentRecipe.ingredients} />
      </div>
      <RecipeDetail recipe={currentRecipe} page={page} onChangePage={handlePage} />
    </RecipeDetailPageBlock>
  );
};
const RecipeDetailPageBlock = styled.div`
width: 100%;
height: 90vh;
padding: 3.5rem 20% 6rem 20%;
background-color: #F4F1EB;
display: flex;
justify-content: space-between;
.detail-info{
  width: 28%;
}
`;

export default RecipeDetailPage;

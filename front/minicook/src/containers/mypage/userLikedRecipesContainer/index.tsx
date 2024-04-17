import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import RecipeViewBox from "../../../components/recipe/recipeViewBox";
import { RecipeType } from "../../../type";
import { AppDispatch, RootState } from "../../../store/store";
import {
  getLikedRecipesDate,
  removeLikedRecipes,
  setModify,
  setRecipeId,
  setRemoveRecipeId,
  setTab,
} from "../../../store/reducers/userLiked";
import LikedSortTab from "../../../components/mypage/likeSortTab";
import LikedModifyButton from "../../../components/mypage/likedModifyButton";
import { getRecipes } from "../../../store/reducers/recipe";

const UserLikedRecipesContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const recipe = useSelector((state: RootState) => state.recipe.recipe);
  const useLikedRecipes = useSelector((state: RootState) => state.userLiked.recipeId);
  const removeRecipeId = useSelector(
    (state: RootState) => state.userLiked.removeRecipeId
  );
  const [likeRecipes, setLikeRecipes] = useState<RecipeType[]>([]);

  // 정렬 버튼
  const handleSortTab = useCallback((tabNumber: number) => {
    dispatch(getLikedRecipesDate(tabNumber));
  }, []);
  // 삭제 버튼
  const handleDeleteButton = (removeIndex: string[]) => {
    console.log(removeRecipeId);
    dispatch(setRemoveRecipeId(removeRecipeId));
    dispatch(removeLikedRecipes(removeIndex)); // 사용자 정보 변경
  };
  // 정렬 탭 버튼
  const handleTab = useCallback((tabNumber: number) => {
    dispatch(setTab(tabNumber));
  }, []);
  // 수정 버튼
  const handleModifyButton = useCallback(() => {
    dispatch(setModify());
  }, []);

  // 사용자가 좋아요한 레시피 필터링
  const handleFilterdRecipe = useCallback(
    (likedRecipesIndexArray: string[]) => {
      const filteredRecipes = recipe.filter((r) =>
        likedRecipesIndexArray.some((i) => r.id === i)
      );
      setLikeRecipes(filteredRecipes);
    },
    [useLikedRecipes]
  );

  // 사용자 좋아요 리스트 요청
  useEffect(() => {
    if (recipe.length === 0) dispatch(getRecipes());
    dispatch(
      setRecipeId([
        "IzB9VyhPGeoMO4H7L91Z",
        "ZRHQ1CxKArlURNfrCie7",
        "5ufley8G6p6HRVNQZo2X",
        "15liuNctct8VqfF1sjhe",
        "4X1t45Or44QzyyiYJyuv",
        "F8UQyOtXca4hQo8fbfU8",
        "IzB9VyhPGeoMO4H7L91Z",
        "i3s2k3hrMmKspklmlIVS",
      ])
    );
    handleFilterdRecipe(useLikedRecipes);
  }, []);

  // 사용자 좋아요 리스트 수정
  useEffect(() => {
    handleFilterdRecipe(useLikedRecipes);
  }, [useLikedRecipes]);

  return (
    <UserLikedRecipesWrapper>
      <div className='navigation-text'>좋아요한 레시피</div>
      <div className='navigation-item'>
        <LikedSortTab onSwitch={handleTab} onSort={handleSortTab} />
        <LikedModifyButton onModify={handleModifyButton} onRemove={handleDeleteButton} />
      </div>
      <div className='view-wrapper'>
        <RecipeViewBox recipe={likeRecipes} />
      </div>
    </UserLikedRecipesWrapper>
  );
};

const UserLikedRecipesWrapper = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 625px) {
        margin-top: 25px;
    }

  .navigation-text{
    font-size: x-large;
    font-weight: 600;
    width: 100%;
    margin-top: 20px;
    max-width: 1000px;
    padding: 0 20px;
  }

  .navigation-item{
    justify-content: space-between;
    display: flex;
    width: 100%;
    max-width: 1000px;
    padding: 0 20px;
}

.view-wrapper{
    max-width: 1050px;
    padding-top: 20px;
    height: 85%;
    width: 100%;
    position: relative;
}
`;

export default UserLikedRecipesContainer;

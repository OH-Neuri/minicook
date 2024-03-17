import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import RecipeViewBox from "../../components/recipe/recipeViewBox";
import RecipeType from "../../type/recipe";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import recipe from "../../data/recipe";
import LikedSortTab from "../../components/mypage/LikedSortTab";
import LikedModifyButton from "../../components/mypage/LikedModifyButton";
import {
  getLikedRecipesDate,
  removeLikedRecipes,
  setModify,
  setTab,
} from "../../store/reducers/userLiked";
import Recipe from "../../data/type/recipe";

const UserLikedRecipesContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  //const recipes: RecipeType[] = useSelector((state: RootState) => state.userLiked.recipe);
  const user = useSelector((state: RootState) => state.user);
  //const modify = useSelector((state: RootState) => state.userLiked.modify);

  // api 연동하기 전에 임시로 상태 만들어서 테스트
  const [tempRecipes, setTempRecipes] = useState<Recipe[]>([]);
  //const [tab, setTab] = useState<number>(0);
  //const [modify, setModify] = useState<boolean>(false);

  // 정렬 버튼
  const handleSortTab = useCallback((tabNumber: number) => {
    dispatch(getLikedRecipesDate(tabNumber));
  }, []);
  // 삭제 버튼
  const handleDeleteButton = useCallback((removeIndex: number[]) => {
    dispatch(removeLikedRecipes(removeIndex));
  }, []);
  // 정렬 탭 버튼
  const handleTab = useCallback((tabNumber: number) => {
    dispatch(setTab(tabNumber));
  }, []);
  // 수정 버튼
  const handleModifyButton = useCallback(() => {
    dispatch(setModify());
  }, []);

  // 지울거임
  // api연동 전이라 기존 recipe 데이터에서 사용자가 좋아요한 레시피들만 필터링하겠음
  const handleFilterdRecipe = useCallback(
    (likedRecipesIndexArray: number[]) => {
      const filteredRecipes = recipe.filter((r) =>
        likedRecipesIndexArray.some((i) => r.id === i)
      );
      setTempRecipes(filteredRecipes);
    },
    [recipe]
  );

  // 처음에 보여줄 레시피 초기화하기
  useEffect(() => {
    // 페이지 들어오면 사용자 좋아요 레시피 불러오기 api
    // 아래 함수는 삭제할 예쩡
    handleFilterdRecipe(user.likeRecipe);
  }, []);

  return (
    <UserLikedRecipesContainerWrapper>
      <div className='navigation-wrapper'>
        <div className='navigation-text'>좋아요한 레시피</div>
        <LikedSortTab onSwitch={handleTab} onSort={handleSortTab} />
        <LikedModifyButton onModify={handleModifyButton} onRemove={handleDeleteButton} />
      </div>
      <div className='view-wrapper'>
        <RecipeViewBox filteredIngredients={tempRecipes} />
      </div>
    </UserLikedRecipesContainerWrapper>
  );
};

const UserLikedRecipesContainerWrapper = styled.div`
width: 100%;
height: 80%;

.navigation-wrapper{
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
    .navigation-text{
    font-size: x-large;
    font-weight: 600;

  }
  .navigation-content{
    justify-content: space-between;
    display: flex;
    width: 100%;
    height: 100%;
  }
}
.view-wrapper
{
  padding-top: 1rem;
  height: 85%;
  width: 100%;
  position: relative;
  /*overflow: auto;*/
  .view-shadow{
    width: inherit;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.15);
    filter: brightness(70%);
    z-index: 10;
    position: absolute;
  }
}
`;

export default UserLikedRecipesContainer;

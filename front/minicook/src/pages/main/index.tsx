import recipe from "../../data/recipe";
import mainHeaderImage from "./assets/mainPage_frying_pan.svg";

import MainHeader from "../../components/main/MainHeader";
import MainTopRecipe from "../../components/main/MainTopRecipe";
import MainCarousel from "../../components/main/MainCarousel";
import styled from "styled-components";

const MainPage = () => {
  // recipe 필터링

  return (
    <MainPageWrapper>
      <MainHeader image={mainHeaderImage} />
      <MainTopRecipe recipe={recipe} />
      <MainCarousel recipe={recipe} />
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default MainPage;

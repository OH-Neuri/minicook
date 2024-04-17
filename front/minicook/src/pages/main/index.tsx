import MainCarousel from "../../components/main/mainCarousel";
import MainHeader from "../../components/main/mainHeader";
import MainTopRecipe from "../../components/main/mainTopRecipe";
import mainHeaderImage from "./assets/mainPage_frying_pan.svg";

import styled from "styled-components";

const MainPage = () => {
  return (
    <MainPageWrapper>
      <MainHeader image={mainHeaderImage} />
      <MainTopRecipe />
      <MainCarousel />
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

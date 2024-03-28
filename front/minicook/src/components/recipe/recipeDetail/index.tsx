import React from "react";
import styled from "styled-components";
import Recipe from "../../../data/type/recipe";
import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";

interface ReacipeDetailProps {
  recipe: Recipe;
  page: string | null;
  onChangePage: (pageIndex: number) => void;
}

/**
 * RecipeDetail 컴포넌트
 *
 * props로 받은 레시피의 제작 step을 보여주는 프레젠테이션 컴포넌트 입니다..
 * @prop {Recipe} recipe - 화면에 보여줄 레시피
 * @prop {string | null} page - step단계
 * @prop {function} onChangePage - step 업데이트 콜백 함수
 *
 */
const RecipeDetail: React.FC<ReacipeDetailProps> = ({ recipe, page, onChangePage }) => {
  const { image, content } = recipe;
  const pageIndex = Number(page);

  const handleLeftButton = () => {
    if (page && pageIndex !== 1) onChangePage(pageIndex - 1);
  };
  const handleRightButton = () => {
    if (page && pageIndex !== content.length) onChangePage(pageIndex + 1);
  };

  return (
    <RecipeDetailWrapper>
      <Header>만드는 방법</Header>
      <div className='detail-content'>
        <StepButton aria-label='Previous Step'>
          {page && pageIndex !== 1 && (
            <FaChevronLeft
              className='cursor-pointer'
              size={30}
              onClick={handleLeftButton}
            />
          )}
        </StepButton>
        {page && (
          <DetailStepWrapper>
            <StepImage src={image[pageIndex - 1]} width={100} height={100} alt='recipe' />
            <div className='detail-step-text'>
              {`Step ${pageIndex}`}
              <div className='detail-text'>{content[pageIndex - 1]}</div>
            </div>
          </DetailStepWrapper>
        )}
        <StepButton aria-label='Next Step'>
          {page && pageIndex !== content.length && (
            <FaChevronRight
              className='cursor-pointer'
              size={30}
              onClick={handleRightButton}
            />
          )}
        </StepButton>
      </div>
    </RecipeDetailWrapper>
  );
};

const Header = styled.div`
width: 144px;
height: 32px;
display: flex;
margin-bottom: 10px;
justify-content: center;
align-items: center;

color:white;
--tw-bg-opacity: 1;
background-color: rgb(106 78 25 / var(--tw-bg-opacity));
font-weight: 600;
font-size: 1rem/* 16px */;
line-height: 24px;
border-radius: 9999px;

`;
const RecipeDetailWrapper = styled.div`
width:72%;
max-width: 800px;
min-width: 500px; 

height: 100%;
max-height:600px;
min-height: 550px;
padding: 0 10px;
display: flex;
flex-direction: column;
align-items: center;

 @media screen and (max-width: 860px) {
  margin: 20px 0px;
  min-height: 390px;
  }

.detail-content{
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
`;

const DetailStepWrapper = styled.div`
  height: 95%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: none;

    .detail-step-text{
      width: 90%;
      height: 100px;
      font-size:x-large;
      font-weight: 600;
      color:#c10808;
    
    }

    .detail-text{
      margin-top: 0.5rem;
      font-size:large;
    }
`;

const StepImage = styled.img`
  width: 90%;
  height: 90%;
  max-height: 380px;
  margin: 0 20px;
  object-fit: cover;
  background-size: cover;
  pointer-events: none;
  border-radius: 10px;
`;

const StepButton = styled.button`
width:30px;
height:100%;
display: flex;
justify-content: center;
align-items: center;
`;
export default RecipeDetail;

import React from "react";
import styled from "styled-components";
import Recipe from "../../data/type/recipe";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import Pagination from "../pagination";
interface ReacipeDetailProps {
  recipe: Recipe;
  page: string | null;
  onChangePage: (pageIndex: number) => void;
}
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
    <RecipeDetailBlock>
      <div className='text-base h-8  flex justify-center items-center text-[#ffffff]  rounded-full font-semibold bg-[#6a4e19] w-36'>
        만드는 방법
      </div>
      <div className='detail-content'>
        <button className='detail-button'>
          {page && pageIndex !== 1 && (
            <FaChevronLeft
              className='cursor-pointer'
              size={30}
              onClick={handleLeftButton}
            />
          )}
        </button>
        {page && (
          <div className='detail-step'>
            <img
              className='detail-image'
              src={image[pageIndex - 1]}
              width={100}
              height={100}
            />
            <div className='detail-step-text'>
              {`Step ${pageIndex}`}
              <div className='detail-text'>{content[pageIndex - 1]}</div>
            </div>
          </div>
        )}
        <button className='detail-button'>
          {page && pageIndex !== content.length && (
            <FaChevronRight
              className='cursor-pointer'
              size={30}
              onClick={handleRightButton}
            />
          )}
        </button>
      </div>
      {/*<Pagination count={ingredients.length} page={page} onChangePage={onChangePage} />*/}
    </RecipeDetailBlock>
  );
};
const RecipeDetailBlock = styled.div`
width:68%;
height: 100%;
padding: 0 1rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;
.detail-button{
    width: 5%;
    height: 5%;
}
.detail-content{
    display: flex;
    width: 100%;
    height: 80%;
    justify-content: space-between;
    align-items: center;
    .detail-step{
        height: 95%;
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        pointer-events: none; 
        .detail-image{
            width: 90%;
            height: 80%;
            object-fit: cover;
            background-size: cover;
            pointer-events: none;
            border-radius: 10px;
        }

        .detail-step-text{
            width: 85%;
            font-size:x-large;
            font-weight: 600;
            color:#c10808;
        
        }

        .detail-text{
            margin-top: 0.5rem;
            font-size:large;
        }
    }
}
`;

export default RecipeDetail;

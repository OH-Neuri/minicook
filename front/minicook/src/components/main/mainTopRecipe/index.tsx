import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RecipeType } from "../../../type";

interface MainTopRecipeProps {
  recipe: RecipeType[];
}
const MainTopRecipe: React.FC<MainTopRecipeProps> = ({ recipe }) => {
  return (
    <MainTopRecipeWrapper>
      <div className='header'>
        <span className='header-text'>인기 많은 레시피 </span>
        <span className='header-text-rank'>TOP 4</span>
      </div>
      <div className='image-wrapper'>
        {recipe.slice(0, 4).map(({ id, thumbnail }, v) => (
          <StyledImage key={id} to={`/recipe/${id}`}>
            <img
              className='image'
              src={thumbnail}
              width={220}
              height={220}
              alt='recipe'
            />
            <span className='image-rank'>{`${v + 1}`}</span>
          </StyledImage>
        ))}
      </div>
    </MainTopRecipeWrapper>
  );
};

const MainTopRecipeWrapper = styled.div`
    width: 100%;
    height: 380px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.colors.green3};
    padding: 0 10px;

    @media screen and (max-width: 790px) {
       height: 480px;
    }

    .header{
        width: 100%;
        max-width: 1200px;
    }
    .header-text{
        font-size:1.5rem;
        font-weight: 500;
        color: white;
    }
    .header-text-rank{
        --tw-text-opacity: 1;
        color: rgb(252 211 77 / var(--tw-text-opacity));
        font-size: 1.5rem/* 24px */;
        line-height: 2rem/* 32px */;
        font-weight: 700;
        --tw-shadow-color: #4b5563;
        --tw-shadow: var(--tw-shadow-colored);
    }
    
    .image-wrapper{
      width: 100%;
      max-width: 1200px;
      display: flex;
      justify-content: space-around;
      cursor: pointer;
      padding: 30px 0px;
        @media screen and (max-width: 790px) {
             flex-wrap: wrap;
        }
      .image{
        width: 100%;
        max-width: 270px;
        @media screen and (max-width: 790px) {
        max-width: 235px;
        }
      }
      
      .image-rank{
        z-index: 10;
        position: absolute;
        left: 10px;
        top: 5px;
        width: 2.3rem;
        height: 2.3rem;
        background-color: white;
        text-align: center;
        padding: 4px 0;
        font-weight: 700;
        font-size:large;
        border-radius: 5px;
        border: 1px solid #f0f0f0;
        color:#676565 ;
        text-align: center;
        box-shadow: 3px 3px 3px 3px #4a4a4a;
      }
    }
`;
const StyledImage = styled(Link)`
      position: relative;
`;
export default MainTopRecipe;

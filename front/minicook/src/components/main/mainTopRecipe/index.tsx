import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainTopRecipe: React.FC = () => {
  const recipe = [
    {
      id: "gp5eKD8AeyhhPNm7bszM",
      name: "햄마요덮밥",
      thumbnail: "https://ottogi.okitchen.co.kr/pds/upfile/2020-08-25_427865954[13].jpg",
    },
    {
      id: "8k4S6HRY50iDADFiQkWz",
      name: "콘치즈",
      thumbnail: "https://ottogi.okitchen.co.kr/pds/upfile/2020-08-25_427863666[9].jpg",
    },
    {
      id: "Dy8o6nmsOgAqnKNrhbLf",
      name: "유자 연근조림",
      thumbnail: "https://ottogi.okitchen.co.kr/pds/upfile/2020-08-24_427853121[15].jpg",
    },
    {
      id: "oPOW2ByENWJ2KIro56Ar",
      name: "연어샐러드",
      thumbnail: "https://ottogi.okitchen.co.kr/pds/upfile/2020-08-24_427850333[27].jpg",
    },
  ];
  return (
    <MainTopRecipeWrapper>
      <div className='header'>
        <span className='header-text'>인기 많은 레시피 </span>
        <span className='header-text-rank'>TOP 4</span>
      </div>
      <div className='image-wrapper'>
        {recipe.splice(0, 4).map(({ id, thumbnail }, v) => (
          <StyledImage key={id}>
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
       height: 470px;
    }
    @media screen and (max-width: 495px) {
      height: 420px;
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
      padding: 30px 0px;
        @media screen and (max-width: 790px) {
          gap:15px;
          flex-wrap: wrap;

        }
      .image{
        width: 100%;
        max-width: 270px;
        @media screen and (max-width: 790px) {
          max-width: 210px;
        }
        @media screen and (max-width: 495px) {
        max-width: 185px;
        }
        @media screen and (max-width: 390px) {
        max-width: 160px;
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
const StyledImage = styled.div`
      position: relative;
`;
export default MainTopRecipe;

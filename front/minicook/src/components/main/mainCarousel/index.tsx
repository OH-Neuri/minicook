import React, { useEffect, useRef, useState } from "react";
import { BsChevronLeft } from "@react-icons/all-files/bs/BsChevronLeft";
import { BsChevronRight } from "@react-icons/all-files/bs/BsChevronRight";
import { FaCircle } from "@react-icons/all-files/fa/FaCircle";
import styled from "styled-components";
import { RecipeType } from "../../../type";

interface MainCarouselProps {
  recipe: RecipeType[];
}
const MainCarousel: React.FC<MainCarouselProps> = ({ recipe }) => {
  const [index, setIndex] = useState<number>(0);
  const carouselImageRef = useRef<HTMLDivElement | null>(null);

  const prevClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (index === 0) return;
    setIndex(index - 1);
  };

  const nextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (index === 3) return;
    setIndex(index + 1);
  };

  useEffect(() => {
    if (carouselImageRef.current != null) {
      carouselImageRef.current.style.transform = `translateX(-${index * 580}px)`;
    }
  }, [index]);

  return (
    <MainCarouselWrapper>
      <div className='text'>
        <div className='text-top'>
          내게 딱 __ 맞는
          <br />
          레시피 찾기
        </div>
        <div className='text-bottom'>
          카테고리 별로 원하는 레시피를
          <br />
          추천받을 수 있어요.
        </div>
      </div>

      <div className='carousel-wrapper'>
        <StyledButton aria-label='Carousel Left' onClick={(e) => prevClick(e)}>
          <BsChevronLeft size={20} />
        </StyledButton>
        <Carousel>
          <div className='carousel-image' ref={carouselImageRef}>
            {recipe.slice(0, 4).map(({ id, thumbnail }) => (
              <img className='rounded-xl' key={id} src={thumbnail} alt='Recipe' />
            ))}
          </div>
          <div className='carousel-indicator'>
            {[0, 1, 2, 3].map((v, i) => (
              <CircleIcon key={i} $active={index === v} />
            ))}
          </div>
        </Carousel>
        <StyledButton aria-label='Carousel Right' onClick={(e) => nextClick(e)}>
          <BsChevronRight size={20} />
        </StyledButton>
      </div>
    </MainCarouselWrapper>
  );
};

const MainCarouselWrapper = styled.div`
    width: 100%;
    height: 800px;
    padding: 90px 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme.colors.bgColor};

    @media screen and (max-width: 980px) {
        height: auto;
        flex-wrap: wrap;    
        max-height: 750px;
    }

    .text{
    line-height: 3rem;
        .text-top{
            font-weight: 900;
            font-size: 1.5rem/* 24px */;
            line-height: 2rem/* 32px */;
        }
        .text-bottom{
            line-height: 2rem/* 32px */;
            --tw-text-opacity: 1;
            color: rgb(156 163 175 / var(--tw-text-opacity));
        }
    }

    .carousel-wrapper{
        width: 750px;
        height: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 10px;
        margin-top:30px;

        @media screen and (max-width: 980px) {
        width:100%;
        height: auto;
        }
    }
`;

const Carousel = styled.div`
      width: 570px;
      height: 440px;
      margin: 0 15px;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      overflow: hidden;
      background-size: cover;
      object-fit: cover;
    @media screen and (max-width: 980px) {
        width: 100%;
        height: auto;
        max-width: 570px;
    }
      .carousel-image{
        width: 100%;
        height: 100%;
        padding-left: 3px;
        max-height: 410px;
        display: flex;
        transform: translateX(0px);
        transition : transform 0.2s;
      }
      .carousel-indicator{
        display: flex;
        margin-top: 10px;
      }
`;

const StyledButton = styled.button`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 2px 2px 2px 2px #dbd8d1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CircleIcon = styled(FaCircle)<{ $active: boolean }>`
    fill: ${({ $active }) => ($active ? "#4d4435" : "#c9c1b1")};
`;

export default MainCarousel;

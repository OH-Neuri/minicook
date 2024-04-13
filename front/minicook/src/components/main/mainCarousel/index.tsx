import React, { useRef } from "react";
import { BsChevronLeft } from "@react-icons/all-files/bs/BsChevronLeft";
import { BsChevronRight } from "@react-icons/all-files/bs/BsChevronRight";
import { FaCircle } from "@react-icons/all-files/fa/FaCircle";
import styled from "styled-components";
import { RecipeType } from "../../../type";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface MainCarouselProps {
  recipe: RecipeType[];
}
const MainCarousel: React.FC<MainCarouselProps> = ({ recipe }) => {
  SwiperCore.use([Autoplay, Navigation]);
  const sliderImages = [
    "https://ottogi.okitchen.co.kr/pds/editor/30_1.jpg",
    "https://ottogi.okitchen.co.kr/pds/editor/30_2.jpg",
    "https://ottogi.okitchen.co.kr/pds/editor/30_3.jpg",
    "https://ottogi.okitchen.co.kr/pds/editor/30_4.jpg",
  ];
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <MainCarouselWrapper>
      <div className='section'>
        <div className='text'>
          <div className='text-top'>
            내게 딱 __ 맞는
            <br />
            레시피 찾기
          </div>
          <div className='text-bottom'>
            <span>카테고리 별로 원하는 레시피를</span>
            <br />
            <span>추천 받을 수 있어요.</span>
          </div>
        </div>
        <Swiper
          loop={true}
          slidesPerView={1}
          pagination={{ dynamicBullets: true }}
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          onInit={(swiper: any) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className='mySwiper'>
          {sliderImages.map((value, index) => {
            return (
              <SwiperSlide>
                <img
                  key={index}
                  src={`${value}`}
                  className='object-contain w-50 h-50'
                  alt='Carousel'
                />
              </SwiperSlide>
            );
          })}
          <div className='absolute flex justify-around w-full'>
            <StyledButton ref={prevRef} aria-label='Carousel Left Button'>
              <BsChevronLeft size={20} />
            </StyledButton>
            <StyledButton ref={nextRef} aria-label='Carousel Right Button'>
              <BsChevronRight size={20} />
            </StyledButton>
          </div>
        </Swiper>
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
      max-height: 700px;
  }

  .section{
    width: 100%;
    max-width: 1000px;
    display: flex;
    align-items: center;
    .text{
      line-height: 3rem;
      @media screen and (max-width: 980px) {
        width: 100%;
        display: flex;
        flex-direction:column;
        margin-bottom: 20px;
        }
      .text-top{
        font-weight: 900;
        font-size: 1.5rem/* 24px */;
        line-height: 2rem/* 32px */;
        @media screen and (max-width: 980px) {
          text-align: center;
        }
      }
      .text-bottom{
          line-height: 2rem/* 32px */;
          --tw-text-opacity: 1;
          color: rgb(156 163 175 / var(--tw-text-opacity));
        @media screen and (max-width: 980px) {
          text-align: center;
        }
      }
    }
  
    .mySwiper{
      width: 75%;
      max-width: 600px;
      --swiper-theme-color: #2d7700;
    }
      @media screen and (max-width: 980px) {
      flex-wrap: wrap;    
      max-height: 750px;
  }
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

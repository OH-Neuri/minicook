import React, { useEffect, useState } from "react";
import styled from "styled-components";
import part1Image from "./assets/main_page_image1.svg";
import { WiDirectionRight } from "react-icons/wi";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import recipe from "../../data/recipe";
import { useRef } from "react";
import { FaCircle } from "react-icons/fa";
const Main = () => {
  const [index, setIndex] = useState<number>(0);
  const carouselImageRef = useRef<HTMLDivElement | null>(null);

  const prevClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (index === 0) return;
    setIndex(index - 1);
  };

  const nextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (index === 3) return;
    setIndex(index + 1);
    console.log(index, 11);
  };

  useEffect(() => {
    if (carouselImageRef.current != null) {
      carouselImageRef.current.style.transform = `translateX(-${index * 570.11}px)`;
    }
  }, [index]);

  return (
    <MainWrapper>
      <div className='main-part01'>
        <div className='main-part01-text '>
          <div className='font-black text-3xl '>
            냉장고에 남은 음식 재료들..
            <br />
            맛있게 해결할 수 있는 방법 없을까?
          </div>
          <div className='py-3'>
            ✨ 지금 <span className='underline font-black'>300</span>개의 레시피가 있어요.
          </div>
          <div className='font-black '>
            오늘 저녁은 맛있게 해먹어요! 남은 재료를 활용한 레시피를 알려드릴게요.
            <br />
            간단하면서도 푸짐한 요리로 냉장고 속 식재료를 맛있게 처리해봐요.
          </div>
          <div className='mt-3 font-normal  text-sm'>
            재료를 선택하면 레시피를 확인할 수 있어요.
            <br />
            마음에 드는 레시피를 저장할 수 있어요.
          </div>
          <button className='main-part01-button'>
            <span>재료 선택</span>
            <WiDirectionRight size={35} fill={"white"} />
          </button>
        </div>
        <img src={part1Image} width={320} height={320} alt='메인사진1'></img>
      </div>

      <div className='main-part02'>
        <div className='main-part02-text'>
          인기 많은 레시피{" "}
          <span className='text-amber-300 text-2xl font-bold shadow-gray-600'>TOP 4</span>
        </div>
        <div className='main-part02-image'>
          {recipe.map(({ id, name, thumbnail }, v) => (
            <div className='main-part02-image-box'>
              <img src={thumbnail} width={220} height={220} />
              <span className='main-part02-image-rank'>{`${v + 1}`}</span>
            </div>
          ))}
        </div>
      </div>

      <div className='main-part03'>
        <div className='main-part03-text'>
          <div className='font-black text-2xl'>
            내게 딱 __ 맞는
            <br />
            레시피 찾기
          </div>
          <div className='mt-5 text-sm text-gray-400 '>
            카테고리 별로 원하는 레시피를
            <br />
            추천받을 수 있어요.
          </div>
        </div>

        <button className='ml-10 ' type='button' onClick={(e) => prevClick(e)}>
          <BsChevronLeft size={20} />
        </button>

        <div className='main-part03-carousel-wrapper'>
          <div className='carousel' ref={carouselImageRef}>
            {recipe.map(({ id, thumbnail }) => (
              // eslint-disable-next-line jsx-a11y/alt-text
              <img
                className='rounded-xl'
                key={id}
                src={thumbnail}
                width={80}
                height={40}></img>
            ))}
          </div>
          <div className='flex mt-3'>
            {[0, 1, 2, 3].map((v) =>
              index === v ? <FaCircle fill={"#4d4435"} /> : <FaCircle fill={"#c9c1b1"} />
            )}
          </div>
        </div>
        <button className='' type='button' onClick={(e) => nextClick(e)}>
          <BsChevronRight size={20} />
        </button>
      </div>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
color: white;
height: 197vh;

  .main-part03{
    padding: 11rem 25% 8rem 25%;
    width: 100%;
    height: 50rem;
    background-color: #F4F1EB;
    display: flex;
    justify-content: space-around;

    .main-part03-text{
      line-height: 3rem;
      padding: 4rem 0;
    }

    .main-part03-carousel-wrapper{
      height: 28rem;
      width: 60%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      > .carousel{
        padding-left: 3px;
        width: 36rem;
        height: 25rem;
        display: flex;
        transform: translateX(0px);
        transition : transform 0.2s;

        > img {
          width: 36rem;
          height: 25rem;
        }
      }
    }
      > button{
        margin-top:11rem;
        width: 3rem;
        height: 3rem;
        background-color: white;
        border-radius: 20px;
        top:45%;
        z-index: 10;
        box-shadow: 2px 2px 2px 2px #dbd8d1;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    
  }

  .main-part01{
    background-color: #F4F1EB;
    width: 100%;
    padding: 5.3rem 20% 9rem 20%;
    display: flex;
    justify-content: space-between;
    .main-part01-text{
      line-height: 1.8rem;
      margin-top: 1rem;
      font-weight: 700;
    }
    .main-part01-button{
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 13rem;
      height: 2.5rem;
      background-color: #283618;
      border-radius: 10px;
      border: 2px solid #283618;
      margin-top: 2.75rem;
      padding-left: 5px;
      > span{
        font-size: smaller;
        color:white
      }
    }
  }

  .main-part02{
    width: 100%;
    padding: 2rem 20%;
    height: 25rem;
    background-color: #b7b7a4;
    
    .main-part02-text{
      font-size:1.5rem;
      font-weight: 5 00;
      color: white;
    }
    .main-part02-image{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      padding: 2rem 5%;
      .main-part02-image-box{
      position: relative;
    }
      .main-part02-image-rank{
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
  }

`;
export default Main;

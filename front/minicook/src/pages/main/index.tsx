import React, { useState } from "react";
import styled from "styled-components";
import part1Image from "./assets/main_page_image1.svg";
import { WiDirectionRight } from "react-icons/wi";
import menu from "./data/menu";
const Main = () => {
  let [index, setIndex] = useState(0);

  const prevClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (index === 0) return;
    setIndex(index - 1);
    (e.target as HTMLDivElement).style.transform = `translate3d(-${500 * index}px,0,0)`;
  };

  const nextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (index === 2) return;
    setIndex(index + 1);
    (e.target as HTMLDivElement).style.transform = `translate3d(-${500 * index}px,0,0)`;
  };

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
          <span className='text-yellow-300 text-2xl font-bold'>TOP 4</span>
        </div>
        <div className='main-part02-image'>
          {menu.map(({ id, name, image }, v) => (
            <div className='main-part02-image-box'>
              <img src={image} width={220} height={220} />
              <span className='main-part02-image-rank'>{`${v + 1}`}</span>
            </div>
          ))}
        </div>
      </div>

      <div className='main-part03'>
        <div className='main-part03-text'>
          <div>
            내게 딱 __ 맞는
            <br />
            레시피 찾기
          </div>
          <div>
            카테고리 별로 원하는 레시피를
            <br />
            추천받을 수 있어요.
          </div>
        </div>
        <div className='main-part03-carousel-wrapper'>
          <div className='carousel'>
            <img src={menu[0].image} width={30} height={30}></img>
            <img src={menu[1].image} width={30} height={30}></img>
            <img src={menu[2].image} width={30} height={30}></img>
            <img src={menu[3].image} width={30} height={30}></img>
          </div>
          <button type='button' onClick={(e) => prevClick(e)}>
            prev
          </button>
          <button type='button' onClick={(e) => nextClick(e)}>
            next{index}
          </button>
        </div>
      </div>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
color: white;
height: 180vh;
  .main-part03{
    padding: 5.3rem 25% 7rem 25%;
    width: 100%;
    height: 40rem;
    background-color: green;

    .main-part03-carousel-wrapper{
      width: 500px;
      height: 300px;

      > .carousel{
        display: flex;
        transform: translate3d(0,0,0);
        transition : transform 0.2s;
      
      > img {
        width: 500px;
        height: 300px;
      }
      }
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
      background-color: #5f4115;
      border-radius: 10px;
      border: 2px solid #5f4115;
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
    background-color: #db8f39;
    
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

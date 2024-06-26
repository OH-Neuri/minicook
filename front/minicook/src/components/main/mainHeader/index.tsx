import React from "react";
import { WiDirectionRight } from "@react-icons/all-files/wi/WiDirectionRight";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface MainHeaderProps {
  image: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({ image }) => {
  return (
    <MainHeaderWrapper>
      <div className='header-item-wide'>
        <div className='header-left'>
          <div className='text-top'>
            냉장고에 남은 음식 재료들..
            <br />
            맛있게 해결할 수 있는 방법 없을까?
          </div>
          <div className='text-middle py-2'>
            ✨ 지금 <span className='underline'>300</span>개의 레시피가 있어요.
          </div>
          <div className='text-middle'>
            오늘 저녁은 맛있게 해먹어요! 남은 재료를 활용한 레시피를 알려드릴게요.
            <br />
            간단하면서도 푸짐한 요리로 냉장고 속 식재료를 맛있게 처리해봐요.
          </div>
          <div className='text-bottom'>
            재료를 선택하면 레시피를 확인할 수 있어요.
            <br />
            마음에 드는 레시피를 저장할 수 있어요.
          </div>
          <StyledLink to={"/recipe/select"}>
            <span>재료 선택</span>
            <WiDirectionRight size={50} fill={"white"} />
          </StyledLink>
        </div>
        <div className='header-right'>
          <img src={image} width={320} height={320} alt='메인사진1' />
        </div>
      </div>
    </MainHeaderWrapper>
  );
};

const MainHeaderWrapper = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    padding: 0px 20px;

    background-color: ${(props) => props.theme.colors.bgColor};

    @media screen and (max-width: 790px) {
      min-width: 80px;
      height: 850px;
      padding: 30px 20px;
    }

    .header-item-wide{
      width: 100%;
      max-width: 1200px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap-reverse;

    @media screen and (max-width: 790px) {
      justify-content: center;
      padding-top: 10px;  
    }   
      .header-left {
        flex-direction: column;
        padding-top: 100px;
        line-height: 1.8rem;
        font-weight: 700;

      @media screen and (max-width: 790px) {
        padding-top: 5px;
        height: 55%;
      }
          .text-top{
            font-weight: 900;
            font-size: 1.875rem /* 30px */;
            line-height: 2.25rem
          }
          .text-middle{
            font-weight: 900;
          }
          .text-bottom {
            margin-top: 0.75rem;
            font-weight: 400;
            font-size: 0.875rem /* 14px */;
            line-height: 1.25rem
          }
    }

    .header-right{
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 350px;
      min-width: 250px;
      width: 35%;
    }       
}
`;

const StyledLink = styled(Link)`
    width: 250px;
    height:48px;
    margin-top: 40px;
    padding-left: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.green1};

    &:hover{
    background-color: ${(props) => props.theme.colors.green2};
    }

    > span{
    font-size: medium;
    font-weight: 500;
    color:white
    }
`;
export default MainHeader;

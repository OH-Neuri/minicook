import React, { useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import {
  setAddRemoveIndex,
  setSliceRemoveIndex,
} from "../../../store/reducers/userLiked";

import Badge from "../../common/badge";
import { formatNumberWithCommas } from "../../../utils/formatNumberWithCommas";
import { TiHeart } from "@react-icons/all-files/ti/TiHeart";
import { FaRegCheckSquare } from "@react-icons/all-files/fa/FaRegCheckSquare";
import { RecipeType } from "../../../type";

interface ReacipeCardProps {
  recipe: RecipeType;
  detail: boolean;
  modify?: boolean;
}

/**
 * RecipeCard 컴포넌트
 *
 * props로 받은 레시피 를 보여주는 레시피 카드 컴포넌트 입니다.(재료선택 페이지, 상세페이지, 마이페이지)
 * @prop {Recipe} recipe - 화면에 보여줄 레시피
 * @prop {boolean} detail - 상세 페이지에서 보여줄 카드의 조건부 스타일링 변수
 *
 */
export const RecipeCard: React.FC<ReacipeCardProps> = ({ recipe, detail, modify }) => {
  const { id, name, like, ingredients, thumbnail } = recipe;
  const formatLike = formatNumberWithCommas(like);
  const navigate = useNavigate();
  const [select, setSelect] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleButton = () => {
    if (modify) {
      // 변경 모드
      selectRecipe();
    } else {
      // 상세 모드
      navigateToPage();
    }
  };

  // 레시피 상세보기
  const navigateToPage = () => {
    navigate(`/recipe?id=${id}&page=${1}`);
  };

  // 레시피 선택하기
  const selectRecipe = useCallback(() => {
    if (!select) {
      setSelect(true);
      dispatch(setAddRemoveIndex(id));
    } else {
      setSelect(false);
      dispatch(setSliceRemoveIndex(id));
    }
  }, [select]);

  return (
    <ReacipeCardWrapper $isDetail={detail} onClick={handleButton}>
      {modify && select && (
        <div className='card-select'>
          <FaRegCheckSquare className='bg-white rounded-lg' fill='#287e00' size={80} />
        </div>
      )}
      <div className='card-image'>
        <img
          className='image'
          src={thumbnail}
          alt='레시피 이미지'
          width={100}
          height={100}
        />
      </div>
      <div className='card-content'>
        <div className='card-info'>
          {ingredients.slice(0, 3).map((ingredient, i) => {
            // 정규 표현식을 사용하여 처리된 재료 문자열 생성
            const processedIngredient = ingredient
              // "오뚜기" 제거
              .replace(/오뚜기/g, "")
              // "맛있는" 제거
              .replace(/맛있는/g, "")
              // 대괄호로 묶인 내용 제거
              .replace(/\[[^)]*\]/g, "")
              // 괄호로 묶인 내용 제거
              .replace(/\([^)]*\)/g, "")
              // 숫자와 글자 합쳐진 내용 제거
              .replace(/\d+[^\d\s]+/g, "")
              // 공백 제거
              .trim();
            // 처리된 재료 문자열을 반환
            return (
              <div className='card-ingredients' key={i}>{`#${processedIngredient}`}</div>
            );
          })}
          {like > 100 && (
            <div className='card-tag'>
              <Badge tagText='인기' bgColor='#ffa600' size='3rem' />
            </div>
          )}
        </div>
        <div className='card-name'>
          {name}
          {detail && (
            <div className='flex items-center font-medium mr-2'>
              <TiHeart size={25} fill='#ff3c00' />
              &nbsp;
              {formatLike}
            </div>
          )}
        </div>
      </div>
    </ReacipeCardWrapper>
  );
};

const ReacipeCardWrapper = styled.div<{ $isDetail: boolean }>`
width: 20rem;
height: 17.5rem;
border-radius: 5px;
display: flex;
flex-direction: column;
overflow: hidden;
box-sizing: content-box;
margin-bottom: 0.6rem;
cursor: pointer;
position: relative;


  ${(props) =>
    !props.$isDetail &&
    css`
      &:hover{
      background-color: rgba(0, 0, 0, 0.15);
      filter: brightness(70%);
      & img{
        box-sizing: border-box;
        } 
      } 
    `}
    
  .card-select{
    width: 100%;
    height: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:10;
    position:absolute;  
  }

  .card-image{
    width: 100%;
    height: 68%;
    .image{
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 3px;
    }
  }
  .card-content{
    display:flex;
    flex-direction:column;
    justify-content:end;
    height: 33%;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    /*margin-top:1rem;*/
    .card-info{
      margin-top: 0.7rem;
      display: flex;
      position: relative;
      .card-tag{
        position: absolute;
        right: 3.6rem;
        bottom:4.2rem;
      }
      .card-ingredients{
         margin-right: 0.25rem;
      }
    }
    .card-name{
      font-size: x-large;
      font-weight: 700;
      display: flex;
      justify-content: space-between;
    }

  }
`;

export default React.memo(RecipeCard);

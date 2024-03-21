import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import {
  setAddRemoveIndex,
  setSliceRemoveIndex,
} from "../../../store/reducers/userLiked";

import Recipe from "../../../data/type/recipe";
import Badge from "../../common/badge";
import { formatNumberWithCommas } from "../../../utils/formatNumberWithCommas";
import { TiHeart } from "@react-icons/all-files/ti/TiHeart";
import { FaRegCheckSquare } from "@react-icons/all-files/fa/FaRegCheckSquare";

interface ReacipeCardProps {
  recipe: Recipe;
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

  const handleButton = useCallback(() => {
    // 변경 모드이면,
    if (modify) {
      selectRecipe();
    } else {
      // 상세 모드이면,
      navigateToPage();
    }
  }, [modify]);

  // 레시피 상세보기
  const navigateToPage = useCallback(() => {
    navigate(`/recipe?id=${id}&page=${1}`);
  }, [id]);

  // 레시피 선택하기
  const selectRecipe = useCallback(() => {
    if (!select) {
      setSelect((prev) => !prev);
      dispatch(setAddRemoveIndex(id));
    } else {
      setSelect((prev) => !prev);
      dispatch(setSliceRemoveIndex(id));
    }
  }, [id]);

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
          {ingredients.slice(0, 3).map((ingredient, i) => (
            <div className='card-ingredients' key={i}>{`#${ingredient}`}</div>
          ))}
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

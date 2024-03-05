import React from "react";
import styled, { css } from "styled-components";
import Recipe from "../../../data/type/recipe";
import Tag from "../tag";
import { useLocation, useNavigate } from "react-router-dom";
import { TiHeart } from "react-icons/ti";
import { formatNumberWithCommas } from "../../../utils/formatNumberWithCommas";
interface ReacipeCardProps {
  recipe: Recipe;
  detail: boolean;
}
export const RecipeCard: React.FC<ReacipeCardProps> = ({ recipe, detail }) => {
  const { id, name, like, ingredients, thumbnail } = recipe;
  const formatLike = formatNumberWithCommas(like);
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToPage = () => {
    navigate(`/recipe?id=${id}&page=${1}`);
  };

  return (
    <ReacipeCardWrapper $isDetail={detail} onClick={navigateToPage}>
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
              <Tag tagText='인기' bgColor='#ffa600' size='3rem' />
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

export default RecipeCard;

import React from "react";
import styled, { css } from "styled-components";
import { IngredientType } from "../../../pages/recipe/select/data/ingredients";

interface IngredientItemProps {
  ingredient: IngredientType;
  onToggle: (ingredientName: string) => void;
}
/**
 * IngredientItem 컴포넌트
 *
 * 재료 선택 모달창 안에 있는 Item을 나타냅니다.
 * @prop {IngredientType} ingredient - 재료의 제목과 체크 상황을 저장하고 있는 재료 객체
 * @prop {funcion} onSelect - 사용자가 선택한 재료 배열의 상태를 업데이트 하는 함수
 * @prop {funtion} onToggle - 재료 정보 배열 상태에서 재료의 클릭 상태를 업데이트 하는 함수
 */
const IngredientItem: React.FC<IngredientItemProps> = ({ onToggle, ingredient }) => {
  const { name, checked } = ingredient;
  const handleToggle = () => {
    name && onToggle(name);
  };

  return (
    <IngredientItemWrapper $isChecked={checked} onClick={handleToggle}>
      <div className='item'>{name}</div>
    </IngredientItemWrapper>
  );
};

const IngredientItemWrapper = styled.div<{ $isChecked: boolean }>`
    .item{
        padding: 2px 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 6.5rem;
        height: 2.8rem;
        margin-right: 0.5rem;
        border-radius: 5px;
        border: 1px solid #dddddd;
        color: white;
        font-weight: 600;
        ${(props) =>
          props.$isChecked
            ? css`
            background-color:#3c721d;
            border-bottom : 6px solid #7b9d01 ;
            `
            : css`
            background-color:#85a996;
            border-bottom:5px solid #d3ddd7;
            border: 2px solid #66716b
            `}
    &:hover{
        cursor: pointer;
    }
    }
`;
export default IngredientItem;

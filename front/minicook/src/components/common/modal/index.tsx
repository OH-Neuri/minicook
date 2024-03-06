import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import IngredientItem from "../../IngredeintItem";
import { IngredientsMenuType } from "../../../pages/recipe/select/data/ingredients";

interface ModalProps {
  ingredientInfo: IngredientsMenuType[];
  onToggle: (ingredientName: string) => void;
}
/**
 * IngredientsModal 컴포넌트
 *
 * 레시피 선택 페이지에서 카테고리의 재료를 보여주는 모달창입니다.
 * @prop {IngredientsMenuType[]} ingredientInfo -사용자 선택한 재료 배열 상태 업데이트 함수
 * @prop {function} onToggle -사용자 선택한 재료 배열 상태 업데이트 함수
 * @prop {function} onSelect -사용자 선택한 재료 배열 상태 업데이트 함수
 *
 */
export const IngredientsModal: React.FC<ModalProps> = ({ ingredientInfo, onToggle }) => {
  const params = useParams();

  return (
    <IngredientsModalWrapper>
      <div className='button-wrapper'>
        {ingredientInfo
          .filter((m) => m.id.toString() === params.id)
          .map(({ ingredients }) =>
            ingredients.map((ingredient, i) => (
              <IngredientItem key={i} onToggle={onToggle} ingredient={ingredient} />
            ))
          )}
      </div>
    </IngredientsModalWrapper>
  );
};

const IngredientsModalWrapper = styled.div`
    z-index: 10;
    top:3rem;
    background-color: #ffffff;
    border: 1px solid #acb7a7;
    width: 100%;
    height: 13rem;
    position: absolute;
    overflow-y: scroll;
    .button-wrapper{
        margin-top: 19px;
        margin-left: 1.5rem;
        display: flex;
        flex-wrap: wrap;
        gap:10px;
    }
`;

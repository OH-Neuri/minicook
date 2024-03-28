import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { IngredientsMenuType } from "../../../pages/recipe/select/data/ingredients";
import IngredientItem from "../../recipeSelct/IngredeintItem";

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
    width: 100%;
    height: 200px;
    position: absolute;
    top:72px;
    z-index: 10;

    background-color: #ffffff;
    border: 1px solid #acb7a7;
    overflow-y: scroll;

    @media screen and (max-width: 790px) {
    top: 100px;
    width: 450px;
  }

    .button-wrapper{
      display: flex;
      flex-wrap: wrap;
      margin-top: 19px;
      margin-left: 43px;
      gap:11px;
    }
`;

import React from "react";
import styled from "styled-components";
import ingredientsMenu from "../../../pages/recipe/select/data/ingredients";
import { useParams } from "react-router-dom";

interface ModalProps {
  // 사용자가 선택한 재료 바꾸기
  onSelect?: (e: string) => void;
  // 모달 닫기
  onClose: () => void;
}

export const IngredientsModal: React.FC<ModalProps> = ({ onSelect, onClose }) => {
  const params = useParams();

  return (
    <IngredientsModalWrapper>
      <div className='button-wrapper'>
        {ingredientsMenu
          .filter((m) => m.id.toString() === params.id)
          .map(({ ingredients }) =>
            ingredients.map((ingredient) => (
              <div className='button-item'>{`${ingredient}`}</div>
            ))
          )}
      </div>
    </IngredientsModalWrapper>
  );
};
const IngredientsModalWrapper = styled.div`
    z-index: 10;
    top:3rem;
    background-color: white;
    width: 100%;
    height: 15rem;
    position: absolute;
    .button-wrapper{
        margin-top: 8px;
        margin-left: 1.5rem;
        display: flex;
        flex-wrap: wrap;
        gap:10px;

        .button-item{
            padding: 2px 2px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 6.5rem;
            height: 2.8rem;
            background-color: white;
            margin-right: 0.5rem;
            border-radius: 5px;
            border: 1px solid #dddddd;
        }
    }
`;

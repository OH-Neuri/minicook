import React from "react";
import styled, { css } from "styled-components";
import { IngredientType } from "../../pages/recipe/select/data/ingredients";

interface IngredientItemProps {
  ingredient: IngredientType;
  onSelect: (e: string) => void;
  onToggle: (id: number, name: string) => void;
  id?: string;
}

const IngredientItem: React.FC<IngredientItemProps> = ({
  onSelect,
  onToggle,
  ingredient,
  id,
}) => {
  const { name, checked } = ingredient;
  const handleToggle = () => {
    name && onSelect(name);
    id && onToggle(parseInt(id), name);
  };

  return (
    <IngredientItemWrapper isChecked={checked} onClick={handleToggle}>
      <div className='item'>{name}</div>
    </IngredientItemWrapper>
  );
};
const IngredientItemWrapper = styled.div<{ isChecked: boolean }>`
    .item{
        padding: 2px 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 6.6rem;
        height: 2.8rem;
        background-color: white;
        margin-right: 0.5rem;
        border-radius: 5px;
        border: 1px solid #dddddd;
        ${(props) =>
          props.isChecked ? css`background-color:#bacfc4;` : css`background-color:white;`}
    &:hover{
        cursor: pointer;
    }
    }
`;
export default IngredientItem;

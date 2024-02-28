import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import ingredientsMenu from "../../pages/recipe/select/data/ingredients";
import { IngredientsModal } from "../common/modal";
import { NavLink } from "react-router-dom";
interface SelectButtonProps {
  onSelect: (e: string) => void;
}

const SelectButton: React.FC<SelectButtonProps> = ({ onSelect }) => {
  const [isOpenModal, setInOpenModal] = useState<boolean>(false);
  const [selectCategory, setSelectCategory] = useState<number>(-1);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const handleOpenModal = () => setInOpenModal(true);
  const handleCloseModal = () => setInOpenModal(false);

  useEffect(() => {
    const handleModal = (e: { target: any }) => {
      if (isOpenModal && modalRef.current && !modalRef.current.contains(e.target)) {
        handleCloseModal();
        setSelectCategory(-1);
      }
    };
    document.addEventListener("click", handleModal);
    return () => document.removeEventListener("click", handleModal);
  }, [isOpenModal]);

  return (
    <SelectButtonWrapper ref={modalRef}>
      <div className='flex justify-between'>
        {ingredientsMenu.map((menu) => (
          <Caterogory
            to={`/recipe/select/${menu.id}`}
            key={menu.id}
            isSelected={selectCategory === menu.id}
            isOpen={isOpenModal}
            onClick={() => {
              handleOpenModal();
              setSelectCategory(menu.id);
            }}>
            {menu.category}
          </Caterogory>
        ))}
      </div>
      {isOpenModal && <IngredientsModal onSelect={onSelect} />}
    </SelectButtonWrapper>
  );
};

const SelectButtonWrapper = styled.div`
display: flex;
width: 100%;
height: 3rem;
flex-direction: column;
position: relative;

`;
const Caterogory = styled(NavLink)<{ isSelected: boolean; isOpen: boolean }>`
  font-size:medium;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7.7rem;
  height: 3rem;
  ${(props) =>
    props.isSelected
      ? css`
        background-color:white;
        font-weight: 700;
        color:#2e4223;
        `
      : css`
        background-color:#2e4223;
        color:white;
  `};
  ${(props) =>
    props.isOpen
      ? css`
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
      `
      : css`border-radius: 12px;`}
  

`;
export default SelectButton;

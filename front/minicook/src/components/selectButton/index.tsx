import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ingredientsMenu from "../../pages/recipe/select/data/ingredients";
import { IngredientsModal } from "../common/modal";
import { NavLink } from "react-router-dom";
interface SelectButtonProps {
  onSelect: (e: string) => void;
}

const SelectButton: React.FC<SelectButtonProps> = ({ onSelect }) => {
  const [isOpenModal, setInOpenModal] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const handleOpenModal = () => setInOpenModal(true);
  const handleCloseModal = () => setInOpenModal(false);

  useEffect(() => {
    const handleModal = (e: { target: any }) => {
      if (isOpenModal && modalRef.current && !modalRef.current.contains(e.target))
        handleCloseModal();
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
            onClick={handleOpenModal}>
            {menu.category}
          </Caterogory>
        ))}
      </div>
      {isOpenModal && <IngredientsModal onSelect={onSelect} onClose={handleCloseModal} />}
    </SelectButtonWrapper>
  );
};

const SelectButtonWrapper = styled.div`
display: flex;
width: 100%;
height: 3rem;
flex-direction: column;
background-color: #c3ebeb;
position: relative;

`;
const Caterogory = styled(NavLink)`
  font-size:medium;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 3rem;
  background-color: white;
  border-radius: 5px;
`;
export default SelectButton;

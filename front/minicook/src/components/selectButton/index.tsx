import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ingredientsMenu from "../../pages/recipe/select/data/ingredients";
import { IngredientsModal } from "../common/modal";
import Category from "../category/intex";

interface SelectButtonProps {
  onSelect: (e: string) => void;
}
/**
 * SelectButton 컴포넌트
 *
 * 레시피 선택 페이지에서 상단 재료 카테고리 버튼 영역을 나타냅니다.
 * @prop {function} onSelect -사용자 선택한 재료 배열 상태 업데이트 함수
 */
const SelectButton: React.FC<SelectButtonProps> = ({ onSelect }) => {
  const [isOpenModal, setInOpenModal] = useState<boolean>(false);
  const [selectCategory, setSelectCategory] = useState<number>(-1);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleOpenModal = () => setInOpenModal((prev) => !prev);
  const handleCloseModal = () => setInOpenModal(false);

  useEffect(() => {
    const handleModal = (e: { target: any }) => {
      if (isOpenModal && modalRef.current && !modalRef.current.contains(e.target)) {
        handleCloseModal();
        setSelectCategory(-1);
      }
      if (!isOpenModal) setSelectCategory(-1);
    };
    document.addEventListener("click", handleModal);
    return () => document.removeEventListener("click", handleModal);
  }, [isOpenModal]);

  return (
    <SelectButtonWrapper ref={modalRef}>
      <div className='flex justify-between'>
        {ingredientsMenu.map((menu) => (
          <div
            className='category-wrapper'
            onClick={() => {
              handleOpenModal();
              setSelectCategory(menu.id);
            }}>
            <Category
              to={`/recipe/select/${menu.id}`}
              key={menu.id}
              isSelectedStyle={selectCategory === menu.id}
              isOpenStyle={isOpenModal}
              category={menu.category}
            />
          </div>
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
export default SelectButton;

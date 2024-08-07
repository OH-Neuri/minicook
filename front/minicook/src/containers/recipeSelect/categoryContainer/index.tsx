import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ingredientsMenu, {
  IngredientsMenuType,
} from "../../../pages/recipe/select/data/ingredients";
import Category from "../../../components/recipeSelect/category/intex";
import { IngredientsModal } from "../../../components/common/modal";

interface CategoryContainerProps {
  ingredientInfo: IngredientsMenuType[];
  onToggle: (ingredientName: string) => void;
}

/**
 * CategoryContainer 컴포넌트
 *
 * 레시피 선택 페이지에서 상단 재료 카테고리 영역을 나타냅니다.
 * @prop {IngredientsMenuType[]} ingredientInfo - 재료 정보 배열
 * @prop {function} onToggle -사용자가 선택한 재료 클릭 상태 업데이트 함수
 * @prop {function} onSelect -사용자가 선택한 재료 배열 상태 업데이트 함수
 */
const CategoryContainer: React.FC<CategoryContainerProps> = ({
  ingredientInfo,
  onToggle,
}) => {
  const [isOpenModal, setInOpenModal] = useState<boolean>(false);
  const [selectCategory, setSelectCategory] = useState<number>(-1);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const handleOpenModal = () => setInOpenModal(true);
  const handleCloseModal = () => setInOpenModal(false);

  const handleButton = (id: number) => {
    if (selectCategory == id) {
      setSelectCategory(-1);
      handleCloseModal();
    } else {
      setSelectCategory(id);
    }
  };

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
    <RecipeSelectHeaderWrapper ref={modalRef}>
      <div className='category-wrapper'>
        {ingredientsMenu.map((menu) => (
          <div
            className='category-box'
            key={menu.id}
            onClick={() => {
              handleOpenModal();
              handleButton(menu.id);
            }}>
            <Category
              to={`/recipe/select/${menu.id}`}
              isSelectStyle={selectCategory === menu.id}
              category={menu.category}
            />
          </div>
        ))}
      </div>
      {isOpenModal && (
        <IngredientsModal ingredientInfo={ingredientInfo} onToggle={onToggle} />
      )}
    </RecipeSelectHeaderWrapper>
  );
};

const RecipeSelectHeaderWrapper = styled.div`
width: 100%;
max-width: 800px;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
position: relative;

  .category-wrapper{
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3px;

    @media screen and (max-width: 790px) {
    max-width: 450px;
    height: 100px;
    }
    @media screen and (max-width: 495px) {
    max-width: 400px;
    }
    @media screen and (max-width: 400px) {
    max-width: 340px;
   }
  }

`;
export default CategoryContainer;

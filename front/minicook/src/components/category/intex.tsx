import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
interface CategoryProps {
  isSelectStyle: boolean;
  isOpenStyle: boolean;
  category: string;
  to: string;
}
/**
 * Category 컴포넌트
 *
 * 레시피 선택 페이지에서 상단 재료 카테고리 버튼을 나타냅니다.
 * @prop {boolean} isSelectedStyle - 선택된 버튼의 스타일을 적용하기 위한 변수
 * @prop {boolean} isOpenStyle -모달이 열려있을때 버튼의 스타일을 적용하기 위한 변수
 * @prop {string} category -카테고리의 제목
 * @prop {to} string -카테고리를 눌렀을 때 이동될 페이지 url
 */
const Category: React.FC<CategoryProps> = ({
  to,
  isSelectStyle,
  isOpenStyle,
  category,
}) => {
  return (
    <CategoryWrapper to={to} $isSelect={isSelectStyle} $isOpen={isOpenStyle}>
      {category}
    </CategoryWrapper>
  );
};

const CategoryWrapper = styled(NavLink)<{ $isSelect: boolean; $isOpen: boolean }>`
  font-size:medium;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 125px;
  height: 50px;
  
  @media screen and (max-width: 790px) {
    width: 145px;
  }
  ${(props) =>
    props.$isSelect
      ? css`
        background-color:white;
        font-weight: 700;
        color:#2e4223;
        border : 1px solid #acb7a7;
        border: 3px solid #a0a79c;
        `
      : css`
        background-color:#2e4223;
        color:white;
  `};
  ${(props) =>
    props.$isOpen
      ? css`
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
      `
      : css`border-radius: 12px;`};
`;
export default Category;

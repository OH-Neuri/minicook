import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
interface CategoryProps {
  isSelectStyle: boolean;
  category: string;
  to: string;
}
/**
 * Category 컴포넌트
 *
 * 레시피 선택 페이지에서 상단 재료 카테고리 버튼을 나타냅니다.
 * @prop {boolean} isSelectedStyle - 선택된 버튼의 스타일을 적용하기 위한 변수
 * @prop {string} category -카테고리의 제목
 * @prop {to} string -카테고리를 눌렀을 때 이동될 페이지 url
 */
const Category: React.FC<CategoryProps> = ({ to, isSelectStyle, category }) => {
  return (
    <CategoryWrapper to={to} $isSelect={isSelectStyle}>
      {category}
    </CategoryWrapper>
  );
};

const CategoryWrapper = styled(NavLink)<{ $isSelect: boolean }>`
  width: 125px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size:medium;
  
  @media screen and (max-width: 790px) {
    width: 145px;
  }
  @media screen and (max-width: 495px) {
    width: 130px;
  }
  @media screen and (max-width: 400px) {
    width: 110px;
  }
  
  ${(props) =>
    props.$isSelect
      ? css`
        background-color:white;
        font-weight: 700;
        color:#2e4223;
        border : 1px solid ${(props) => props.theme.colors.green3};
        border: 3px solid ${(props) => props.theme.colors.green3};
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        `
      : css`
        background-color:${(props) => props.theme.colors.green2};
        color:white;
        border-radius: 12px;
  `};
`;
export default Category;

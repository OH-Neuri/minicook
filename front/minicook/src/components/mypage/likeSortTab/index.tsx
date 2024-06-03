import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { AppDispatch } from "../../../store/store";

const LikedSortTab: React.FC = () => {
  const tabType = ["기본", "좋아요순", "사전순"];
  const [tabIdx, setTabIdx] = useState<number>(0);
  const dispatch = useDispatch<AppDispatch>();

  const sortTab = (tabNumber: number) => {
    switch (tabNumber) {
      // tab : 0, 날짜순
      case 0:
        //dispatch(getLikedRecipesDate(action.payload));
        break;
      // tab : 1, 좋아요순
      case 1:
        //dispatch(getLikedRecipesLike(action.payload));
        break;
      // tab : 2, 사전순
      case 2:
        //dispatch(getLikedRecipesDictionary(action.payload));
        break;
    }
  };

  const handleTab = (tabIndex: number) => {
    setTabIdx(tabIndex);
    //sortTab(tabIndex);
  };

  return (
    <LikedSortTabWrapper>
      {tabType.map((type, i) => (
        <StyledTab key={i} onClick={() => handleTab(i)} $isSelected={i === tabIdx}>
          {type}
        </StyledTab>
      ))}
    </LikedSortTabWrapper>
  );
};
const LikedSortTabWrapper = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    max-width: 260px;
`;

const StyledTab = styled.div<{ $isSelected: boolean }>`
    width: 50%;
    height: 100%;
    min-width: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size :medium;

    color: #646464;
    cursor: pointer;

    ${(props) =>
      props.$isSelected &&
      css`
        color:#1e1e1e;
        font-size:medium;
        font-weight:600;
        border-bottom:4px solid #1a6900`}
         
`;
export default LikedSortTab;

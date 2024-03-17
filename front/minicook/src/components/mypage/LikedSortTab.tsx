import React from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { RootState } from "../../store/store";

interface LikedSortTabProps {
  onSwitch: (tabIndex: number) => void;
  onSort: (tabIndex: number) => void;
}

const LikedSortTab: React.FC<LikedSortTabProps> = ({ onSwitch, onSort }) => {
  const tabType = ["기본", "좋아요순", "사전순"];
  const tab = useSelector((state: RootState) => state.userLiked.tab);

  const handleTab = (tabIndex: number) => {
    onSwitch(tabIndex);
    //onSort(tabIndex);
  };

  return (
    <LikedSortTabWrapper>
      {tabType.map((type, i) => (
        <StyledTab className='tab' onClick={() => handleTab(i)} $isSelected={i === tab}>
          {type}
        </StyledTab>
      ))}
    </LikedSortTabWrapper>
  );
};
const LikedSortTabWrapper = styled.div`
display: flex;
width: 30%;
height: 50%;
`;

const StyledTab = styled.div<{ $isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  font-size :medium ;
  color: #646464;
  cursor: pointer;
  /*box-sizing: box-box;*/
  ${(props) =>
    props.$isSelected &&
    css`
  color:#1e1e1e;
  font-size :medium ;
  font-weight:600;
  border-bottom:4px solid #1a6900`}
  
`;
export default LikedSortTab;

import React from "react";
import styled, { css } from "styled-components";
interface BadgeProps {
  tagText: string;
  bgColor: string;
  size: string;
}
const Badge: React.FC<BadgeProps> = ({ tagText, bgColor, size }) => {
  return (
    <TagWrapper $bgColor={bgColor} $size={size}>
      {tagText}
    </TagWrapper>
  );
};
const TagWrapper = styled.div<{ $bgColor: string; $size: string }>`
 ${(props) => css` background-color: ${props.$bgColor};`}
 ${(props) => css` width: ${props.$size}; height:${props.$size};`}
position:absolute;
border-radius:25px;
display:flex;
justify-content:center;
align-items:center;
font-weight:700;
color:white;
`;
export default Badge;

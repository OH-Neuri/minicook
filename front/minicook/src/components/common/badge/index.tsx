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
  display:flex;
  justify-content:center;
  align-items:center;
  position:absolute;

  border-radius:25px;
  font-weight:700;
  color:white;

 ${(props) => css` background-color: ${props.$bgColor};`}
 ${(props) => css` width: ${props.$size}; height:${props.$size};`}
`;
export default Badge;

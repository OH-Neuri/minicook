import React, { ReactNode } from "react";
import styled from "styled-components";

interface MyPageTemplate {
  children: ReactNode;
}

const MyPageTemplate: React.FC<MyPageTemplate> = ({ children }) => {
  return <MyPageTemplateWrapper>{children}</MyPageTemplateWrapper>;
};
const MyPageTemplateWrapper = styled.div`
width: 100%;
padding: 1.5rem 23% 0 23%;
height: 100vh;
background-color:#F4F1EB ;
display: flex;
flex-direction: column;
align-items: center;
`;
export default MyPageTemplate;

import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import mainLogo from "./assets/minicook_logo.svg";
interface AuthTemplateProps {
  children: ReactNode;
}
export const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => {
  return (
    <AuthTemplateWrapper>
      <WhiteBox>
        <LogoLink to='/'>
          <img width={100} height={100} alt={"미니쿡 아이콘"} src={mainLogo} />
        </LogoLink>
        {children}
      </WhiteBox>
    </AuthTemplateWrapper>
  );
};

const AuthTemplateWrapper = styled.div`
width: 100%;
height: 100vh;
background-color:#F4F1EB ;
position: absolute;
top: 0;
left:0;
bottom: 0;
right: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const LogoLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
padding-bottom : 1rem;
font-weight: bold;


`;
const WhiteBox = styled.div`
width:400px;
background-color: white;
box-shadow: 0 0 8px rgba(0,0,0,0.025);
padding: 2rem;
border-radius: 2px;
`;

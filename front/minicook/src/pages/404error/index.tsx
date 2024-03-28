import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "./assets/minicook_logo.svg";
import NotFound from "./assets/13315300_5203298.svg";

const ErrorPage = () => {
  return (
    <ErrorPageWrapper>
      <img src={Logo} width={100} height={100} alt='logo' />
      <ErrorImage notFound={NotFound} />
      <Text>
        <h2>PAGE NOT FOUND</h2>
        <h3>
          요청하신 페이지의 주소가 잘못 입력되었거나,
          <br />
          변경, 혹은 삭제되어 페이지를 찾을 수 없습니다.
          <br />
          입력하신 주소를 다시 한번 확인해주세요!
        </h3>
      </Text>
      <StyledLink to='/'>미니쿡 메인화면 바로 가기</StyledLink>
    </ErrorPageWrapper>
  );
};
export default ErrorPage;

const ErrorPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left:0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:#F4F1EB;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-weight: 700;
    font-size: 30px;
    color: #3d3d3d;
  }
  h3 {
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    color: #3d3d3d;
  }
`;

const ErrorImage = styled.div<{ notFound: string }>`
  width: 12%;
  height: 20%;
  background-image: url(${(props) => props.notFound});
  top: 50%;
  left: 50%;
`;

const StyledLink = styled(Link)`
  margin-top: 1rem;
  bottom: 0;
  width: 20%;
  height: 80px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.green1};

  text-align: center;
  line-height: 80px;
  font-weight: 700;
  font-size: 16px;
  color: white;
`;

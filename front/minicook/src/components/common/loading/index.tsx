import React from "react";
import styled from "styled-components";
import Spinner from "./assets/Spinner.gif";

const Background = styled.div`
z-index: 999;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const LoadingText = styled.div`
font: 1rem 'Noto Sans KR';
text-align: center;
`;

const Loading = () => {
  return (
    <Background>
      <LoadingText>로딩중 입니다.</LoadingText>
      <img src={Spinner} alt='spinner' width={200} height={200} />
    </Background>
  );
};

export default Loading;

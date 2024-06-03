import React from "react";
import { FallbackProps } from "react-error-boundary";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorMessage = styled.div`
  margin-bottom: 20px;
  font-size: 1.5rem;
`;

const ErrorFallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <Container>
      <ErrorMessage>오류가 발생했습니다: {error.message}</ErrorMessage>
      <button onClick={resetErrorBoundary}>다시 시도</button>
    </Container>
  );
};

export default ErrorFallback;

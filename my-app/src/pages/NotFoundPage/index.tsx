import React from "react";
import styled from "styled-components";

const NotFoundPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const NotFoundText = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const NotFoundPage: React.FC = () => {
  return (
    <NotFoundPageContainer>
      <NotFoundText>404: Page not found</NotFoundText>
    </NotFoundPageContainer>
  );
};

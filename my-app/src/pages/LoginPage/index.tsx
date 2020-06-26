import React from "react";
import { LoginForm } from "containers";
import styled from "styled-components";

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`;

export const LoginPage: React.FC = () => {
  return (
    <LoginPageContainer>
      <LoginForm />
    </LoginPageContainer>
  );
};

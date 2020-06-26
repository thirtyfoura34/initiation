import React from "react";
import { LoginForm } from "containers";
import styled from "styled-components";

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`;

interface IProps {
  authToken: string;
  setAuthToken: Function;
}

export const LoginPage: React.FC<IProps> = (props) => {
  return (
    <LoginPageContainer>
      <LoginForm
        setAuthToken={props.setAuthToken}
        authToken={props.authToken}
      />
    </LoginPageContainer>
  );
};

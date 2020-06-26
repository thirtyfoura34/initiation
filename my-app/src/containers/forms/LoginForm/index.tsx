import React from "react";
import { Button, Form } from "reactstrap";
import { InputField } from "components";
import styled from "styled-components";

const LoginFormContainer = styled(Form)`
  border: 1px solid #efefef;
  padding: 30px;
  width: 600px;
  min-height: 300px;
  height: auto;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
`;

const LoginFormTitle = styled.div`
  font-size: 30px;
  text-align: center;
`;

const LoginButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 40px;
`;

export const LoginForm: React.FC = () => {
  return (
    <LoginFormContainer>
      <LoginFormTitle>Sign In</LoginFormTitle>
      <InputField
        label="Username"
        type="text"
        name="username"
        id="Username"
        placeholder="Input your username"
      />
      <InputField
        label="Password"
        type="password"
        name="password"
        id="Password"
        placeholder="Input your password"
      />
      <LoginButtons>
        <Button color="primary">Sign In</Button>
      </LoginButtons>
    </LoginFormContainer>
  );
};

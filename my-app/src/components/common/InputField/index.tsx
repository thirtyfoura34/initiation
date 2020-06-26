import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import { ErrorMessage, FieldProps } from "formik";
import styled from "styled-components";

const ErrorContainer = styled.div`
  font-size: 12px;
  color: #d94c5f;
`;

type IProps = {
  type?: "text" | "password";
  label?: string;
  name?: string;
  id?: string;
  placeholder?: string;
} & FieldProps;

export const InputField: React.FC<IProps> = (props) => {
  return (
    <FormGroup>
      <Label for={props.id}>{props.label}</Label>
      <Input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        {...props.field}
      />
      <ErrorContainer>
        <ErrorMessage name={props.field?.name || ""} />
      </ErrorContainer>
    </FormGroup>
  );
};

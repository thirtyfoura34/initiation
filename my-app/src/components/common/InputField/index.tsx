import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

interface IProps {
  type?: "text" | "password";
  label?: string;
  name?: string;
  id?: string;
  placeholder?: string;
}

export const InputField: React.FC<IProps> = (props) => {
  return (
    <FormGroup>
      <Label for={props.id}>{props.label}</Label>
      <Input
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
      />
    </FormGroup>
  );
};

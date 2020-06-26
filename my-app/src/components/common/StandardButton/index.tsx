import React from "react";

interface IProps {
  children: any;
}

export const StandardButton: React.FC<IProps> = (props) => {
  return <button>{props.children}</button>;
};

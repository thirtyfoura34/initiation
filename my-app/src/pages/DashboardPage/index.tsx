import React from "react";
import { Header, Dashboard } from "containers";

interface IProps {
  setAuthToken: Function;
  authToken: string;
}

export const DashboardPage: React.FC<IProps> = (props) => {
  return (
    <>
      <Header setAuthToken={props.setAuthToken} authToken={props.authToken} />
      <Dashboard authToken={props.authToken} />
    </>
  );
};

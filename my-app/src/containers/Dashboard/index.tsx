import React, { useState, useEffect } from "react";
import { getDomainRequest } from "utils/services";
import { useSnackbar } from "notistack";
import { Card, CardTitle, CardText } from "reactstrap";
import styled from "styled-components";

const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const DomainPanel = styled(Card)`
  padding: 40px 60px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
`;

const DomainPanelTitle = styled(CardTitle)`
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  border-bottom: 1px solid #efefef;
`;

const DomainItem = styled(CardText)`
font-size: 30px
  margin-bottom: 5px;
`;

interface IProps {
  authToken: string;
}

export const Dashboard: React.FC<IProps> = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const [domains, setDomains] = useState([]);

  useEffect(() => {
    getDomainRequest(props.authToken)
      .then((res) => {
        setDomains(res.data.domains);
      })
      .catch((err) => {
        enqueueSnackbar("Oops! Something went wrong! Cannot fetch data!", {
          variant: "error",
          autoHideDuration: 2500,
        });
      });
    // eslint-disable-next-line
  }, []);

  return (
    <DashboardContainer>
      <DomainPanel>
        <DomainPanelTitle>Domains</DomainPanelTitle>
        {domains.map((item, idx) => (
          <DomainItem key={idx}>{item}</DomainItem>
        ))}
      </DomainPanel>
    </DashboardContainer>
  );
};

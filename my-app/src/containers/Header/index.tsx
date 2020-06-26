import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { useHistory } from "react-router-dom";

interface IProps {
  setAuthToken: Function;
  authToken: string;
}

export const Header: React.FC<IProps> = (props) => {
  const history = useHistory();
  const handleLogout = () => {
    props.setAuthToken("");
    history.push("/");
  };

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">React Test</NavbarBrand>
      <Nav className="mr-auto" navbar>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Options
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem onClick={handleLogout}>Log out</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
      <NavbarText>UserToken: {props.authToken.slice(0, 5)}...</NavbarText>
    </Navbar>
  );
};

import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DeleteButton } from "../componentsStyle/BasicTagsStyle";
import { HeaderStyle } from "../componentsStyle/HeaderStyle";
import IsLoginContext from "../context/IsLoginContext";

const Header = () => {
  const { closeSession } = useContext(IsLoginContext);

  return (
    <HeaderStyle>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <Link className="link" to={"/alkemy-react-challenge"}>
              Homepage
            </Link>
            <Link className="link" to={"/alkemy-react-challenge/login"}>
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <DeleteButton onClick={closeSession}>Cerrar sesión</DeleteButton>
    </HeaderStyle>
  );
};

export default Header;

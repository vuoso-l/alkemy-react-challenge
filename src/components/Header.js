import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HeaderStyle } from "../componentsStyle/HeaderStyle";

const Header = () => {
  return (
    <HeaderStyle>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
              <Link className="link" to={"/alkemy-react-challenge"}>Homepage</Link>
              <Link className="link" to={"/login"}>Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </HeaderStyle>
  );
};

export default Header;

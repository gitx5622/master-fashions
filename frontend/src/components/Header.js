import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarText,
  Nav,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

const Header = () => {
  return (
    <header>
      <Navbar className="py-2" color="dark" dark={true} expand="lg">
        <Container>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <LinkContainer to="/">
                <NavbarBrand>ProShop</NavbarBrand>
              </LinkContainer>
            </div>
            <div>
              <NavbarToggler onClick={function noRefCheck() {}} />
              <Collapse className="basic-navbar-nav" navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <LinkContainer to="/cart">
                      <NavLink>
                        <i className="fas fa-shopping-cart"></i>Cart
                      </NavLink>
                    </LinkContainer>
                  </NavItem>
                  <NavItem>
                    <LinkContainer to="/login">
                      <NavLink>
                        <i className="fas fa-user"></i>Login
                      </NavLink>
                    </LinkContainer>
                  </NavItem>
                </Nav>
                <NavbarText>Simple Text</NavbarText>
              </Collapse>
            </div>
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

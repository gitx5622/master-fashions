import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Nav,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import { logoutUser } from "../state/actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { userInfo: registeredUserInfo } = useSelector((state) => state.userRegister);

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <header>
      <Navbar className="py-2" color="dark" dark={true} expand="lg">
        <Container>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <LinkContainer to="/">
                <NavbarBrand>Master Fashions</NavbarBrand>
              </LinkContainer>
            </div>
            <div style={{width: '40%'}}>
            <InputGroup className="mb-3 w-70">
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <Form.Control
                placeholder="Search for fashions sneakers and more"
                aria-label="search"
                  aria-describedby="basic-addon1"
                  style={{borderTopRightRadius: '9px', borderBottomRightRadius: '9px'}}
              />
            </InputGroup>
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
                    <LinkContainer to="/">
                      <NavLink>
                        <i className="fas fa-home"></i>Products
                      </NavLink>
                    </LinkContainer>
                  </NavItem>
                  <NavItem>
                    <LinkContainer to="/">
                      <NavLink>
                        <i className="fas fa-home"></i>Help
                      </NavLink>
                    </LinkContainer>
                  </NavItem>
                  {userInfo && registeredUserInfo ? (
                    <UncontrolledDropdown inNavbar nav>
                      <DropdownToggle caret nav>
                        {userInfo.name}
                      </DropdownToggle>
                      <DropdownMenu end>
                        <LinkContainer to="/profile">
                          <DropdownItem>Profile</DropdownItem>
                        </LinkContainer>
                        <DropdownItem onClick={handleLogout}>
                          Logout
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  ) : (
                    <NavItem>
                      <LinkContainer to="/login">
                        <NavLink>
                          <i className="fas fa-user"></i>Login
                        </NavLink>
                      </LinkContainer>
                    </NavItem>
                  )}
                </Nav>
              </Collapse>
            </div>
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

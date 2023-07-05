import React from "react";
import { LinkContainer } from "react-router-bootstrap";
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
import CustomButton from "./Button";
import { Dropdown } from "react-bootstrap";

const Header = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { userInfo: registeredUserInfo } = useSelector(
    (state) => state.userRegister
  );

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <header style={{ background: "white" }}>
      <Navbar expand="lg">
        <Container>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <LinkContainer to="/">
                <NavbarBrand
                  style={{ fontSize: "2.0em" }}
                  className="d-flex align-items-center pt-2 font-weight-bolder"
                >
                  <h1 style={{textTransform: "uppercase"}}>Master Fashions</h1>
                </NavbarBrand>
              </LinkContainer>
            </div>
            <div>
              <NavbarToggler onClick={function noRefCheck() {}} />
              <Collapse className="basic-navbar-nav" navbar>
                <Nav className="ml-auto mr-2 d-flex align-items-center" navbar>
                  <NavItem>
                    <LinkContainer to="/cart">
                      <NavLink className="d-flex gap-2 text-capitalize">
                        <i className="fas fa-shopping-cart" style={{color:"#2B59FF"}}></i>Cart
                      </NavLink>
                    </LinkContainer>
                  </NavItem>
                  <NavItem>
                    <LinkContainer to="/">
                      <NavLink className="d-flex gap-2 text-capitalize">
                        <i className="fas fa-home" style={{color:"#2B59FF"}}></i>Products
                      </NavLink>
                    </LinkContainer>
                  </NavItem>
                  <NavItem>
                    <LinkContainer to="/">
                      <NavLink className="d-flex gap-2 text-capitalize">
                        <i className="fas fa-home" style={{color:"#2B59FF"}}></i>Help
                      </NavLink>
                    </LinkContainer>
                  </NavItem>
                  {userInfo && registeredUserInfo ? (
                    <UncontrolledDropdown inNavbar nav>
                      <DropdownToggle caret nav>
                        <CustomButton
                          children={userInfo.name}
                          active="true"
                          styles={{
                            background: "#2B59FF",
                            borderRadius: "9px",
                            color: "white",
                          }}
                        />
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
                          <i className="fas fa-user"></i>
                          <CustomButton
                            children="Login"
                            color="primary"
                            active="true"
                            styles={{
                              background: "#2B59FF",
                              borderRadius: "9px",
                              color: "white",
                            }}
                          />
                        </NavLink>
                      </LinkContainer>
                    </NavItem>
                  )}
                </Nav>
              </Collapse>
            </div>
          </div>
        </Container>
        <Dropdown.Divider />
      </Navbar>
    </header>
  );
};

export default Header;

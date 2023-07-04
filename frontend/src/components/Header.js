import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { ListGroup, ListGroupItem } from "react-bootstrap";
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

const Header = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { products } = useSelector((state) => state.productList);
  const { userInfo: registeredUserInfo } = useSelector(
    (state) => state.userRegister
  );

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <header>
      <Navbar className="py-2" expand="lg">
        <Container>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <LinkContainer to="/">
                <NavbarBrand className="d-flex align-items-center mt-2 font-weight-bolder">
                  Master Fashions
                </NavbarBrand>
              </LinkContainer>
            </div>
            <div className="">
              <NavbarToggler onClick={function noRefCheck() {}} />
              <Collapse className="basic-navbar-nav" navbar>
                <Nav className="ml-auto mr-2 d-flex align-items-center" navbar>
                  <NavItem>
                    <LinkContainer to="/cart">
                      <NavLink className="d-flex gap-2 text-capitalize">
                        <i className="fas fa-shopping-cart"></i>Cart
                      </NavLink>
                    </LinkContainer>
                  </NavItem>
                  <NavItem>
                    <LinkContainer to="/">
                      <NavLink className="d-flex gap-2 text-capitalize">
                        <i className="fas fa-home"></i>Products
                      </NavLink>
                    </LinkContainer>
                  </NavItem>
                  <NavItem>
                    <LinkContainer to="/">
                      <NavLink className="d-flex gap-2 text-capitalize">
                        <i className="fas fa-home"></i>Help
                      </NavLink>
                    </LinkContainer>
                  </NavItem>
                  {userInfo && registeredUserInfo ? (
                    <UncontrolledDropdown inNavbar nav>
                      <DropdownToggle caret nav>
                        <CustomButton
                          children={userInfo.name}
                          color="primary"
                          active="true"
                          styles={{ borderRadius: "9px" }}
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
      </Navbar>
      <hr style={{marginTop:"-9px"}}/>
    </header>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { Form, FormGroup, Input, Label, Button, Row, Col } from "reactstrap";
import { registerUser } from "../state/actions/userActions";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Message from "../components/Message";
import Loader from "../components/Loader";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [registerCredentials, setRegisterCredetials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    message: null,
  });
  const { loading, error, userInfo } = useSelector(
    (state) => state.userRegister
  );

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const handleChange = ({ currentTarget: input }) => {
    let name = input.name;
    let value = input.value;

    setRegisterCredetials({
      ...registerCredentials,
      [name]: value,
    });
  };

  useEffect(() => {
    if (userInfo && localStorage.userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const registerHandler = (e) => {
    e.preventDefault();
    // DISPATCH REGISTER
    if (registerCredentials.password !== registerCredentials.confirmPassword) {
      setRegisterCredetials({
        ...registerCredentials,
        message: "Password do not match",
      });
    } else {
      dispatch(registerUser(registerCredentials));
    }
  };

  return (
    <FormContainer>
      <h1>SIGN UP</h1>
      {error && <Message variant="danger">{error}</Message>}
      {registerCredentials.message && (
        <Message variant="danger">{registerCredentials.message}</Message>
      )}
      {loading && <Loader />}
      <Form inline onSubmit={registerHandler}>
        <Label className="me-sm-2" for="Name">
          Full Names
        </Label>
        <FormGroup floating>
          <Input
            name="name"
            type="text"
            value={registerCredentials.name}
            onChange={handleChange}
          />
          <Label for="Email">Enter Full Names</Label>
        </FormGroup>{" "}
        <Label className="me-sm-2" for="Email">
          Email Address
        </Label>
        <FormGroup floating>
          <Input
            name="email"
            type="email"
            value={registerCredentials.email}
            onChange={handleChange}
          />
          <Label for="Email">Enter Email</Label>
        </FormGroup>{" "}
        <Label className="me-sm-2" for="Password">
          Password
        </Label>
        <FormGroup floating>
          <Input
            name="password"
            type="password"
            value={registerCredentials.password}
            onChange={handleChange}
          />
          <Label for="Password">Enter Password</Label>
        </FormGroup>
        <Label className="me-sm-2" for="confirmPassword">
          Confirm Password
        </Label>
        <FormGroup floating>
          <Input
            name="confirmPassword"
            type="password"
            value={registerCredentials.confirmPassword}
            onChange={handleChange}
          />
          <Label for="confirmPassword">Enter Confirm Password</Label>
        </FormGroup>
        <Button type="submit" color="primary">
          Register
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          Already have an Account ?
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { Form, FormGroup, Input, Label, Button, Row, Col } from "reactstrap";
import { loginUser } from "../state/actions/userActions";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Message from "../components/Message";
import Loader from "../components/Loader";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [loginCredentials, setLoginCredetials] = useState({
    email: "",
    password: "",
  });
  const { loading, error, userInfo } = useSelector((state) => state.userLogin);

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const handleChange = ({ currentTarget: input }) => {
    let name = input.name;
    let value = input.value;

    setLoginCredetials({
      ...loginCredentials,
      [name]: value,
    });
  };

  useEffect(() => {
    if (userInfo && localStorage.userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const loginHandler = (e) => {
    e.preventDefault();
    // DISPATCH LOGIN
    dispatch(loginUser(loginCredentials));
  };

  return (
    <FormContainer>
      <h1>SIGN IN</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form inline onSubmit={loginHandler}>
        <Label className="me-sm-2" for="Email">
          Email Address
        </Label>
        <FormGroup floating>
          <Input
            name="email"
            type="email"
            value={loginCredentials.email}
            onChange={handleChange}
          />
          <Label for="Email">Enter Email</Label>
        </FormGroup>{" "}
        <Label className="me-sm-2" for="Email">
          Password
        </Label>
        <FormGroup floating>
          <Input
            name="password"
            type="password"
            value={loginCredentials.password}
            onChange={handleChange}
          />
          <Label for="Password">Enter Password</Label>
        </FormGroup>{" "}
        <Button type="submit" color="primary">
          Sign In
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          New Customer?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;

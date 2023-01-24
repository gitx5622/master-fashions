import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, FormGroup, Input, Label, Button, Row, Col } from "reactstrap";
import {
  getUserDetails,
  updateUserProfile,
} from "../state/actions/userActions";
import { useNavigate } from "react-router-dom";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { USER_UPDATE_PROFILE_RESET } from "../state/constants/userContants";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userCredentials, setUserCredetials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    message: null,
  });
  const { error, loading, user } = useSelector((state) => state.userDetails);
  const { success } = useSelector((state) => state.userUpdateDetails);
  const { userInfo: registeredUserInfo } = useSelector(
    (state) => state.userRegister
  );
  const { userInfo } = useSelector((state) => state.userLogin);

  const handleChange = ({ currentTarget: input }) => {
    let name = input.name;
    let value = input.value;

    setUserCredetials({
      ...userCredentials,
      [name]: value,
    });
  };

  useEffect(() => {
    if (!userInfo && !registeredUserInfo && !localStorage.userInfo) {
      navigate("/login");
    } else {
      if (!user || !user?.name) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails("profile"));
      } else {
        setUserCredetials({
          name: userInfo.name,
          email: userInfo.email,
        });
      }
    }
  }, [navigate, userInfo, dispatch, user, registeredUserInfo]);

  const userDetailsHandler = (e) => {
    e.preventDefault();
    const name = userCredentials.name;
    const email = userCredentials.email;
    const password = userCredentials.password;
    // DISPATCH UPDATE USER DEATILS
    if (userCredentials.password !== userCredentials.confirmPassword) {
      setUserCredetials({
        ...userCredentials,
        message: "Password do not match",
      });
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };

  return (
    <Row>
      <Col md={3}>
        <h1>USER DETAILS</h1>
        {error && <Message variant="danger">{error}</Message>}
        {success && <Message variant="success">Profile Updated</Message>}
        {userCredentials.message && (
          <Message variant="danger">{userCredentials.message}</Message>
        )}
        {loading && <Loader />}
        <Form inline onSubmit={userDetailsHandler}>
          <Label className="me-sm-2" for="Name">
            Full Names
          </Label>
          <FormGroup floating>
            <Input
              name="name"
              type="text"
              value={userCredentials.name}
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
              value={userCredentials.email}
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
              value={userCredentials.password}
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
              value={userCredentials.confirmPassword}
              onChange={handleChange}
            />
            <Label for="confirmPassword">Enter Confirm Password</Label>
          </FormGroup>
          <Button type="submit" color="primary">
            Update
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h2>My Orders</h2>
      </Col>
    </Row>
  );
};

export default ProfileScreen;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../state/actions/cartActions";

const ShippingScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };

  return (
    <FormContainer>
      <h2>SHIPPING</h2>
      <Form inline onSubmit={submitHandler}>
        <Label className="me-sm-2" for="Address">
          Address
        </Label>
        <FormGroup floating>
          <Input
            name="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Label for="Address">Enter Address</Label>
        </FormGroup>{" "}
        <Label className="me-sm-2" for="City">
          City
        </Label>
        <FormGroup floating>
          <Input
            name="city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Label for="City">Enter City</Label>
        </FormGroup>{" "}
        <Label className="me-sm-2" for="postalCode">
          Postal Code
        </Label>
        <FormGroup floating>
          <Input
            name="postalCode"
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
          <Label for="postalCode">Enter Postal Code</Label>
        </FormGroup>
        <Label className="me-sm-2" for="Country">
          Country
        </Label>
        <FormGroup floating>
          <Input
            name="country"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <Label for="Country">Enter Country</Label>
        </FormGroup>
        <Button type="submit" color="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;

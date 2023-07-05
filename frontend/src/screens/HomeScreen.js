import React, { useEffect } from "react";
import { Row, Col, Label, FormGroup, Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../state/actions/productActions";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import CarouselItemComponent from "../components/Carousel";
import CustomButton from "../components/Button";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const { loading, products, error } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <Row>
        <Col sm={12}>
          <CarouselItemComponent />
        </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="py-4 mb-4">
          <Row>
            <Col>
              <div
                style={{
                  background: "white",
                  border: "px solid aliceblue",
                  borderRadius: "9px",
                  padding: "20px",
                }}
              >
                <FormGroup check>
                  <Input type="radio" />
                  <Label check>
                    <h3>Pick up</h3>
                  </Label>
                </FormGroup>

                <Row>
                  <Col xs md="4">
                    <h5 style={{ textDecoration: "underline" }}>Locations</h5>
                    <h5 style={{ color: "#2B59FF" }}>
                      At EastMore Splash(Car Wash)
                    </h5>
                  </Col>
                  <Col xs md="4">
                    <h5 style={{ textDecoration: "underline" }}>Date</h5>
                    <h5 style={{ color: "#2B59FF" }}>Any Time</h5>
                  </Col>
                  <Col xs md="4">
                    <h5 style={{ textDecoration: "underline" }}>Contacts</h5>
                    <h2 style={{ color: "#2B59FF" }}>
                      0111985068 or 074179036
                    </h2>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs>
              <div
                style={{
                  background: "white",
                  border: "px solid aliceblue",
                  borderRadius: "9px",
                  padding: "20px",
                }}
              >
                <FormGroup check>
                  <Input type="radio" />
                  <Label>
                    <h3>Dropoff</h3>
                  </Label>
                </FormGroup>

                <Row>
                  <Col xs md="4">
                    <h5 style={{ textDecoration: "underline" }}>Locations</h5>
                    <h5 style={{ color: "#2B59FF" }}>
                      At EastMore Splash(Car Wash)
                    </h5>
                  </Col>
                  <Col xs md="4">
                    <h5 style={{ textDecoration: "underline" }}>Date</h5>
                    <h5 style={{ color: "#2B59FF" }}>Any Time</h5>
                  </Col>
                  <Col xs md="4">
                    <h5 style={{ textDecoration: "underline" }}>Contacts</h5>
                    <h2 style={{ color: "#2B59FF" }}>
                      0111985068 or 074179036
                    </h2>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="py-4">
            <h3>Popular fashions</h3>
            {products?.map((product) => (
              <Col sm={12} md={3} xl={3} key={product._id}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <CustomButton
            children="Show More"
            color="primary"
            active="true"
            width="40px"
            styles={{
              display: "flex",
              justifyContent: "center",
              background: "#2B59FF",
            }}
          />
        </div>
      )}
    </>
  );
};

export default HomeScreen;

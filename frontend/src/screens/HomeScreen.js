import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../state/actions/productActions";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import CarouselItemComponent from "../components/Carousel";
import CustomButton from "../components/Button";
import Form from "react-bootstrap/Form";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const HomeScreen = ({ direction, ...args }) => {
  const dispatch = useDispatch();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

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
        <div>
              <h3>Recommended For You</h3>
              <Row className="">
          <Form className="d-flex gap-4 flex-wrap">
            <Form.Group
              className="flex-grow-1"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control placeholder="Search name" />
            </Form.Group>
            <Form.Group
              className="d-flex gap-3 flex-grow-1 text-center"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control placeholder="Search category" />
              <CustomButton children="Search" color="primary"/>
              <Dropdown
                isOpen={dropdownOpen}
                toggle={toggle}
                direction={direction}
              >
                <DropdownToggle caret>
                  <CustomButton children="Add Filters" color="primary" />
                </DropdownToggle>
                <DropdownMenu {...args}>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem>Some Action</DropdownItem>
                  <DropdownItem text>Dropdown Item Text</DropdownItem>
                  <DropdownItem disabled>Action (disabled)</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Foo Action</DropdownItem>
                  <DropdownItem>Bar Action</DropdownItem>
                  <DropdownItem>Quo Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Dropdown
                isOpen={dropdownOpen}
                toggle={toggle}
                direction={direction}
              >
                <DropdownToggle caret>
                  <CustomButton children="Add Filters" color="primary" />
                </DropdownToggle>
                <DropdownMenu {...args}>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem>Some Action</DropdownItem>
                  <DropdownItem text>Dropdown Item Text</DropdownItem>
                  <DropdownItem disabled>Action (disabled)</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Foo Action</DropdownItem>
                  <DropdownItem>Bar Action</DropdownItem>
                  <DropdownItem>Quo Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Form.Group>
          </Form>
          </Row>
          <Row>
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
            styles={{ display: "flex", justifyContent: "center" }}
          />
        </div>
      )}
    </>
  );
};

export default HomeScreen;

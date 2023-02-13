import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../state/actions/productActions";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";

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
      <h1>Latest Fashions</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <
          {products?.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;

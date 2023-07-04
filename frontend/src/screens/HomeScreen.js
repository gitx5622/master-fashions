import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
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
        <div>
          <Row>
            <h3>Recommended For You</h3>
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
            styles={{ display:"flex", justifyContent: "center" }}
          />
        </div>
      )}
    </>
  );
};

export default HomeScreen;

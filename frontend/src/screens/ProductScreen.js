import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, ListGroup, ListGroupItem, Card, Button } from "reactstrap";
import { Image } from "react-bootstrap";
import Rating from "../components/Rating";
import axios from "axios";

const ProductScreen = () => {
  const [product, setProduct] = useState({});

  let { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  return (
    <div>
      <Link to="/">
        <Button color="primary">Go Back</Button>
      </Link>
      <Row>
        <Col sm={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col sm={4}>
          <ListGroup flush>
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={product?.rating}
                text={`${product.numReviews} Total reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>
              <h5>Description:</h5> {product.description}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col sm={3}>
          <Card>
            <ListGroup flush>
              <ListGroupItem>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <b>${product.price}</b>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Category:</Col>
                  <Col>{product.category}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Brand:</Col>
                  <Col>{product.brand}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  block
                  color="primary"
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;

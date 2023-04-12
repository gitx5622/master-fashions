import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Card,
  Button,
  FormGroup,
  Input,
} from "reactstrap";
import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../components/Rating";
import { singleProduct } from "../state/actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useNavigate } from "react-router-dom";

const ProductScreen = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let { id } = useParams();
  const [qty, setQty] = useState(1);
  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(singleProduct(id));
  }, [id, dispatch]);

  const handleAddToCart = () => {
    navigate(`/cart/${id}?qty=${qty}`)
  }

  return (
    <div>
      <Link to="/">
        <Button color="primary">Go Back</Button>
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col sm={5}>
                <Image src={product.image} alt={product.name}  rounded style={{height:"300px", width:"100%"}}/>
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
                {product.countInStock && (
                  <ListGroupItem>
                    <Row>
                      <Col>Qty:</Col>
                      <Col>
                        <FormGroup>
                          <Input
                            id="exampleSelectMulti"
                            type="select"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1}>{x + 1}</option>
                              )
                            )}
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                  </ListGroupItem>
                )}
                <ListGroupItem>
                  <Button
                    block
                    color="primary"
                    disabled={product.countInStock === 0}
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </Button>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ProductScreen;

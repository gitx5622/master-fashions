import React, { useEffect } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../state/actions/cartActions";
import Message from "../components/Message";
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  FormGroup,
  Input,
  Card,
  Button,
} from "reactstrap";
import { Image } from "react-bootstrap";

const CartScreen = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { search } = useLocation();
  const qty = search ? Number(search.split("=")[1]) : 1;
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=shipping");
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Shooping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            You cart is empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup flush style={{borderRadius:"9px"}}>
            {cartItems?.map((cartItem) => (
              <ListGroupItem key={cartItem.product}>
                <Row>
                  <Col md={2}>
                    <Image
                      src={cartItem.image}
                      alt={cartItem.name}
                      fluid
                      rounded
                    />
                  </Col>
                  <Col md={4}>
                    <Link to={`/product/${cartItem.product}`}>
                      {cartItem.name}
                    </Link>
                  </Col>
                  <Col md={2}>${cartItem.price}</Col>
                  <Col md={2}>
                    <FormGroup>
                      <Input
                        id="exampleSelectMulti"
                        type="select"
                        value={cartItem.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(cartItem.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(cartItem.countInStock).keys()].map((x) => (
                          <option key={x + 1}>{x + 1}</option>
                        ))}
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      color="primary"
                      onClick={() => removeFromCartHandler(cartItem.product)}
                      style={{ background: "#2B59FF" }}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup flush>
            <ListGroupItem>
              <h2 style={{ color: "#2B59FF" }}>
                SubTotal:{" "}
                {cartItems.reduce(
                  (acc, currentItem) => acc + currentItem.qty,
                  0
                )}{" "}
                items
              </h2>
              <h3>
                Total Price: $
                {cartItems
                  .reduce(
                    (acc, currentItem) =>
                      acc + currentItem.qty * currentItem.price,
                    0
                  )
                  .toFixed(2)}
              </h3>
            </ListGroupItem>
            <ListGroupItem>
              <Button
                block
                type="button"
                color="primary"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
                style={{ background: "#2B59FF" }}
              >
                Proceed to Checkout
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;

import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardSubtitle, CardTitle, CardImg } from "reactstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3">
      <Link to={`/product/${product._id}`}>
        <CardImg alt="Card image cap" src={product.image} top width="100%" />
      </Link>
      <CardBody>
        <Link to={`/product/${product._id}`}>
          <CardTitle tag="h5">{product.name}</CardTitle>
        </Link>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {product.brand}
        </CardSubtitle>
        <Rating
          value={product.rating}
          text={`  (${product.numReviews} Total reviews)`}
        />
        <h3>${product.price}</h3>
      </CardBody>
    </Card>
  );
};

export default Product;

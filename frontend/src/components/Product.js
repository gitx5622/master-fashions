import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardSubtitle, CardTitle, CardImg } from "reactstrap";
import CustomButton from "./Button";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-1">
      <Link to={`/product/${product._id}`}>
        <CardImg alt="Card image cap" src={product.image} top width="100%" />
      </Link>
      <CardBody>
        <Link to={`/product/${product._id}`}>
          <CardTitle tag="h4">{product.name}</CardTitle>
        </Link>
        <CardSubtitle className="mb-1 text-muted" tag="h6">
          {product.brand}
        </CardSubtitle>
        <Rating
          value={product.rating}
          text={`  (${product.numReviews} Total reviews)`}
        />
        <h3>${product.price}</h3>
        <CustomButton children="View Details" color="primary" active="true" />
      </CardBody>
    </Card>
  );
};

export default Product;

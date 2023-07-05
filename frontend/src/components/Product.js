import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardSubtitle, CardTitle, CardImg } from "reactstrap";
import CustomButton from "./Button";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-1">
      <Link to={`/product/${product._id}`}>
        <CardImg alt="Card image cap" src={product.image} top width="100%" height="100%" style={{objectFit:"contain"}} />
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
        <div className="d-flex align-items-center justify-content-between">
          <h1>${product.price}</h1>
          <CustomButton children="View Details" color="primary" active="true"  styles={{borderRadius:"9px", background:"#2B59FF"}}/>
        </div>
      </CardBody>
    </Card>
  );
};

export default Product;

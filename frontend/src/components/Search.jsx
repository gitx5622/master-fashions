import React, { useState } from "react";
import { Form, ListGroup, ListGroupItem } from "react-bootstrap";

const Search = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");

  let filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((prod) => (
      <ListGroup>
        <ListGroupItem
          // action
          // active
          // href="#"
          // tag="a"
          style={{
            backgroundColor: "#fff",
            color: "#000",
            border: "none",
            position: "absolute",
            zIndex: 20,
            width: "25%",
          }}
        >
          {prod.name}
        </ListGroupItem>
      </ListGroup>
    ));
  return (
    <div style={{ width: "30%" }}>
      <Form.Control
        placeholder="Search for fashions sneakers and more"
        aria-label="search"
        aria-describedby="basic-addon1"
        name={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          borderRadius: "9px",
          marginBottom: "5px",
          border: "2px solid black",
        }}
      />
      {searchTerm !== "" && filteredProducts.length
        ? { filteredProducts }
        : null}
    </div>
  );
};

export default Search;

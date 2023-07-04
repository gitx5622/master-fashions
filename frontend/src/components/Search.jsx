import React, { useState } from "react";

const Search = () => {
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
            width: "35%",
          }}
        >
          {prod.name}
        </ListGroupItem>
      </ListGroup>
    ));
  return (
    <div style={{ width: "40%" }}>
      <InputGroup className="mb-3 w-70">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Search for fashions sneakers and more"
          aria-label="search"
          aria-describedby="basic-addon1"
          name={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            borderTopRightRadius: "9px",
            borderBottomRightRadius: "15px",
          }}
        />
      </InputGroup>
      {searchTerm !== "" && filteredProducts.length
        ? { filteredProducts }
        : null}
    </div>
  );
};

export default Search;

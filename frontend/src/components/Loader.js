import React from "react";
import HashLoader from "react-spinners/HashLoader";

const Loader = () => {
  return (
    <HashLoader
      style={{
        width: "100%",
        height: "100%",
        margin: "auto",
        display: "block",
      }}
    >
      <span className="sr-only">Loading ...</span>
    </HashLoader>
  );
};

export default Loader;

import React from "react";
import { Button } from "reactstrap";

const CustomButton = ({
  color,
  children,
  active,
  styles,
  block,
  width,
  onClick,
}) => {
  return (
    <Button
      width={width}
      block={block}
      color={color}
      active={active}
      style={styles}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;

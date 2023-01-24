import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; Master Fashions</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

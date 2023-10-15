import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Here's a sample comment

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">&copy; {currentYear} ProShop</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

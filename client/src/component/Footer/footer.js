import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light mt-5">
      <Container fluid>
        <Row className="pt-3 pb-3">
          <Col md={4} className="text-center text-md-left">
            <h5>About Us</h5>
          </Col>
          <Col md={4} className="text-center text-md-left">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Order Status</a>
              </li>
              <li>
                <a href="/">Shipping Information</a>
              </li>
              <li>
                <a href="/">Returns & Exchanges</a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="text-center text-md-left">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Facebook</a>
              </li>
              <li>
                <a href="/">Instagram</a>
              </li>
              <li>
                <a href="/">Twitter</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={12} className="text-center">
            <p>&copy; 2023 E-CO. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

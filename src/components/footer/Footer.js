import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Footer() {
  return (
    <footer>
    <Container>
        <Row>
            <Col className="p-3 mb-2 bg-dark text-white text-center"><p className="m-0">
            Copyright &copy; @React Project by Rishu Goswami
                </p></Col>
        </Row>
    </Container>
  </footer>
  );
}

export default Footer;
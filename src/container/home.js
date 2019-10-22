import React from 'react';
import { Container, Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Row, Col } from 'reactstrap'; 
 
function Home() {
  return (
    <Container>
    <h1 class="bd-title my-3" id="content">Home</h1> 
    <Row>

        <Col sm="6">
            <Card className="mb-2">
            <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            </CardBody> 
                <img src={require('../assets/images/minions.jpg')} alt="minions"/> 
            <CardBody>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
            </CardBody>
        </Card>
        </Col>
    
     
        <Col sm="6">
            <Card className="mb-2">
            <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            </CardBody> 
                <img src={require('../assets/images/minions2.jpg')} alt="minions"/> 
            <CardBody>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
            </CardBody>
        </Card>
        </Col>
    
    </Row>
    </Container> 
  );
}

export default Home;
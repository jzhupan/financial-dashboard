import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";



const SlideOne = () => {
  
  return (
    <Container fluid>
    <Row>
      <Col sm={1} >
      <p className="slide-text" >1 A short paragraph with some descriptive text.</p>
      </Col>
      <Col sm={3} >
      <img className="slide-image" src="https://via.placeholder.com/200/3D1D73/0000FF" />
      </Col>
      <Col sm={1} >
      <p className="slide-text" >1 A short paragraph with some descriptive text.</p>
      </Col>
      <Col sm={3} >
      <img className="slide-image" src="https://via.placeholder.com/200/3D1D73/0000FF" />
      </Col>
      <Col sm={1} >
      <p className="slide-text" >1 A short paragraph with some descriptive text.</p>
      </Col>
      <Col sm={3}>
      <img className="slide-image" src="https://via.placeholder.com/200/3D1D73/0000FF" />
      </Col>
    </Row>
    
    </Container>
  );
};

export default SlideOne;

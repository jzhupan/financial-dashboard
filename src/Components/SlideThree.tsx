import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


const SlideThree = () => {
  return (
    <Container fluid>
    <Row>
      <Col sm={3} >
      <p className="slide-text" >2 A short paragraph with some descriptive text.</p>
      </Col>
      <Col>
      <img className="slide-image" src="https://via.placeholder.com/200/3D1D73/FF0000" />
      </Col>
    </Row>
    </Container>

  )
}

export default SlideThree
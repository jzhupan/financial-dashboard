import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const StockGraphics = () => {
  return (
    <Container>
      <Row>
        <Col className="graphic-box" sm={4}>
          Graphics 1
        </Col>
        <Col className="graphic-box" sm={4}>
          Graphics 2
        </Col>
        <Col className="graphic-box" sm={4}>
          Graphics 3
        </Col>
      </Row>
      <Row>
        <Col className="news-box" sm={12}>
          News
        </Col>
      </Row>
    </Container>
  );
};

export default StockGraphics;

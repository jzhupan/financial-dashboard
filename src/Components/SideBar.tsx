import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const SideBar = () => {
  return (
    <Container className="sidebar-container" fluid>
      <Row>
        <Col > 
        <span>1 A short title.</span>
        </Col>
        <Col >
        <img src="https://via.placeholder.com/50/3D1D73/0000FF" />
        </Col>
        <Col > 
        <span>2 A short title.</span>
        </Col>
        <Col >
        <img src="https://via.placeholder.com/50/3D1D73/0000FF" />
        </Col>
        <Col > 
        <span>3 A short title.</span>
        </Col>
        <Col >
        <img src="https://via.placeholder.com/50/3D1D73/0000FF" />
        </Col>
        <Col > 
        <span>4 A short title.</span>
        </Col>
        <Col >
        <img src="https://via.placeholder.com/50/3D1D73/0000FF" />
        </Col>
        <Col > 
        <span>5 A short title.</span>
        </Col>
        <Col >
        <img src="https://via.placeholder.com/50/3D1D73/0000FF" />
        </Col>
      </Row>
    </Container>
  );
};

export default SideBar;

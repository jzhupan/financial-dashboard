import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <Container>
      <Row>
        <NavBar />
      </Row>
      <Row>
        <Col className="contents-box" sm={10}>
          Contents
        </Col>
        <Col className="side-bar" sm={2}>
          SideBar
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;

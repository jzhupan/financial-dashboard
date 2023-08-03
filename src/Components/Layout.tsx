import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "./NavBar";
import ContentArea from "./ContentArea";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <Container>
      <Row>
        <NavBar />
      </Row>
      <Row>
        <Col className="contents-box" sm={9}>
          <ContentArea />
        </Col>
        <Col className="side-bar" sm={3}>
          <SideBar />
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;

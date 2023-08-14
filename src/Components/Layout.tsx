import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "./NavBar";
import ContentArea from "./ContentArea";
import SideBar from "./SideBar";
import NewsSection from "./NewsSection";
import SideBarTwo from "./SideBarTwo";
import SideBarThree from "./SideBarThree";



const Layout = () => {
  return (

    <Container fluid>
      <Row>
        <NavBar />
      </Row>
      <Row>
        <Col className="contents-box" sm={9}>
          <ContentArea />
          <NewsSection />
        </Col>
        <Col className="side-bar" sm={3}>
          <SideBar />
          <br />
          <SideBarTwo />
          <br />
          <SideBarThree />
        </Col>
      </Row>
    </Container>

  );
};

export default Layout;

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "./NavBar";

import SideBar from "./SideBar";
import NewsSection from "./NewsSection";
import SideBarTwo from "./SideBarTwo";
import SideBarThree from "./SideBarThree";
import ControlledCarousel from "./ControlledCarousel";



const Layout = () => {
  return (

    <Container fluid className="container-box">
      <Row>
        <NavBar />
      </Row>
      <Row>
        <Col className="contents-box" sm={9}>
          <ControlledCarousel />
          <NewsSection />
        </Col>
        <Col className="side-bar" sm={3}>
          <SideBar />
          <SideBarTwo />
          <SideBarThree />
        </Col>
      </Row>
    </Container>

  );
};

export default Layout;

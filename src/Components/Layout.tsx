import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "./NavBar";

import SideBar from "./SideBar";
import NewsSection from "./NewsSection";
import SideBarTwo from "./SideBarTwo";
import SideBarThree from "./SideBarThree";
import ControlledCarousel from "./ControlledCarousel";
import SideBarFour from "./SideBarFour";
import SideBarFive from "./SideBarFive";



const Layout = () => {
  return (

    <Container fluid className="container-box">
      <Row>
        <NavBar />
      </Row>
      <Row>
        <Col className="contents-box" sm={10}>
          <ControlledCarousel />
          <NewsSection />
        </Col>
        <Col className="side-bar" sm={2}>
          <SideBar />
          <SideBarTwo />
          <SideBarThree />
          <SideBarFour />
          <SideBarFive />
        </Col>
      </Row>
    </Container>

  );
};

export default Layout;

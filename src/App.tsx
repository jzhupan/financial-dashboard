
import "./App.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import NavBar from "./Components/NavBar";
import ControlledCarousel from "./Components/ControlledCarousel";
import NewsSection from "./Components/NewsSection";
import SideBar from "./Components/SideBar";
import SideBarTwo from "./Components/SideBarTwo";
import SideBarThree from "./Components/SideBarThree";
import SideBarFour from "./Components/SideBarFour";
import SideBarFive from "./Components/SideBarFive";


//console.log(JSON.stringify(import.meta.env))

function App() {

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
}

export default App;

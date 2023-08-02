import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary nav-bar">
      <Container fluid className="nav-bar">
        <Navbar.Brand href="#">FMP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Education" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action2">
                Stock market indexes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3">
                Financial Ratios
              </NavDropdown.Item>

              <NavDropdown.Item href="#action4">
                Cryptocurrency
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Markets" id="navbarScrollingDropdown-two">
              <NavDropdown.Item href="#action5">
                Most Searched Stocks
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
                Market Indexes: Major Markets
              </NavDropdown.Item>

              <NavDropdown.Item href="#action7">
                Stock Market Top Gainers
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Theme</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search stock..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

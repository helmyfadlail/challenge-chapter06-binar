// import logo from assets
import LogoImage from "../../assets/images/logo.png";

// import bootstrap components
import { Nav, Navbar, Offcanvas, Container } from "react-bootstrap";

// import custom button
import Button from "../custom_button/Button";

// import style navbar
import "./navbar.css";
import { Link } from "react-router-dom";

const _Navbar = () => {
  return (
    <>
      <Navbar expand="md" style={{ backgroundColor: "#f1f3ff" }}>
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={LogoImage} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas id="offcanvasNavbar-expand-md" aria-labelledby="offcanvasNavbarLabel-expand-md" placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">BCR</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 gap-3">
                <Nav.Link href="#action1" className="nav-custom-link">
                  Our Services
                </Nav.Link>
                <Nav.Link href="#action2" className="nav-custom-link">
                  Why Us
                </Nav.Link>
                <Nav.Link href="#action3" className="nav-custom-link">
                  Testimonial
                </Nav.Link>
                <Nav.Link href="#action4" className="nav-custom-link">
                  FAQ
                </Nav.Link>
                <Button href="#register">Register</Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default _Navbar;

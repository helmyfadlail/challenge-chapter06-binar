// import logo from assets
import { Link } from "react-router-dom";
import LogoImage from "../../assets/images/logo.png";

// import css footer
import "./footer.css";

// import bootstrap components
import { Row, Col, Nav } from "react-bootstrap";

// import bootstrap icons
import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiTwitch } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <Row className="mx-sm-5 mx-3 d-flex gap-5 my-5" sm={2} md={4} xs={1}>
        <Col>
          <Nav className="flex-column gap-3">
            <Nav.Item>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</Nav.Item>
            <Nav.Item>binarcarrental@gmail.com</Nav.Item>
            <Nav.Item>081-233-334-808</Nav.Item>
          </Nav>
        </Col>
        <Col style={{ maxWidth: "170px" }}>
          <Nav className="flex-column gap-3">
            <Nav.Item>Our Services</Nav.Item>
            <Nav.Item>Why Us</Nav.Item>
            <Nav.Item>Testimonial</Nav.Item>
            <Nav.Item>FAQ</Nav.Item>
          </Nav>
        </Col>
        <Col>
          <h6>Connect with us</h6>
          <Nav className="flex-row gap-3">
            <Nav.Link href="#" className="bg-custom-blue text-light">
              <FiFacebook />
            </Nav.Link>
            <Nav.Link href="#" className="bg-custom-blue text-light">
              <FiInstagram />
            </Nav.Link>
            <Nav.Link href="#" className="bg-custom-blue text-light">
              <FiTwitter />
            </Nav.Link>
            <Nav.Link href="#" className="bg-custom-blue text-light">
              <FiMail />
            </Nav.Link>
            <Nav.Link href="#" className="bg-custom-blue text-light">
              <FiTwitch />
            </Nav.Link>
          </Nav>
        </Col>
        <Col style={{ maxWidth: "180px" }}>
          <Nav className="flex-column gap-3">
            <Nav.Item>Copyright Binar 2022</Nav.Item>
            <Nav.Item className="p-0">
              <Link to="/">
                <img src={LogoImage} alt="" />
              </Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </>
  );
};

export default Footer;

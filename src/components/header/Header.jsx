// import bootstrap react component
import { Col, Container, Row } from "react-bootstrap";

// import custom button
import Button from "../custom_button/Button";

// import car image from assets
import CarImage from "../../assets/images/mercedes.png";

// import css header
import "./header.css";

const Header = () => {
  return (
    <>
      <Row className="pt-5" md={2} xs={1} style={{ backgroundColor: "#f1f3ff" }}>
        <Col className="d-flex align-items-center mb-5 px-4 px-md-0">
          <Container className="px-3 px-md-5">
            <h1 className="fw-bold">Sewa & Rental Mobil Terbaik di kawasan Nganjuk</h1>
            <p className="paragraph-desc-car">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
              untuk sewa mobil selama 24 jam.
            </p>
            <Button className="" href="/cars">
              Mulai Sewa Mobil
            </Button>
          </Container>
        </Col>
        <Col className="p-3 p-md-0">
          <Container>
            <img src={CarImage} alt="" className="img-car" />
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default Header;

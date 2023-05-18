// import bootstrap components
import { Col, Container, Nav, Row } from "react-bootstrap";

// import image from assets
import ServiceImage from "../../assets/images/service.png";
import ChecklistImage from "../../assets/images/checklist.svg";

const OurService = () => {
  return (
    <>
      <Row md={2} xs={1} className="my-5 py-5 mx-sm-5 mx-3">
        <Col className="d-flex align-items-center">
          <Container className="text-center text-md-end">
            <img src={ServiceImage} alt="" style={{ maxWidth: "350px", width: "100%" }} />
          </Container>
        </Col>
        <Col className="mt-5 p-0">
          <h2 className="fw-bold">Best Car Rental for any kind of trip in Nganjuk!</h2>
          <p className="lh-sm">
            Sewa mobil di Nganjuk bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
            pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
          </p>
          <Nav className="flex-column lh-lg">
            <Nav.Item>
              <img src={ChecklistImage} alt="" className="me-3" />
              <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
            </Nav.Item>
            <Nav.Item>
              <img src={ChecklistImage} alt="" className="me-3" />
              <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
            </Nav.Item>
            <Nav.Item>
              <img src={ChecklistImage} alt="" className="me-3" />
              <p>Sewa Mobil Jangka Panjang Bulanan</p>
            </Nav.Item>
            <Nav.Item>
              <img src={ChecklistImage} alt="" className="me-3" />
              <p>Gratis Antar - Jemput Mobil di Bandara</p>
            </Nav.Item>
            <Nav.Item>
              <img src={ChecklistImage} alt="" className="me-3" />
              <p>Layanan Airport Transfer / Drop In Out</p>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </>
  );
};

export default OurService;

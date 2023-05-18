// import bootstrap components
import { Card, Col, Row } from "react-bootstrap";

// import image icon from assets
import completeIcon from "../../assets/images/icon_complete.png";
import priceIcon from "../../assets/images/icon_price.png";
import hoursIcon from "../../assets/images/icon_24hrs.png";
import profesionalIcon from "../../assets/images/icon_professional.png";

const WhyUs = () => {
  return (
    <>
      <Col className="mx-sm-5 mx-3 px-3 py-5 my-5">
        <Row>
          <h2 className="fw-bold">Why Us?</h2>
          <p>Mengapa harus pilih Binar Car Rental</p>
        </Row>
        <Row xs={1} sm={2} lg={4} className="g-4">
          <Col>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <img src={completeIcon} alt="" width={"40"} />
                <h5 className="fw-semibold mt-3">Mobil Lengkap</h5>
                <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <img src={priceIcon} alt="" width={"40"} />
                <h5 className="fw-semibold mt-3">Harga Murah</h5>
                <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <img src={hoursIcon} alt="" width={"40"} />
                <h5 className="fw-semibold mt-3">Layanan 24 Jam</h5>
                <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <img src={profesionalIcon} alt="" width={"40"} />
                <h5 className="fw-semibold mt-3">Sopir Profesional</h5>
                <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default WhyUs;

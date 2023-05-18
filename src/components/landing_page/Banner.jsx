// import bootstrap components
import { Row, Card } from "react-bootstrap";

// import custom button
import Button from "../custom_button/Button";

const Banner = () => {
  return (
    <>
      <Row className="mx-sm-5 mx-3 px-3 py-5 my-5">
        <Card style={{ backgroundColor: "#0d28a6" }} className="py-5 text-center">
          <Card.Body>
            <h2 className="text-light fw-bold">Sewa Mobil di Nganjuk Sekarang</h2>
            <Card.Text className="m-auto my-4 text-light" style={{ width: "65%" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
            <Button href="/cars" className="m-auto">
              Sewa Mobil
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
};

export default Banner;

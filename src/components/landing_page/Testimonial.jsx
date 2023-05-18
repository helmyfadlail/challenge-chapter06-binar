// import bootstrap components
import { Col, Row } from "react-bootstrap";

// import swiper slide from component
import Slide from "../swiper/Slide";

// import image avatar from assets
import AVTR1 from "../../assets/images/img_photo.png";
import AVTR2 from "../../assets/images/img_photo2.png";

const data = [
  {
    avatar: AVTR1,
    address: "John Dee 32, Bromo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias porro excepturi ad ratione aut,eveniet quidem est totam modi aperiam exercitationem inventore? Quod, animi.",
  },
  {
    avatar: AVTR2,
    address: "John Dee 32, Bromo",
    description:
      "Lorem ipsum dolor sit amet consecteturex alias porro excepturi ad ratione aut,eveniet quidem est totam modi aperiam exercitationem inventore? Quod, animi.",
  },
  {
    avatar: AVTR1,
    address: "John Dee 32, Bromo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. excepturi ad ratione aut,eveniet quidem est totam modi aperiam exercitationem inventore? Quod, animi.",
  },
  {
    avatar: AVTR2,
    address: "John Dee 32, Bromo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at adipisci illo voluptatibus ex alias porro excepturi ad ratione aut,eveniet quidem.",
  },
];

const Testimonial = () => {
  return (
    <>
      <Row className="mx-sm-5 mx-3 px-3 py-5 my-5">
        <Col className="text-center">
          <h2 className="fw-bold">Testimonial</h2>
          <p>Berbagai review positif dari para pelanggan kami</p>
        </Col>
        <Col className="p-0">
          <Slide data={data} />
        </Col>
      </Row>
    </>
  );
};

export default Testimonial;

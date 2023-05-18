// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import slide css
import "./slide.css";

// import required modules
import { Pagination, Navigation } from "swiper";

// import bootstrap componets
import { Row, Col } from "react-bootstrap";

// import bootstrap icons
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

// import image rate from assets
import RATE from "../../assets/images/rate.png";

// import type button from custom button
import { TypeButton } from "../custom_button/Button";

const Slide = (props) => {
  return (
    <>
      <Swiper
        navigation={{
          nextEl: ".review-swiper-button-next",
          prevEl: ".review-swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {props.data.map((item, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <Row>
                <Col xs={12} md={5} className="text-center">
                  <img src={item.avatar} alt="" className="client__avatar" />
                </Col>
                <Col xs={12} md={7} className="d-flex flex-column gap-2 mt-3">
                  <img src={RATE} alt="" width={"100"} className="m-auto m-md-0" />
                  <p className="m-0">{item.description}</p>
                  <small>{item.address}</small>
                </Col>
              </Row>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Col className="d-flex justify-content-center gap-2 mt-4">
        <TypeButton className="review-swiper-button-prev">
          <GrFormPrevious />
        </TypeButton>
        <TypeButton className="review-swiper-button-next">
          <GrFormNext />
        </TypeButton>
      </Col>
    </>
  );
};

export default Slide;

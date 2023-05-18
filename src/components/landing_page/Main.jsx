// import all component for landing page
import Banner from "./Banner";
import FAQ from "./FAQ";
import OurService from "./OurService";
import Testimonial from "./Testimonial";
import WhyUs from "./WhyUs";

// import main css landing page
import "./main.css";

const Main = () => {
  return (
    <>
      <OurService />
      <WhyUs />
      <Testimonial />
      <Banner />
      <FAQ />
    </>
  );
};

export default Main;

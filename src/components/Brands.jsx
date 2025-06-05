import React from "react";
import Container from "./commonLayouts/Container";
import BrandIconOne from "../assets/icons/BrandIconOne";
import BrandIconTwo from "../assets/icons/BrandIconTwo";
import BrandIconThree from "../assets/icons/BrandIconThree";
import BrandIconFour from "../assets/icons/BrandIconFour";
import BrandIconFive from "../assets/icons/BrandIconFive";
import Slider from "react-slick";

const Brands = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <div className="mt-12 mb-24">
        <Container>
          <marquee
            behavior=""
            direction=""
            className={`flex justify-between items-center`}
          >
            <div className="flex justify-between items-center gap-x-[199px]">
              <BrandIconOne />
              <BrandIconTwo />
              <BrandIconThree />
              <BrandIconFour />
              <BrandIconFive />
            </div>
          </marquee>
        </Container>
      </div>
    </>
  );
};

export default Brands;

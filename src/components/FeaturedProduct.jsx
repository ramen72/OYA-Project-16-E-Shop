import React from "react";
import ProductLayout from "./commonLayouts/ProductLayout";
import Container from "./commonLayouts/Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import ArrowIcon from "../assets/icons/ArrowIcon";
import { FeaturedProductData } from "./../data/FeaturedProductData";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "#30303040", color:"black", width: "40px", height:"40px", display: "flex", justifyContent:"center", alignItems:"center", borderRadius:"50%"}}
    //   onClick={onClick}
    // />
    <div
      className={className}
      style={{
        ...style,
        color: "#303030",
        fontSize: "20px",
        border: "1px solid #303030",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: "calc(50% - 803px)",
        zIndex: "99",
      }}
      onClick={onClick}
    >
      <MdArrowBackIosNew />
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "#30303040", color:"black", width: "40px", height:"40px", display: "flex", justifyContent:"center", alignItems:"center", borderRadius:"50%"}}
    //   onClick={onClick}
    // />
    <div
      className={className}
      style={{
        ...style,
        color: "#303030",
        fontSize: "20px",
        border: "1px solid #303030",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: "calc(50% + 745px)",
        zIndex: "99",
      }}
      onClick={onClick}
    >
      <MdArrowForwardIos />
    </div>
  );
}

const FeaturedProduct = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className="mt-20">
        <Container>
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className='font-["Poppins"] font-semibold text-4xl leading-12 text-black capitalize'>
                Featured Products
              </h2>
            </div>
            <div className="flex items-center gap-x-7 text-[#FF624C]">
              <span className='font-["Montserrat"] font-bold text-base leading-6'>
                View All
              </span>
              <ArrowIcon />
            </div>
          </div>
          <div className={`w-[1400px] mx-auto border`}>
            <Slider {...settings} className="flex justify-center gap-1 my-7">
              {FeaturedProductData.map((item, index) => (
                <ProductLayout
                  key={index}
                  imageSrc={item.imageSrc}
                  categories={item.categories}
                  title={item.title}
                  rating={item.rating}
                  totalRating={item.totalRating}
                  price={item.price}
                  discount={item.discount}
                  discountPercentage={item.discountPercentage}
                  discountedPrice={item.discountedPrice}
                />
              ))}
            </Slider>
          </div>
        </Container>
      </div>
    </>
  );
};

export default FeaturedProduct;

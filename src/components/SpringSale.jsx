import React, { useEffect, useState } from "react";
import Container from "./commonLayouts/Container";
import Slider from "react-slick";
import ProductLayout from "./commonLayouts/ProductLayout";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Button from "./Button";
import { SpringSaleData } from "../data/SpringSaleData";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#f4f4f4",
        color: "#303030",
        fontSize: "20px",
        border: "1px solid #303030",
        borderRadius: "50%",
        width: "72px",
        height: "72px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: "0",
        translate: "30px",
        zIndex: "99",
      }}
      onClick={onClick}
    >
      <MdArrowForwardIos />
    </div>
  );
}

const SpringSale = () => {
  const [timerLeft, setTimerLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const saleEndDate = new Date("Jun 30, 2025 10:00 AM +06").getTime();
    const now = new Date().getTime();
    const difference = saleEndDate - now;

    if (difference < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimerLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value) => String(value).padStart(2, "0");

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <>
      <div className={`bg-[#F4F4F4] mt-20 py-16`}>
        <Container>
          <div className="flex justify-start items-center gap-x-[127px] relative">
            <div
              className={`w-[402px] flex flex-col justify-center gap-10 items-center`}
            >
              <h2
                className={`font-["Poppins"] font-bold text-[56px] text-black`}
              >
                Spring Sale
              </h2>
              <div
                className={`flex justify-center items-start gap-x-3 font-["Poppins"] font-semibold text-[36px] text-[#FF624C]`}
              >
                <p className="flex flex-col items-center">
                  {formatTime(timerLeft.days)}{" "}
                  <span
                    className={`font-["Montserrat"] font-normal text-base text-black`}
                  >
                    Days
                  </span>
                </p>
                :
                <p className="flex flex-col items-center">
                  {formatTime(timerLeft.hours)}{" "}
                  <span
                    className={`font-["Montserrat"] font-normal text-base text-black`}
                  >
                    Hours
                  </span>
                </p>
                :
                <p className="flex flex-col items-center">
                  {formatTime(timerLeft.minutes)}{" "}
                  <span
                    className={`font-["Montserrat"] font-normal text-base text-black`}
                  >
                    Minutes
                  </span>
                </p>
                :
                <p className="flex flex-col items-center">
                  {formatTime(timerLeft.seconds)}{" "}
                  <span
                    className={`font-["Montserrat"] font-normal text-base text-black`}
                  >
                    Seconds
                  </span>
                </p>
              </div>
              <div className="w-full pl-10">
                <Button text={"Shop Now"} />
              </div>
            </div>
            <div className={`w-[950px]`}>
              <Slider {...settings} className="flex justify-center gap-1 my-7">
                {SpringSaleData.map((item, index) => (
                  <ProductLayout
                    key={index}
                    width="w-[454px]"
                    hoverBorderColor={"hover:border-transparent"}
                    padding="p-10"
                    bg="bg-[#eaeaea]"
                    imageSrc={item.imageSrc}
                    imgWith="w-[383px]"
                    percentTag={item.percentTag}
                    rounded={true}
                    categories={item.categories}
                    title={item.title}
                    rating={item.rating}
                    totalRating={item.totalRating}
                    ratingColor={"text-white"}
                    ratingHover={true}
                    price={item.price}
                    discount={item.discount}
                    discountPercentage={item.discountPercentage}
                    discountedPrice={item.discountedPrice}
                    border={item.border}
                    stock={item.stock}
                    stockAmount={item.stockAmount}
                    stockText={item.stockText}
                    stockProgressColor={item.stockProgressColor}
                    progressWidth={item.progressWidth}
                    amountTextHover={item.amountTextHover}
                  />
                ))}
              </Slider>
            </div>
            <img
              src="images/SpringDots.svg"
              alt="SpringDots"
              className={`absolute left-10 bottom-0`}
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default SpringSale;

import { useEffect, useRef, useState } from "react";
import Container from "../components/commonLayouts/Container";
import Slider from "react-slick";
import { BsArrowsFullscreen, BsCart3 } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import HeadPhoneIcon from "../assets/icons/HeadPhoneIcon";
import VerifiedIcon from "../assets/icons/VerifiedIcon";
import DeliveryIcon from "../assets/icons/DeliveryIcon";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import CartIcon from "../assets/icons/CartIcon";
import { GrStar } from "react-icons/gr";

const ProductDetailsPages = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [isActiveModel, setIsActiveModel] = useState(false);
  const [image, setImage] = useState("");
  const [productQuantity, setProductQuantity] = useState(1);
  const [isDescriptionShow, setIsDescriptionShow] = useState(false);
  const [isSpecificationShow, setIsSpecificationShow] = useState(true);
  const [isReturnShow, setIsReturnShow] = useState(false);
  const [isReviewsShow, setIsReviewsShow] = useState(false);

  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settingsForSecondSlider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  const handleClickForModel = (url) => {
    setImage(url);
    setIsActiveModel(true);
    console.log("Clicked");
  };
  const handleClickForProduct = (type) => {
    if (productQuantity < 1) return;
    if (type === "minus") {
      setProductQuantity(productQuantity - 1);
    } else if (type === "plus") {
      setProductQuantity(productQuantity + 1);
    }
  };
  const handleClickForDescription = (details) => {
    if (details === "Description") {
      setIsDescriptionShow(true);
      setIsSpecificationShow(false);
      setIsReturnShow(false);
      setIsReviewsShow(false);
    } else if (details === "Specification") {
      setIsDescriptionShow(false);
      setIsSpecificationShow(true);
      setIsReturnShow(false);
      setIsReviewsShow(false);
    } else if (details === "Return") {
      setIsDescriptionShow(false);
      setIsSpecificationShow(false);
      setIsReturnShow(true);
      setIsReviewsShow(false);
    } else if (details === "Reviews") {
      setIsDescriptionShow(false);
      setIsSpecificationShow(false);
      setIsReturnShow(false);
      setIsReviewsShow(true);
    }
  };

  return (
    <>
      <div className={`mt-16 mb-24`}>
        <Container>
          <div
            className={`flex justify-start items-center gap-x-8 font-["montserrat"] font-normal text-base text-black mb-12`}
          >
            <span
              className={`relative after:content=[""] after:w-[1px] after:h-4/5 after:bg-black after:absolute after:-right-4 after:top-1/2 after:-translate-y-1/2`}
            >
              Home
            </span>
            <span
              className={`relative after:content=[""] after:w-[1px] after:h-4/5 after:bg-black after:absolute after:-right-4 after:top-1/2 after:-translate-y-1/2`}
            >
              Computers & Tablets
            </span>
            <span
              className={`relative after:content=[""] after:w-[1px] after:h-4/5 after:bg-black after:absolute after:-right-4 after:top-1/2 after:-translate-y-1/2`}
            >
              Laptop
            </span>
            <span className={`font-bold`}>
              NexSUS ROCK Strix Scar 17 Gaming Laptop
            </span>
          </div>
          <div className={`flex justify-between`}>
            <div className={`w-[54.8026%] `}>
              <Slider
                {...settings}
                asNavFor={nav2}
                ref={(slider) => (sliderRef1 = slider)}
              >
                <div>
                  <div
                    className={`w-full max-h-[541px] rounded-[25px] overflow-hidden relative`}
                  >
                    <img src="images/product-1.jpg" alt="image" />
                    <BsArrowsFullscreen
                      className={`bg-black-25 p-3 text-5xl text-white rounded-sm transition-all duration-200 hover:bg-black-75 cursor-pointer absolute top-3 right-3`}
                      onClick={() =>
                        handleClickForModel("images/product-1.jpg")
                      }
                    />
                  </div>
                </div>
                <div>
                  <div
                    className={`w-full max-h-[541px] rounded-[25px] overflow-hidden relative`}
                  >
                    <img src="images/product-2.jpg" alt="image" />
                    <BsArrowsFullscreen
                      className={`bg-black-25 p-3 text-5xl text-white rounded-sm transition-all duration-200 hover:bg-black-75 cursor-pointer absolute top-3 right-3`}
                      onClick={() =>
                        handleClickForModel("images/product-2.jpg")
                      }
                    />
                  </div>
                </div>
                <div>
                  <div
                    className={`w-full max-h-[541px] rounded-[25px] overflow-hidden relative`}
                  >
                    <img src="images/product-1.jpg" alt="image" />
                    <BsArrowsFullscreen
                      className={`bg-black-25 p-3 text-5xl text-white rounded-sm transition-all duration-200 hover:bg-black-75 cursor-pointer absolute top-3 right-3`}
                      onClick={() =>
                        handleClickForModel("images/product-1.jpg")
                      }
                    />
                  </div>
                </div>
                <div>
                  <div
                    className={`w-full max-h-[541px] rounded-[25px] overflow-hidden relative`}
                  >
                    <img src="images/product-1.jpg" alt="image" />
                    <BsArrowsFullscreen
                      className={`bg-black-25 p-3 text-5xl text-white rounded-sm transition-all duration-200 hover:bg-black-75 cursor-pointer absolute top-3 right-3`}
                      onClick={() =>
                        handleClickForModel("images/product-1.jpg")
                      }
                    />
                  </div>
                </div>
                <div>
                  <div
                    className={`w-full max-h-[541px] rounded-[25px] overflow-hidden relative`}
                  >
                    <img src="images/product-1.jpg" alt="image" />
                    <BsArrowsFullscreen
                      className={`bg-black-25 p-3 text-5xl text-white rounded-sm transition-all duration-200 hover:bg-black-75 cursor-pointer absolute top-3 right-3`}
                      onClick={() =>
                        handleClickForModel("images/product-1.jpg")
                      }
                    />
                  </div>
                </div>
                <div>
                  <div
                    className={`w-full max-h-[541px] rounded-[25px] overflow-hidden relative`}
                  >
                    <img src="images/product-1.jpg" alt="image" />
                    <BsArrowsFullscreen
                      className={`bg-black-25 p-3 text-5xl text-white rounded-sm transition-all duration-200 hover:bg-black-75 cursor-pointer absolute top-3 right-3`}
                      onClick={() =>
                        handleClickForModel("images/product-1.jpg")
                      }
                    />
                  </div>
                </div>
                <div>
                  <div
                    className={`w-full max-h-[541px] rounded-[25px] overflow-hidden relative`}
                  >
                    <img src="images/product-1.jpg" alt="image" />
                    <BsArrowsFullscreen
                      className={`bg-black-25 p-3 text-5xl text-white rounded-sm transition-all duration-200 hover:bg-black-75 cursor-pointer absolute top-3 right-3`}
                      onClick={() =>
                        handleClickForModel("images/product-1.jpg")
                      }
                    />
                  </div>
                </div>
              </Slider>
              <Slider
                {...settingsForSecondSlider}
                asNavFor={nav1}
                ref={(slider) => (sliderRef2 = slider)}
              >
                <div>
                  <div
                    className={`h-[82px] mx-1 rounded-[10px] overflow-hidden`}
                  >
                    <img src="images/product-1.jpg" alt="image" />
                  </div>
                </div>
                <div>
                  <div
                    className={`h-[82px] mx-1 rounded-[10px] overflow-hidden`}
                  >
                    <img src="images/product-2.jpg" alt="image" />
                  </div>
                </div>
                <div>
                  <div
                    className={`h-[82px] mx-1 rounded-[10px] overflow-hidden`}
                  >
                    <img src="images/product-1.jpg" alt="image" />
                  </div>
                </div>
                <div>
                  <div
                    className={`h-[82px] mx-1 rounded-[10px] overflow-hidden`}
                  >
                    <img src="images/product-1.jpg" alt="image" />
                  </div>
                </div>
                <div>
                  <div
                    className={`h-[82px] mx-1 rounded-[10px] overflow-hidden`}
                  >
                    <img src="images/product-1.jpg" alt="image" />
                  </div>
                </div>
                <div>
                  <div
                    className={`h-[82px] mx-1 rounded-[10px] overflow-hidden`}
                  >
                    <img src="images/product-1.jpg" alt="image" />
                  </div>
                </div>
                <div>
                  <div
                    className={`h-[82px] mx-1 rounded-[10px] overflow-hidden`}
                  >
                    <img src="images/product-1.jpg" alt="image" />
                  </div>
                </div>
              </Slider>
            </div>
            <div className={`w-[41.5132%]`}>
              <div
                className={`flex justify-start items-center gap-x-[10px] font-["montserrat"] text-yellow`}
              >
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <span className={`font-normal text-xl text-black`}>
                  ( 142 )
                </span>
              </div>
              <h2
                className={`font-["poppins"] font-semibold text-4xl leading-[46px] mt-4 mb-6 pb-6 border-b b border-black-25`}
              >
                NexSUS ROCK Strix Scar 17 Gaming Laptop 15.7” 1TB SSD 16GB RAM
                Pro
              </h2>
              <div className={`flex justify-start items-center gap-x-4`}>
                <p
                  className={`font-["poppins"] font-bold text-[56px] text-orange`}
                >
                  $2,999.99
                </p>
                <small>
                  <del
                    className={`font-["montserrat"] font-normal text-xl text-black-50`}
                  >
                    $45,499.99
                  </del>
                </small>
              </div>
              <ul className={`flex flex-col gap-y-4`}>
                <li className={`flex justify-start items-center`}>
                  <h5
                    className={`w-[27%] font-["poppins"] font-semibold text-xl leading-[30px] text-black capitalize`}
                  >
                    Brand
                  </h5>
                  <p
                    className={`font-["montserrat"] font-normal text-xl leading-[30px] text-black capitalize`}
                  >
                    NexSUS Tech Company
                  </p>
                </li>
                <li className={`flex justify-start items-center`}>
                  <h5
                    className={`w-[27%] font-["poppins"] font-semibold text-xl leading-[30px] text-black capitalize`}
                  >
                    Size
                  </h5>
                  <p
                    className={`font-["montserrat"] font-normal text-xl leading-[30px] text-black capitalize`}
                  >
                    15.7 x 11.1 x 1.0 inches (W x D x H)
                  </p>
                </li>
                <li className={`flex justify-start items-center`}>
                  <h5
                    className={`w-[27%] font-["poppins"] font-semibold text-xl leading-[30px] text-black capitalize`}
                  >
                    Weight
                  </h5>
                  <p
                    className={`font-["montserrat"] font-normal text-xl leading-[30px] text-black capitalize`}
                  >
                    6.28 pounds
                  </p>
                </li>
                <li className={`flex justify-start items-center`}>
                  <h5
                    className={`w-[27%] font-["poppins"] font-semibold text-xl leading-[30px] text-black capitalize`}
                  >
                    Delivery
                  </h5>
                  <p
                    className={`font-["montserrat"] font-normal text-xl leading-[30px] text-black capitalize`}
                  >
                    Worldwide
                  </p>
                </li>
                <li className={`flex justify-start items-start`}>
                  <h5
                    className={`w-[27%] font-["poppins"] font-semibold text-xl leading-[30px] text-black capitalize`}
                  >
                    Variant
                  </h5>
                  <div
                    className={`w-[73%] flex flex-wrap justify-start items-start gap-x-1 gap-y-2`}
                  >
                    <button
                      className={`font-["montserrat"] font-bold text-base leading-6 text-black py-4 px-8 border border-black-50 rounded-[5px] capitalize cursor-pointer transition-all drop-shadow-blue-300 hover:text-orange hover:border-orange`}
                    >
                      Space Gray
                    </button>
                    <button
                      className={`font-["montserrat"] font-bold text-base leading-6 text-orange py-4 px-8 border border-orange rounded-[5px] capitalize cursor-pointer transition-all drop-shadow-blue-300 hover:text-orange hover:border-orange`}
                    >
                      Off white
                    </button>
                    <button
                      className={`font-["montserrat"] font-bold text-base leading-6 text-black py-4 px-8 border border-black-50 rounded-[5px] capitalize cursor-pointer transition-all drop-shadow-blue-300 hover:text-orange hover:border-orange`}
                    >
                      Jet Black
                    </button>
                    <button
                      className={`font-["montserrat"] font-bold text-base leading-6 text-black-25 py-4 px-8 border border-black-25 rounded-[5px] capitalize cursor-pointer transition-all drop-shadow-blue-300 hover:text-orange hover:border-orange`}
                    >
                      Cinnamon Red
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={`mt-[63px] flex justify-between`}>
            <div className="w-[54.8026%] flex justify-start items-center gap-x-12 text-black">
              <div className="flex items-center gap-x-6">
                <DeliveryIcon />
                <div>
                  <h6 className='font-["Montserrat"] font-bold text-base'>
                    Free Shipping
                  </h6>
                  <p className='font-["Montserrat"] font-normal text-base'>
                    Worldwide available
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-6">
                <VerifiedIcon />
                <div>
                  <h6 className='font-["Montserrat"] font-bold text-base'>
                    100% Guaranteed
                  </h6>
                  <p className='font-["Montserrat"] font-normal text-base'>
                    Receive product first
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-6">
                <img src="images/transIcon.svg" alt="" />
                <div>
                  <h6 className='font-["Montserrat"] font-bold text-base'>
                    Return Available
                  </h6>
                  <p className='font-["Montserrat"] font-normal text-base'>
                    See return policy
                  </p>
                </div>
              </div>
            </div>
            <div className={`w-[41.5132%] flex justify-between items-center`}>
              <div className={`flex items-center gap-x-[80px]`}>
                <button
                  onClick={() => handleClickForProduct("minus")}
                  className={`w-14 h-14 text-base text-black cursor-pointer transition-all duration-200 hover:bg-lightGray rounded-full flex justify-center items-center`}
                >
                  <FaMinus />
                </button>
                <h5
                  className={`min-w-16 font-["poppins"] font-semibold text-4xl text-center text-black`}
                >
                  {productQuantity}
                </h5>
                <button
                  onClick={() => handleClickForProduct("plus")}
                  className={`w-14 h-14 text-base text-black cursor-pointer transition-all duration-200 hover:bg-lightGray rounded-full flex justify-center items-center`}
                >
                  <FaPlus />
                </button>
              </div>
              <div
                className={`w-[253px] flex justify-end items-center gap-x-4`}
              >
                <Link to={"/checkout"}>
                  <Button text="Buy Now" />
                </Link>
                <Link to={"/cart"}>
                  <BsCart3
                    className={`w-[62px] h-[62px] p-3 text-2xl text-orange border border-orange rounded-[10px]`}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className={`mt-[100px] pb-20`}>
            <div className={`flex justify-start items-center gap-x-12`}>
              <button
                onClick={() => handleClickForDescription("Description")}
                className={`font-["poppins"] font-semibold text-2xl leading-[30px] ${
                  isDescriptionShow ? "text-black" : "text-black-25"
                } cursor-pointer ${
                  isDescriptionShow &&
                  `relative after:content=[""] after:w-full after:h-1 after:bg-orange after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2`
                }`}
              >
                Description
              </button>
              <button
                onClick={() => handleClickForDescription("Specification")}
                className={`font-["poppins"] font-semibold text-2xl leading-[30px] ${
                  isSpecificationShow ? "text-black" : "text-black-25"
                } cursor-pointer ${
                  isSpecificationShow &&
                  `relative after:content=[""] after:w-full after:h-1 after:bg-orange after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2`
                }`}
              >
                Specification
              </button>
              <button
                onClick={() => handleClickForDescription("Return")}
                className={`font-["poppins"] font-semibold text-2xl leading-[30px] ${
                  isReturnShow ? "text-black" : "text-black-25"
                } cursor-pointer ${
                  isReturnShow &&
                  `relative after:content=[""] after:w-full after:h-1 after:bg-orange after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2`
                }`}
              >
                Return
              </button>
              <button
                onClick={() => handleClickForDescription("Reviews")}
                className={`font-["poppins"] font-semibold text-2xl leading-[30px] ${
                  isReviewsShow ? "text-black" : "text-black-25"
                } cursor-pointer ${
                  isReviewsShow &&
                  `relative after:content=[""] after:w-full after:h-1 after:bg-orange after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2`
                }`}
              >
                Reviews
              </button>
            </div>
            <div className={`min-h-[430px] mt-[60px]`}>
              {isDescriptionShow && (
                <div>
                  <h4
                    className={`font-bold text-3xl leading-[30px] text-black-75 capitalize mb-7 underline`}
                  >
                    description
                  </h4>
                  <p
                    className={`font-["montserrat"] font-normal text-xl leading-[30px] text-black-75 text-justify`}
                  >
                    <b className={`block`}>
                      NexSUS ROCK Strix Scar 17 Gaming Laptop 15.7” 1TB SSD 16GB
                      RAM Pro
                    </b>{" "}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aspernatur cumque voluptate accusantium doloribus
                    asperiores, rerum dolorem in aperiam suscipit perspiciatis
                    nihil non rem quam iure consectetur quaerat nulla qui.
                    Voluptates deleniti cumque quidem earum ea aperiam
                    voluptatum in nisi facere quae delectus neque iusto
                    voluptatem perspiciatis odit voluptatibus, repellendus
                    reiciendis?
                  </p>
                </div>
              )}
              {isSpecificationShow && (
                <div>
                  <h4
                    className={`font-bold text-3xl leading-[30px] text-black-75 capitalize mb-7 underline`}
                  >
                    Specification Details
                  </h4>
                  <ul className="w-full flex flex-wrap justify-start items-start gap-y-4">
                    <li className={`w-1/2 flex justify-start items-start`}>
                      <h5
                        className={`w-1/4 font-["poppins"] font-semibold text-xl leading-[30px] text-black`}
                      >
                        Brand
                      </h5>
                      <p
                        className={`w-[65%] font-["montserrat"] font-normal text-xl leading-[30px] text-black-75`}
                      >
                        NexSUS Tech Company
                      </p>
                    </li>
                    <li className={`w-1/2 flex justify-start items-start`}>
                      <h5
                        className={`w-1/4 font-["poppins"] font-semibold text-xl leading-[30px] text-black`}
                      >
                        Audio
                      </h5>
                      <p
                        className={`w-[65%] font-["montserrat"] font-normal text-xl leading-[30px] text-black-75`}
                      >
                        2 x 4W speakers with Smart Amp technology
                      </p>
                    </li>
                    <li className={`w-1/2 flex justify-start items-start`}>
                      <h5
                        className={`w-1/4 font-["poppins"] font-semibold text-xl leading-[30px] text-black`}
                      >
                        Display
                      </h5>
                      <p
                        className={`w-[65%] font-["montserrat"] font-normal text-xl leading-[30px] text-black-75`}
                      >
                        17.3-inch Full HD (1920 x 1080) IPS panel, 144Hz refresh
                        rate, 3ms response time, 100% sRGB color gamut,
                        Adaptive-Sync technology, anti-glare
                      </p>
                    </li>
                    <li className={`w-1/2 flex justify-start items-start`}>
                      <h5
                        className={`w-1/4 font-["poppins"] font-semibold text-xl leading-[30px] text-black`}
                      >
                        Connection
                      </h5>
                      <p
                        className={`w-[65%] font-["montserrat"] font-normal text-xl leading-[30px] text-black-75`}
                      >
                        Wi-Fi 6 (802.11ax), Bluetooth 5.1, Gigabit Ethernet,
                        HDMI 2.0b, USB 3.2 Gen 2 Type-C with DisplayPort 1.4 and
                        Power Delivery, 3 x USB 3.2 Gen 1 Type-A, 3.5mm audio
                      </p>
                    </li>
                    <li className={`w-1/2 flex justify-start items-start`}>
                      <h5
                        className={`w-1/4 font-["poppins"] font-semibold text-xl leading-[30px] text-black`}
                      >
                        Processor
                      </h5>
                      <p
                        className={`w-[65%] font-["montserrat"] font-normal text-xl leading-[30px] text-black-75`}
                      >
                        10th Gen Intel Core i9-10980HK (8 cores, 16 threads,
                        2.4GHz base clock speed, up to 5.3GHz turbo boost)
                      </p>
                    </li>
                    <li className={`w-1/2 flex justify-start items-start`}>
                      <h5
                        className={`w-1/4 font-["poppins"] font-semibold text-xl leading-[30px] text-black`}
                      >
                        Keyboard
                      </h5>
                      <p
                        className={`w-[65%] font-["montserrat"] font-normal text-xl leading-[30px] text-black-75`}
                      >
                        Backlit Chiclet keyboard, N-key rollover, per-key RGB
                        lighting, Aura Sync technology
                      </p>
                    </li>
                    <li className={`w-1/2 flex justify-start items-start`}>
                      <h5
                        className={`w-1/4 font-["poppins"] font-semibold text-xl leading-[30px] text-black`}
                      >
                        Graphics
                      </h5>
                      <p
                        className={`w-[65%] font-["montserrat"] font-normal text-xl leading-[30px] text-black-75`}
                      >
                        NVIDIA GeForce RTX 3080 (16GB GDDR6 VRAM)
                      </p>
                    </li>
                    <li className={`w-1/2 flex justify-start items-start`}>
                      <h5
                        className={`w-1/4 font-["poppins"] font-semibold text-xl leading-[30px] text-black`}
                      >
                        Battery
                      </h5>
                      <p
                        className={`w-[65%] font-["montserrat"] font-normal text-xl leading-[30px] text-black-75`}
                      >
                        4-cell 90Wh lithium battery (up to 8 hours battery life)
                      </p>
                    </li>
                    <li className={`w-1/2 flex justify-start items-start`}>
                      <h5
                        className={`w-1/4 font-["poppins"] font-semibold text-xl leading-[30px] text-black`}
                      >
                        Memory
                      </h5>
                      <p
                        className={`w-[65%] font-["montserrat"] font-normal text-xl leading-[30px] text-black-75`}
                      >
                        32GB DDR4-3200 RAM
                      </p>
                    </li>
                    <li className={`w-1/2 flex justify-start items-start`}>
                      <h5
                        className={`w-1/4 font-["poppins"] font-semibold text-xl leading-[30px] text-black`}
                      >
                        Dimensions
                      </h5>
                      <p
                        className={`w-[65%] font-["montserrat"] font-normal text-xl leading-[30px] text-black-75`}
                      >
                        15.7 x 11.1 x 1.0 inches (W x D x H)
                      </p>
                    </li>
                    <li className={`w-1/2 flex justify-start items-start`}>
                      <h5
                        className={`w-1/4 font-["poppins"] font-semibold text-xl leading-[30px] text-black`}
                      >
                        Storage
                      </h5>
                      <p
                        className={`w-[65%] font-["montserrat"] font-normal text-xl leading-[30px] text-black-75`}
                      >
                        1TB PCIe NVMe M.2 SSD
                      </p>
                    </li>
                    <li className={`w-1/2 flex justify-start items-start`}>
                      <h5
                        className={`w-1/4 font-["poppins"] font-semibold text-xl leading-[30px] text-black`}
                      >
                        Weight
                      </h5>
                      <p
                        className={`w-[65%] font-["montserrat"] font-normal text-xl leading-[30px] text-black-75`}
                      >
                        6.28 pounds
                      </p>
                    </li>
                  </ul>
                </div>
              )}
              {isReturnShow && (
                <div>
                  <h4
                    className={`font-bold text-3xl leading-[30px] text-black-75 capitalize mb-7 underline`}
                  >
                    Return Policy
                  </h4>
                  <p
                    className={`font-["montserrat"] font-normal text-xl leading-[30px] text-black-75 text-justify`}
                  >
                    <b className={`block`}>
                      NexSUS ROCK Strix Scar 17 Gaming Laptop 15.7” 1TB SSD 16GB
                      RAM Pro
                    </b>{" "}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aspernatur cumque voluptate accusantium doloribus
                    asperiores, rerum dolorem in aperiam suscipit perspiciatis
                    nihil non rem quam iure consectetur quaerat nulla qui.
                    Voluptates deleniti cumque quidem earum ea aperiam
                    voluptatum in nisi facere quae delectus neque iusto
                    voluptatem perspiciatis odit voluptatibus, repellendus
                    reiciendis?
                  </p>
                </div>
              )}
              {isReviewsShow && (
                <div>
                  <h4
                    className={`font-bold text-3xl leading-[30px] text-black-75 capitalize mb-7 underline`}
                  >
                    overall Reviews
                  </h4>
                  <div className={`flex justify-start items-center gap-x-20`}>
                    <div className={``}>
                      <h6
                        className={`font-["montserrat"] font-bold text-3xl text-black-50`}
                      >
                        <span
                          className={`font-["montserrat"] font-bold text-4xl text-black`}
                        >
                          3
                        </span>
                        /5
                      </h6>
                      <div
                        className={`flex justify-start items-center gap-x-3 my-2`}
                      >
                        <FaStar className={`text-4xl text-yellow`} />
                        <FaStar className={`text-4xl text-yellow`} />
                        <FaStar className={`text-4xl text-yellow`} />
                        <FaStar className={`text-4xl text-black-15`} />
                        <FaStar className={`text-4xl text-black-15`} />
                      </div>
                      <span>105 Ratings</span>
                    </div>
                    <div>
                      <div
                        className={`flex justify-start items-center gap-x-3`}
                      >
                        <div
                          className={`flex justify-start items-center gap-x-1`}
                        >
                          <FaStar className={`text-xl text-yellow`} />
                          <FaStar className={`text-xl text-yellow`} />
                          <FaStar className={`text-xl text-yellow`} />
                          <FaStar className={`text-xl text-yellow`} />
                          <FaStar className={`text-xl text-yellow`} />
                        </div>
                        <div className={`w-36 h-3 bg-black-10`}>
                          <div className={`w-1/2 h-full bg-black-50`}></div>
                        </div>
                        <span
                          className={`font-["montserrat"] font-normal text-xl text-black-75`}
                        >
                          (20)
                        </span>
                      </div>
                      <div
                        className={`flex justify-start items-center gap-x-3`}
                      >
                        <div
                          className={`flex justify-start items-center gap-x-1`}
                        >
                          <FaStar className={`text-xl text-yellow`} />
                          <FaStar className={`text-xl text-yellow`} />
                          <FaStar className={`text-xl text-yellow`} />
                          <FaStar className={`text-xl text-yellow`} />
                          <FaStar className={`text-xl text-black-15`} />
                        </div>
                        <div className={`w-36 h-3 bg-black-10`}>
                          <div className={`w-[45%] h-full bg-black-50`}></div>
                        </div>
                        <span
                          className={`font-["montserrat"] font-normal text-xl text-black-75`}
                        >
                          (15)
                        </span>
                      </div>
                      <div
                        className={`flex justify-start items-center gap-x-3`}
                      >
                        <div
                          className={`flex justify-start items-center gap-x-1`}
                        >
                          <FaStar className={`text-xl text-yellow`} />
                          <FaStar className={`text-xl text-yellow`} />
                          <FaStar className={`text-xl text-yellow`} />
                          <FaStar className={`text-xl text-black-15`} />
                          <FaStar className={`text-xl text-black-15`} />
                        </div>
                        <div className={`w-36 h-3 bg-black-10`}>
                          <div className={`w-[68%] h-full bg-black-50`}></div>
                        </div>
                        <span
                          className={`font-["montserrat"] font-normal text-xl text-black-75`}
                        >
                          (40)
                        </span>
                      </div>
                      <div
                        className={`flex justify-start items-center gap-x-3`}
                      >
                        <div
                          className={`flex justify-start items-center gap-x-1`}
                        >
                          <FaStar className={`text-xl text-yellow`} />
                          <FaStar className={`text-xl text-yellow`} />
                          <FaStar className={`text-xl text-black-15`} />
                          <FaStar className={`text-xl text-black-15`} />
                          <FaStar className={`text-xl text-black-15`} />
                        </div>
                        <div className={`w-36 h-3 bg-black-10`}>
                          <div className={`w-[40%] h-full bg-black-50`}></div>
                        </div>
                        <span
                          className={`font-["montserrat"] font-normal text-xl text-black-75`}
                        >
                          (30)
                        </span>
                      </div>
                      <div
                        className={`flex justify-start items-center gap-x-3`}
                      >
                        <div
                          className={`flex justify-start items-center gap-x-1`}
                        >
                          <FaStar className={`text-xl text-yellow`} />
                          <FaStar className={`text-xl text-black-15`} />
                          <FaStar className={`text-xl text-black-15`} />
                          <FaStar className={`text-xl text-black-15`} />
                          <FaStar className={`text-xl text-black-15`} />
                        </div>
                        <div className={`w-36 h-3 bg-black-10`}>
                          <div className={`w-0 h-full bg-black-50`}></div>
                        </div>
                        <span
                          className={`font-["montserrat"] font-normal text-xl text-black-75`}
                        >
                          (0)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Modal */}
          {isActiveModel && (
            <div
              className={`w-full h-screen bg-black-50 flex justify-center items-center fixed top-0 left-0 z-50 p-5 overflow-hidden border`}
            >
              <IoCloseSharp
                onClick={() => setIsActiveModel(false)}
                className={`absolute top-3 right-3 text-white text-3xl cursor-pointer`}
              />
              <img src={image} alt="image" className={`w-auto h-full`} />
            </div>
          )}
        </Container>
      </div>
    </>
  );
};

export default ProductDetailsPages;

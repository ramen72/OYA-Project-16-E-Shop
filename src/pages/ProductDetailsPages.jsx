import { useEffect, useRef, useState } from "react";
import Container from "../components/commonLayouts/Container";
import Slider from "react-slick";
import { BsArrowsFullscreen } from "react-icons/bs";

const ProductDetailsPages = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
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

  const handleClickForModel = () => {
    console.log("Clicked");
  };

  return (
    <>
      <div className={`mt-16`}>
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
            <div className={`w-[54.8026%] border`}>
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
                      onClick={() => handleClickForModel()}
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
                      onClick={() => handleClickForModel()}
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
                      onClick={() => handleClickForModel()}
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
                      onClick={() => handleClickForModel()}
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
                      onClick={() => handleClickForModel()}
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
                      onClick={() => handleClickForModel()}
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
                      onClick={() => handleClickForModel()}
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
            <div className={`w-[40.9868%] border`}>s</div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProductDetailsPages;

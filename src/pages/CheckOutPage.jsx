import React, { useState } from "react";
import Container from "../components/commonLayouts/Container";
import InputBoxComponent from "../components/InputBoxComponent";
import OrderData from "../data/OrderData";
import Button from "../components/Button";
import QuestionIcon from "../assets/icons/QuestionIcon";
import FooterTop from "../components/footer/FooterTop";

const CheckOutPage = () => {
  const [isActive, setIsActive] = useState("Information");

  return (
    <>
      <Container>
        <div className={`mt-16 mb-24`}>
          <div
            className={`flex justify-start items-center gap-x-8 font-["montserrat"] font-normal text-base text-black mb-12`}
          >
            <span
              className={`relative after:content=[''] after:w-[1px] after:h-4/5 after:bg-black after:absolute after:-right-4 after:top-1/2 after:-translate-y-1/2`}
            >
              Home
            </span>
            <span
              className={`relative after:content=[''] after:w-[1px] after:h-4/5 after:bg-black after:absolute after:-right-4 after:top-1/2 after:-translate-y-1/2`}
            >
              Cart
            </span>
            <span className={`font-bold`}>Checkout</span>
          </div>
          <h1
            className={`font-["poppins"] font-bold text-[56px] leading-[68px] text-black text-center capitalize`}
          >
            Checkout
          </h1>
          <div
            className={`flex justify-center items-center gap-x-12 mt-12 mb-20`}
          >
            <div className={`flex justify-start items-center gap-x-3`}>
              {isActive === "Information" && (
                <span
                  className={`w-[50px] h-[50px] bg-orange rounded-full font-["montserrat"] font-bold text-base text-white flex justify-center items-center`}
                >
                  01
                </span>
              )}
              <button
                onClick={() => setIsActive("Information")}
                className={`font-["poppins"] font-semibold text-2xl leading-[30px] ${
                  isActive === "Information" ? "text-black" : "text-black-25"
                } cursor-pointer ${
                  isActive === "Information" &&
                  `relative after:content=[''] after:w-full after:h-1 after:bg-orange after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2`
                }`}
              >
                Information
              </button>
            </div>
            <div className={`flex justify-start items-center gap-x-3`}>
              {isActive === "Shipping" && (
                <span
                  className={`w-[50px] h-[50px] bg-orange rounded-full font-["montserrat"] font-bold text-base text-white flex justify-center items-center`}
                >
                  20
                </span>
              )}
              <button
                onClick={() => setIsActive("Shipping")}
                className={`font-["poppins"] font-semibold text-2xl leading-[30px] ${
                  isActive === "Shipping" ? "text-black" : "text-black-25"
                } cursor-pointer ${
                  isActive === "Shipping" &&
                  `relative after:content=[''] after:w-full after:h-1 after:bg-orange after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2`
                }`}
              >
                Shipping
              </button>
            </div>
            <div className={`flex justify-start items-center gap-x-3`}>
              {isActive === "Payment" && (
                <span
                  className={`w-[50px] h-[50px] bg-orange rounded-full font-["montserrat"] font-bold text-base text-white flex justify-center items-center`}
                >
                  24
                </span>
              )}
              <button
                onClick={() => setIsActive("Payment")}
                className={`font-["poppins"] font-semibold text-2xl leading-[30px] ${
                  isActive === "Payment" ? "text-black" : "text-black-25"
                } cursor-pointer ${
                  isActive === "Payment" &&
                  `relative after:content=[''] after:w-full after:h-1 after:bg-orange after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2`
                }`}
              >
                Payment
              </button>
            </div>
          </div>
          {isActive === "Information" && (
            <div className={`flex justify-between items-start`}>
              <div className={`w-[57.2368%] `}>
                <h2
                  className={`font-["poppins"] font-semibold text-4xl text-black mb-10`}
                >
                  Billing Details
                </h2>
                <div className={`flex flex-wrap justify-between gap-y-8`}>
                  <div className={`w-[48.7356%]`}>
                    <InputBoxComponent
                      labelText="First Name"
                      mandatory={true}
                      inputType="text"
                      placeholderText="Enter your first name"
                    />
                  </div>
                  <div className={`w-[48.7356%]`}>
                    <InputBoxComponent
                      labelText="Last Name"
                      mandatory={true}
                      inputType="text"
                      placeholderText="Enter your Last name"
                    />
                  </div>
                  <div className={`w-[48.7356%]`}>
                    <InputBoxComponent
                      labelText="Phone Number"
                      mandatory={true}
                      inputType="number"
                      placeholderText="Enter your Phone Number"
                    />
                  </div>
                  <div className={`w-[48.7356%]`}>
                    <InputBoxComponent
                      labelText="Email Address"
                      mandatory={true}
                      inputType="email"
                      placeholderText="name@domain.com"
                    />
                  </div>
                  <div className={`w-full`}>
                    <InputBoxComponent
                      labelText="Address"
                      mandatory={true}
                      inputType="text"
                      placeholderText="Home Address, Auxiliary St. 12345, Anywhere State"
                    />
                  </div>
                  <div className={`w-[48.7356%]`}>
                    <InputBoxComponent
                      labelText="Country"
                      isDropdown={true}
                      mandatory={true}
                      inputType="text"
                      selectOptions={["Bangladesh", "USA", "India", "Japan"]}
                    />
                  </div>
                  <div className={`w-[48.7356%]`}>
                    <InputBoxComponent
                      labelText="State"
                      isDropdown={true}
                      mandatory={true}
                      inputType="text"
                      selectOptions={["Barisal", "Dhaka", "Khulna", "Rongpur"]}
                    />
                  </div>
                  <div className={`w-[48.7356%]`}>
                    <InputBoxComponent
                      labelText="city"
                      isDropdown={true}
                      mandatory={true}
                      inputType="text"
                      selectOptions={["Kuakata", "Dhaka", "Khulna", "Rongpur"]}
                    />
                  </div>
                  <div className={`w-[48.7356%]`}>
                    <InputBoxComponent
                      labelText="ZIP Code"
                      mandatory={false}
                      inputType="number"
                      placeholderText="5552"
                    />
                  </div>
                  <div className={`w-full`}>
                    <InputBoxComponent
                      labelText="Order Notes"
                      mandatory={false}
                      isTextarea={true}
                      inputType="text"
                      placeholderText="Enter your order notes ..."
                    />
                  </div>
                </div>
              </div>
              <div className={`w-[39.0789%]`}>
                <div className={`bg-lightGray p-10 rounded-[25px]`}>
                  <h3
                    className={`font-["poppins] font-semibold text-2xl text-black capitalize mb-12`}
                  >
                    Order Summary
                  </h3>
                  <ul className={`flex flex-col gap-y-10`}>
                    {OrderData.map((item, index) => (
                      <li
                        key={index}
                        className={`font-["montserrat] font-normal text-xl text-black flex justify-between items-center pr-[51px] relative after:content=[''] after:w-full after:h-[1px] after:bg-black-25 after:absolute after:-bottom-5 after:left-1/2 after:-translate-x-1/2 last:after:h-0`}
                      >
                        <span className={`w-[48.6381%] relative`}>
                          {item.orderDetails}
                          {item.isIcon && (
                            <span className={`absolute top-0 right-[90px]`}>
                              <QuestionIcon />
                            </span>
                          )}
                        </span>
                        <span className={`text-center`}>{item.qty}</span>
                        <span className={`w-[18.4825%] text-right`}>
                          {item.amount}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className={`bg-white rounded-[10px] px-5 pt-[27px] pb-6 mt-12`}
                  >
                    <div
                      className={`font-["montserrat] font-bold text-base text-black flex justify-between items-center mb-8`}
                    >
                      <h4>Total</h4>
                      <p>$4,999.00</p>
                    </div>
                    <Button btnWidth={"w-full"} text="Order Now" />
                  </div>
                </div>
              </div>
            </div>
          )}
          {isActive === "Shipping" && (
            <div className={`flex justify-between items-start`}>
              <h2>Shipping will coming soon </h2>
            </div>
          )}
          {isActive === "Payment" && (
            <div className={`flex justify-between items-start`}>
              <h2>Payment will coming soon </h2>
            </div>
          )}
          <div className={`mt-16`}>
            <FooterTop />
          </div>
        </div>
      </Container>
    </>
  );
};

export default CheckOutPage;

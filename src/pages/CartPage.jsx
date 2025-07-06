import React from "react";
import Container from "../components/commonLayouts/Container";

const CartPage = () => {
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
            <span className={`font-bold`}>Cart</span>
          </div>
          <h1
            className={`font-["poppins"] font-bold text-[56px] leading-[68px] text-black capitalize mb-7`}
          >
            Your Cart
          </h1>
        </div>
      </Container>
    </>
  );
};

export default CartPage;

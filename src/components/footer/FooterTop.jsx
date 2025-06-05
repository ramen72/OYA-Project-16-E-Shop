import React from "react";
import Container from "../commonLayouts/Container";
import Button from "../Button";

const FooterTop = () => {
  return (
    <>
      <Container>
        <div className="bg-[linear-gradient(90deg,rgba(244,244,244,1)_29%,rgba(217,217,217,1)_43%)] rounded-3xl py-28 px-24">
          <h3 className='font-["Poppins"] font-semibold text-4xl text-black'>
            Get Our Updates
          </h3>
          <p className='w-[474px] font-["Montserrat"] font-normal text-[20px] leading-[30px] mt-4 mb-8'>
            Browse our wide selection of electronics and find the perfect promo
            for you from newsletter.
          </p>
          <input
            type="text"
            placeholder="Enter your email address ..."
            className="w-[494px] bg-white border border-[#cccccc] py-[18px] px-6 rounded-[10px] mb-4"
          />
          <br />
          <Button text={"Subscribe"} />
        </div>
      </Container>
    </>
  );
};

export default FooterTop;

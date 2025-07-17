import React from "react";
import Container from "./commonLayouts/Container";
import HeadPhoneIcon from "../assets/icons/HeadPhoneIcon";
import VerifiedIcon from "../assets/icons/VerifiedIcon";
import DeliveryIcon from "../assets/icons/DeliveryIcon";

const FacilityComponent = () => {
  return (
    <>
      <Container>
        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center text-black mb-20 pl-2">
          <div className="w-[49%] flex items-center gap-x-3 sm:gap-x-6">
            <div className={`w-3/5 sm:w-auto`}>
              <HeadPhoneIcon />
            </div>
            <div>
              <h6 className='font-["Montserrat"] font-bold text-xs sm:text-base'>
                Responsive
              </h6>
              <p className='font-["Montserrat"] font-normal text-xs sm text-xs:sm:text-base'>
                Customer service available 24/7
              </p>
            </div>
          </div>
          <div className="w-[49%] flex items-center gap-x-3 sm:gap-x-6">
            <div className={`w-1/3 sm:w-auto`}>
              <VerifiedIcon />
            </div>
            <div>
              <h6 className='font-["Montserrat"] font-bold text-xs sm:text-base'>
                Secure
              </h6>
              <p className='font-["Montserrat"] font-normal text-xs sm:text-base'>
                Certified marketplace since 2017
              </p>
            </div>
          </div>
          <div className="w-[49%] mt-3 sm:mt-0 flex items-center gap-x-3 sm:gap-x-6">
            <div className={`w-1/3 sm:w-auto`}>
              <DeliveryIcon />
            </div>
            <div>
              <h6 className='font-["Montserrat"] font-bold text-xs sm:text-base'>
                Shipping
              </h6>
              <p className='font-["Montserrat"] font-normal text-xs sm:text-base'>
                Free, fast, and reliable worldwide
              </p>
            </div>
          </div>
          <div className="w-[49%] mt-3 sm:mt-0 flex items-center gap-x-3 sm:gap-x-6">
            <img src="images/transIcon.svg" alt="" />
            <div>
              <h6 className='font-["Montserrat"] font-bold text-xs sm:text-base'>
                Transparent
              </h6>
              <p className='font-["Montserrat"] font-normal text-xs sm:text-base'>
                Hassle-free return policy
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default FacilityComponent;

import React from "react";
import Container from "./commonLayouts/Container";
import HeadPhoneIcon from "../assets/icons/HeadPhoneIcon";
import VerifiedIcon from "../assets/icons/VerifiedIcon";
import DeliveryIcon from "../assets/icons/DeliveryIcon";

const FacilityComponent = () => {
  return (
    <>
      <Container>
        <div className="flex justify-between items-center text-black mb-20">
          <div className="flex items-center gap-x-6">
            <HeadPhoneIcon />
            <div>
              <h6 className='font-["Montserrat"] font-bold text-base'>
                Responsive
              </h6>
              <p className='font-["Montserrat"] font-normal text-base'>
                Customer service available 24/7
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <VerifiedIcon />
            <div>
              <h6 className='font-["Montserrat"] font-bold text-base'>
                Secure
              </h6>
              <p className='font-["Montserrat"] font-normal text-base'>
                Certified marketplace since 2017
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <DeliveryIcon />
            <div>
              <h6 className='font-["Montserrat"] font-bold text-base'>
                Shipping
              </h6>
              <p className='font-["Montserrat"] font-normal text-base'>
                Free, fast, and reliable worldwide
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <img src="images/transIcon.svg" alt="" />
            <div>
              <h6 className='font-["Montserrat"] font-bold text-base'>
                Transparent
              </h6>
              <p className='font-["Montserrat"] font-normal text-base'>
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

import React from "react";
import Button from "./Button";
import { HiClock } from "react-icons/hi2";
import { Link } from "react-router-dom";

const TechTalkCard = () => {
  return (
    <>
      <div className="w-[506px] p-6 rounded-4xl transition-all duration-100 border border-transparent hover:p-[52px] hover:border-[#30303040]">
        <div className="w-full h-[406px] rounded-4xl overflow-hidden">
          <img
            src="images/productImage-1.png"
            alt="productImages"
            className="w-full"
          />
        </div>
        <Link
          to={"/product-details"}
          className={`inline-block w-[440px] font-["Poppins"] font-semibold text-2xl leading-[30px] text-[#303030] my-8`}
        >
          High Quality vs Price: Why You Should Upgrade to A Smart TV?
        </Link>
        <div className="flex justify-between items-center ">
          <Button text={"Review"} paddingY={"py-[7px]"} paddingX={"px-5"} />
          <p
            className={`flex items-center gap-x-3 font-["Montserrat"] font-normal text-sm text-[#303030]`}
          >
            <HiClock className={`text-xl`} />
            16 April 2023
          </p>
        </div>
      </div>
    </>
  );
};

export default TechTalkCard;

import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { Link } from "react-router-dom";

const ShareSocialMediaComponent = ({
  bgColor = "bg-lightGray",
  textSize = "text-4xl",
  mainPaddingY = "py-2",
  mainPaddingX = "px-2",
  isBorder = "border",
  borderColor = "border-black-25",
}) => {
  return (
    <>
      <div
        className={`${bgColor} ${mainPaddingY} ${mainPaddingX} ${isBorder} ${borderColor} rounded-4xl shadow-2xl flex justify-center items-center gap-x-3`}
      >
        <Link to={"https://www.facebook.com"} target="_blank">
          <FaFacebookF
            className={`${textSize} p-2 border border-orange hover:bg-orange hover:text-white rounded-full text-orange transition-all duration-300`}
          />
        </Link>
        <Link to={"https://x.com/i/flow/loginm"} target="_blank">
          <IoLogoTwitter
            className={`${textSize} p-2 border border-orange hover:bg-orange hover:text-white rounded-full text-orange transition-all duration-300`}
          />
        </Link>
        <Link
          to={"https://www.instagram.com/accounts/login/?hl=en"}
          target="_blank"
        >
          <FaSquareInstagram
            className={`${textSize} p-2 border border-orange hover:bg-orange hover:text-white rounded-full text-orange transition-all duration-300`}
          />
        </Link>
        <Link to={"https://www.linkedin.com/login"} target="_blank">
          <FaLinkedinIn
            className={`${textSize} p-2 border border-orange hover:bg-orange hover:text-white rounded-full text-orange transition-all duration-300`}
          />
        </Link>
      </div>
    </>
  );
};

export default ShareSocialMediaComponent;

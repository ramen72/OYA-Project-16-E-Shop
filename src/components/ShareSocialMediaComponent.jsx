import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { Link } from "react-router-dom";

const ShareSocialMediaComponent = () => {
  return (
    <>
      <div
        className={`bg-lightGray-75 py-2 px-3 rounded-4xl shadow-2xl flex justify-center items-center gap-x-5 absolute -top-11 right-0`}
      >
        <Link to={"https://www.facebook.com"} target="_blank">
          <FaFacebookF
            className={`bg-white text-4xl p-[8px] hover:bg-orange hover:text-white rounded-full text-orange transition-all duration-300`}
          />
        </Link>
        <Link to={"https://x.com/i/flow/loginm"} target="_blank">
          <IoLogoTwitter
            className={`bg-white text-4xl p-[8px] hover:bg-orange hover:text-white rounded-full text-orange transition-all duration-300`}
          />
        </Link>
        <Link
          to={"https://www.instagram.com/accounts/login/?hl=en"}
          target="_blank"
        >
          <FaSquareInstagram
            className={`bg-white text-4xl p-[8px] hover:bg-orange hover:text-white rounded-full text-orange transition-all duration-300`}
          />
        </Link>
        <Link to={"https://www.linkedin.com/login"} target="_blank">
          <FaLinkedinIn
            className={`bg-white text-4xl p-[8px] hover:bg-orange hover:text-white rounded-full text-orange transition-all duration-300`}
          />
        </Link>
      </div>
    </>
  );
};

export default ShareSocialMediaComponent;

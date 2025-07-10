import React from "react";
import UserIcon from "../assets/icons/UserIcon";
import { HiMiniClock, HiUser } from "react-icons/hi2";
import { Link } from "react-router-dom";

const BlogPostComponent = ({
  width = "w-[512px]",
  height = "h-[500px]",
  imageHeight = "h-[294px]",
  imageHref,
  isCategoryTag = true,
  categoryTagText = "Add Category Tag Text",
  title,
  user,
  date,
}) => {
  return (
    <>
      <Link
        to={"/blog-details"}
        className={`${width} ${height} p-10 transition-all duration-100 border border-transparent hover:border-black-25 rounded-[25px]`}
      >
        <div
          className={`w-full ${imageHeight} bg-lightGray rounded-[25px] overflow-hidden relative`}
        >
          <img
            src={imageHref}
            alt="postImage"
            className="h-full object-center"
          />
          {isCategoryTag && (
            <span
              className={`bg-orange py-[7px] px-5 rounded-[10px] font-["montserrat"] font-bold text-base text-white absolute left-6 top-6`}
            >
              {categoryTagText}
            </span>
          )}
        </div>
        <h2
          className={`font-["poppins"] font-semibold text-2xl leading-[30px] text-black mt-6 mb-[18px]`}
        >
          {title}
        </h2>
        <div className={`flex justify-start items-center gap-x-8`}>
          <p
            className={`flex justify-start items-center gap-x-3 fon-["montserrat"] font-normal text-sm text-black capitalize`}
          >
            <HiUser className={`text-3xl text-black-75`} />
            {user}
          </p>
          <p
            className={`flex justify-start items-center gap-x-3 fon-["montserrat"] font-normal text-sm text-black`}
          >
            <HiMiniClock className={`text-3xl text-black-75`} />
            {date}
          </p>
        </div>
      </Link>
    </>
  );
};

export default BlogPostComponent;

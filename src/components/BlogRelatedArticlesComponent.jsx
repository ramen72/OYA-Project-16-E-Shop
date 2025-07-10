import React, { useState } from "react";
import Button from "./Button";

const BlogRelatedArticlesComponent = ({
  width = "w-[440px]",
  height = "h-[568px]",
  borderWidth = "border",
  borderColor = "border-black-25",
  paddingTop = "pt-[52px]",
  paddingBottom = "pb-12",
  paddingLeft = "pl-[52px]",
  paddingRight = "pr-[52px]",
  title = "Top 10 Best-Selling Products of the Month: Tablet Edition",
  buttonText = "Review",
  dateText = "dateText",
}) => {
  const [ishover, setIshover] = useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setIshover(true)}
        onMouseLeave={() => setIshover(false)}
        className={`${width} ${height} ${borderWidth} ${
          ishover
            ? `${borderColor} ${paddingTop} ${paddingBottom} ${paddingLeft} ${paddingRight}`
            : "border-transparent"
        } rounded-[25px] transition-all duration-300 box-content`}
      >
        <div
          className={`w-full ${
            ishover ? "h-[354px]" : "h-[406px]"
          } transition-all duration-300`}
        >
          <img
            src="../../public/images/blogImage-3.jpg"
            alt=""
            className={`w-full h-full object-cover rounded-[25px]`}
          />
        </div>
        <div className={`mt-8`}>
          <h3
            className={`font-["poppins"] font-semibold text-2xl text-black leading-[30px] mb-8`}
          >
            {title}
          </h3>
          <div className={`flex justify-between items-center`}>
            <Button text={buttonText} paddingY={"py-[7px]"} paddingX={"px-5"} />
            <p
              className={`font-["montserrat"] font-normal text-sm text-black leading-[20px] capitalize`}
            >
              {dateText}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogRelatedArticlesComponent;

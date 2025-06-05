import React, { useState } from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { GrStar } from "react-icons/gr";
import { IoCartOutline, IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProductLayout = ({
  bg = "bg-transparent",
  width = "w-[284px]",
  padding = "p-6",
  border = "border",
  borderColor = "border-transparent",
  imageSrc = "images/productImage-1.png",
  imgWith = "w-[237px]",
  rounded = false,
  categories = "Category Not available",
  title = "Title Not available",
  rating = true,
  ratingColor = "text-yellow",
  ratingHover = false,
  totalRating = 100,
  price = 999,
  discount = false,
  discountPercentage = 10,
  discountedPrice = 118,
  stock = false,
  hoverBorderColor = "hover:border-black-25",
  amountTextHover = false,
  stockAmount = 0,
  stockText = "AVAILABLE",
  stockProgressColor = "bg-black",
  progressWidth = "w-6/10",
}) => {
  let [ratingValue, setRatingValue] = useState(new Array(rating).fill(rating));

  return (
    <div
      className={`${width} ${bg} ${border} ${borderColor}  ${padding} overflow-hidden rounded-lg transition-all duration-300 group hover:bg-white ${hoverBorderColor}`}
    >
      <div className="relative">
        <div className={`${imgWith} mx-auto`}>
          <img src={imageSrc} alt="productImages" className="w-full" />
        </div>
        {discount && (
          <>
            {rounded ? (
              <span className='bg-orange w-[100px] h-[100px] font-["Montserrat"] font-semibold text-2xl text-white rounded-full text-center absolute top-0 -right-1 flex justify-center items-center'>
                {discountPercentage + "%"}
              </span>
            ) : (
              <span className='bg-orange py-[7px] px-5 text-base font-["Montserrat"] font-bold text-white rounded-md text-center absolute -top-2 -right-2'>
                {discountPercentage + "%"}
              </span>
            )}
          </>
        )}
        <div className="flex justify-center items-center gap-x-4 absolute left-1/2 -translate-x-1/2 bottom-1 scale-0 transition-all duration-300 group-hover:scale-100">
          <Link
            to={"/"}
            className="w-[50px] h-[50px] transition-all duration-300 border border-orange bg-white text-orange hover:bg-orange rounded-full hover:text-white text-2xl flex justify-center items-center"
          >
            <IoCartOutline />
          </Link>
          <Link
            to={"/"}
            className="w-[50px] h-[50px] transition-all duration-300 border border-orange bg-white text-orange hover:bg-orange rounded-full hover:text-white text-2xl flex justify-center items-center"
          >
            <FaRegHeart />
          </Link>
          <Link
            to={"/"}
            className="w-[50px] h-[50px] transition-all duration-300 border border-orange bg-white text-orange hover:bg-orange rounded-full hover:text-white text-2xl flex justify-center items-center"
          >
            <IoShareSocialOutline />
          </Link>
        </div>
      </div>
      <div>
        <p className='font-["Montserrat"] font-normal text-sm leading-5 tracking-[5px] text-black uppercase mt-11 mb-4'>
          {categories}
        </p>
        <h3 className='font-["Poppins"] font-semibold text-xl leading-[30px] text-black transition-all duration-300 group-hover:text-orange group-hover:underline'>
          {title}
        </h3>
        <div
          className={`flex items-center gap-2 ${ratingColor} transition-all duration-300 group-hover:text-yellow mt-1`}
        >
          {ratingValue.map((item, index) => (
            <GrStar key={index} className="text-xl" />
          ))}
          <span className='font-["Montserrat"] font-normal text-base text-black'>
            {" "}
            ( {totalRating} )
          </span>
        </div>
        <div className="flex items-baseline gap-x-2 mt-4">
          <p
            className={`font-["Poppins"] font-semibold text-2xl ${
              discount ? "text-orange" : "text-black"
            } transition-all duration-300 ${
              amountTextHover && "group-hover:text-orange"
            }`}
          >
            {discount ? "$" + discountedPrice : "$" + price}
          </p>
          {discount && (
            <del
              className={`font-["Montserrat"] font-normal text-base text-black-50`}
            >
              ${price}
            </del>
          )}
        </div>
        {stock && (
          <div className="w-full h-[30px] bg-black-15 rounded-3xl mt-8 relative">
            <span className='absolute top-1/2 left-1/2 -translate-1/2 text-white font-["Montserrat"] text-sm font-bold uppercase'>
              {stockAmount} {stockText}
            </span>
            <div
              className={`${progressWidth} h-[30px] ${stockProgressColor} rounded-3xl mt-8`}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductLayout;

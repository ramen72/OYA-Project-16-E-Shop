import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";

const CommentsComponent = ({ title, duration, details }) => {
  return (
    <>
      <div>
        <div className={`flex justify-start items-center gap-x-4`}>
          <div className={`w-[62px] h-[62px] bg-lightGray rounded-full`}></div>
          <div>
            <h4
              className={`font-["montserrat"] font-bold text-xl text-black leading-[30px]`}
            >
              {title}
            </h4>
            <div className={`flex justify-start items-center gap-x-8`}>
              <div
                className={`text-lg text-yellow flex justify-start items-center relative after:content-[""] after:w-[1px] after:h-full after:bg-black-75 after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-4`}
              >
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
              </div>
              <p
                className={`font-["montserrat"] font-normal text-xl text-black-75 relative after:content-[""] after:w-[1px] after:h-[60%] after:bg-black-75 after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-4`}
              >
                {duration}
              </p>
              <div className={`flex justify-start items-center gap-x-4`}>
                <AiFillLike className={`text-2xl text-orange`} />
                <FaComment className={`text-2xl text-black-50`} />
              </div>
            </div>
          </div>
        </div>
        <p
          className={`font-["montserrat"] font-normal text-xl text-black leading-[30px] mt-2`}
        >
          &quot;{details}&quot;
        </p>
      </div>
    </>
  );
};

export default CommentsComponent;

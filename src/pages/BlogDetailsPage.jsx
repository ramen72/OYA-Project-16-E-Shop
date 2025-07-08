import React from "react";
import Container from "../components/commonLayouts/Container";
import BlogLeftSideBar from "../components/BlogLeftSideBar";
import { HiMiniClock, HiUser } from "react-icons/hi2";
import { FaComment } from "react-icons/fa";

const BlogDetailsPage = () => {
  return (
    <>
      <div className={`mt-16 mb-[116px]`}>
        <Container>
          <div
            className={`flex justify-start items-center gap-x-8 font-["montserrat"] font-normal text-base text-black mb-16`}
          >
            <span
              className={`capitalize relative after:content=[''] after:w-[1px] after:h-4/5 after:bg-black after:absolute after:-right-4 after:top-1/2 after:-translate-y-1/2`}
            >
              Home
            </span>
            <span
              className={`capitalize relative after:content=[''] after:w-[1px] after:h-4/5 after:bg-black after:absolute after:-right-4 after:top-1/2 after:-translate-y-1/2`}
            >
              blog
            </span>
            <span className={`font-bold`}>
              The Latest Tech Trends You Need to Know About
            </span>
          </div>
          <div className={`mt-10 flex justify-between`}>
            <div className={`w-[28.8816%]`}>
              <BlogLeftSideBar />
            </div>
            <div className={`w-[67.5%] border`}>
              <h1
                className={`w-[85%] font-["poppins"] font-bold text-[56px] leading-[68px] capitalize`}
              >
                The Latest Tech Trends You Need to Know About
              </h1>
              <div className={`flex justify-start items-center gap-x-8 mt-6`}>
                <p
                  className={`flex justify-start items-center gap-x-3 fon-["montserrat"] font-normal text-sm text-black`}
                >
                  <HiUser className={`text-3xl text-black-75`} />
                  Sarah Jones
                </p>
                <p
                  className={`flex justify-start items-center gap-x-3 fon-["montserrat"] font-normal text-sm text-black`}
                >
                  <HiMiniClock className={`text-3xl text-black-75`} />
                  12 April 2023
                </p>
                <p
                  className={`flex justify-start items-center gap-x-3 fon-["montserrat"] font-normal text-sm text-black`}
                >
                  <FaComment className={`text-3xl text-black-75`} />
                  432 comments
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BlogDetailsPage;

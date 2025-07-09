import React from "react";
import Container from "../components/commonLayouts/Container";
import BlogLeftSideBar from "../components/BlogLeftSideBar";
import { HiMiniClock, HiUser } from "react-icons/hi2";
import { FaComment } from "react-icons/fa";
import BlogDetailsData from "../data/BlogDetailsData";

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
            <div className={`w-[67.5%]`}>
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
              <div
                className={`w-full h-[645px] bg-lightGray rounded-[25px] my-12`}
              >
                <img
                  src="../../public/images/blogImage-3.jpg"
                  alt="BlogImage"
                  className="w-full h-full rounded-[25px] object-cover"
                />
              </div>
              <p
                className={`font-["montserrat"] font-normal text-xl text-black leading-[30px] mb-8`}
              >
                Technology is constantly evolving, and keeping up with the
                latest trends can be a daunting task. From new gadgets and
                devices to emerging technologies and industry shifts, it can be
                challenging to stay up to date with the latest tech trends. In
                this article, we'll explore some of the latest tech trends that
                you need to know about to stay ahead of the curve.
              </p>
              <ul className={`flex flex-col gap-y-6`}>
                {BlogDetailsData.map((item, index) => (
                  <li className={`flex justify-start items-start gap-x-[30px]`}>
                    <div className={``}>
                      <span className='bg-orange w-[64px] h-[64px] font-["Montserrat"] font-semibold text-2xl text-white rounded-full text-center flex justify-center items-center'>
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h4
                        className={`font-["montserrat"] font-bold text-xl text-black leading-[30px]`}
                      >
                        {item.title}
                      </h4>
                      <p
                        className={`font-["montserrat"] font-normal text-xl text-black leading-[30px] mt-2`}
                      >
                        {item.details}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <p
                className={`font-["montserrat"] font-normal text-xl text-black leading-[30px] mt-8`}
              >
                In conclusion, staying up to date with the latest tech trends is
                essential for anyone who wants to stay ahead of the curve. From
                5G connectivity and AI to VR and AR, these technologies have the
                potential to transform the way we live and work. By keeping up
                with the latest trends and innovations, you can prepare yourself
                for the future and stay ahead of the competition.
              </p>
              <div
                className={`mt-8 py-7 px-8 bg-lightGray flex flex-wrap justify-start items-start gap-2`}
              >
                <span
                  className={`inline-block py-3 px-[20px] bg-white rounded-[5px]`}
                >
                  Technology
                </span>
                <span
                  className={`inline-block py-3 px-[20px] bg-white rounded-[5px]`}
                >
                  Trends
                </span>
                <span
                  className={`inline-block py-3 px-[20px] bg-white rounded-[5px]`}
                >
                  Innovation
                </span>
                <span
                  className={`inline-block py-3 px-[20px] bg-white rounded-[5px]`}
                >
                  Tips
                </span>
                <span
                  className={`inline-block py-3 px-[20px] bg-white rounded-[5px]`}
                >
                  Artificial Intelligence
                </span>
                <span
                  className={`inline-block py-3 px-[20px] bg-white rounded-[5px]`}
                >
                  Virtual Reality
                </span>
                <span
                  className={`inline-block py-3 px-[20px] bg-white rounded-[5px]`}
                >
                  Augmented Reality
                </span>
                <span
                  className={`inline-block py-3 px-[20px] bg-white rounded-[5px]`}
                >
                  Internet of Things
                </span>
                <span
                  className={`inline-block py-3 px-[20px] bg-white rounded-[5px]`}
                >
                  Internet of Things
                </span>
                <span
                  className={`inline-block py-3 px-[20px] bg-white rounded-[5px]`}
                >
                  Blockchain
                </span>
                <span
                  className={`inline-block py-3 px-[20px] bg-white rounded-[5px]`}
                >
                  Quantum Computing
                </span>
                <span
                  className={`inline-block py-3 px-[20px] bg-white rounded-[5px]`}
                >
                  Emerging Technologies
                </span>
              </div>
              <div className={`mt-20 flex justify-between items-center`}>
                <div>Prev post</div>
                <div>Social media</div>
                <div>Next post</div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BlogDetailsPage;

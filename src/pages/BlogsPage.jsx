import React, { useState } from "react";
import Container from "../components/commonLayouts/Container";
import BlogPostComponent from "../components/BlogPostComponent";
import BlogPostData from "../data/BlogPostData";
import BlogLeftSideBar from "../components/BlogLeftSideBar";
import Pagination from "../components/commonLayouts/Pagination";

const BlogsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 10;

  const startIndex = (currentPage - 1) * itemPerPage;
  const currentBlogPostData = BlogPostData.slice(
    startIndex,
    startIndex + itemPerPage
  );
  return (
    <>
      <div className={`mt-8 mb-10`}>
        <Container>
          <div
            className={`relative bg-lightGray w-full h-[600px] rounded-[15px] overflow-hidden`}
          >
            <img
              src="images/blogCoverPage.png"
              alt="bgImage"
              className={`w-full opacity-50`}
            />
            <div className={`absolute left-[110px] top-1/2 -translate-y-1/2`}>
              <h1
                className={`font-["poppins"] font-bold text-[56px] capitalize`}
              >
                Tech Talk Blog
              </h1>
              <div
                className={`flex justify-start items-center gap-x-8 font-["montserrat"] font-normal text-base text-black mb-12`}
              >
                <span
                  className={`relative after:content=[''] after:w-[1px] after:h-4/5 after:bg-black after:absolute after:-right-4 after:top-1/2 after:-translate-y-1/2`}
                >
                  Home
                </span>
                <span className={`font-bold`}>Blog</span>
              </div>
            </div>
          </div>
          <div className={`mt-10 flex justify-between`}>
            <div className={`w-[28.8816%]`}>
              <BlogLeftSideBar />
            </div>
            <div className={`w-[67.5%]`}>
              <div className={`flex flex-wrap justify-start items-center`}>
                {currentBlogPostData.map((item, index) => (
                  <BlogPostComponent
                    key={index}
                    width={"w-[512px]"}
                    height={"h-[500px"}
                    imageHref={item.imageHref}
                    categoryTagText={item.categoryTagText}
                    title={item.title}
                    user={item.user}
                    date={item.date}
                  />
                ))}
              </div>
              <div className={`text-center mx-auto`}>
                <Pagination
                  totalItems={BlogPostData.length}
                  itemPerPage={itemPerPage}
                  currentPage={currentPage}
                  onPageChange={setCurrentPage}
                  position={true}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BlogsPage;

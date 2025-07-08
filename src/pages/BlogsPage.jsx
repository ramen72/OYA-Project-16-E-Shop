import React from "react";
import Container from "../components/commonLayouts/Container";
import BlogPostComponent from "../components/BlogPostComponent";
import BlogPostData from "../data/BlogPostData";
import BlogLeftSideBar from "../components/BlogLeftSideBar";

const BlogsPage = () => {
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
                {BlogPostData.map((item, index) => (
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
            </div>
            {/* <Pagination
              totalItems={ProductsDataForPagination.length}
              itemPerPage={itemPerPage}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
              position={true}
            /> */}
          </div>
        </Container>
      </div>
    </>
  );
};

export default BlogsPage;

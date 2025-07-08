import React from "react";
import Container from "../components/commonLayouts/Container";
import InputBoxComponent from "../components/InputBoxComponent";
import SearchIcon from "../assets/icons/SearchIcon";
import RecentBlogPost from "../components/RecentBlogPost";
import RecentBlogPostData from "../data/RecentBlogPostData";
import BlogPostComponent from "../components/BlogPostComponent";
import BlogPostData from "../data/BlogPostData";
import Pagination from "../components/commonLayouts/Pagination";

const BlogsPage = () => {
  return (
    <>
      <div className={`mt-8 mb-10`}>
        <Container>
          <div
            className={`relative bg-lightGray w-full h-[600px] rounded-[15px] overflow-hidden`}
          >
            <img src="#" alt="bgImage" />
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
              <div className={`bg-orange p-10 rounded-[10px] mb-10`}>
                <h5
                  className={`font-["poppins"] font-semibold text-2xl text-white capitalize mb-3`}
                >
                  blog search
                </h5>
                <div className={`relative bg-white rounded-[10px]`}>
                  <InputBoxComponent
                    isLabel={false}
                    placeholderText="Search Article ..."
                    paddingTop="pt-[18px]"
                    paddingBottom="pb-[18px]"
                    paddingLeft="pl-8"
                    paddingRight="pr-10"
                  />
                  <div className={`absolute top-1/2 -translate-y-1/2 right-5`}>
                    <SearchIcon />
                  </div>
                </div>
              </div>
              <div className={`bg-black text-white p-10 rounded-[10px] mb-10`}>
                <h5
                  className={`font-["poppins"] font-semibold text-2xl text-white capitalize mb-3`}
                >
                  blog search
                </h5>
                <ul>
                  <li
                    className={`font-["montserrat"] font-normal text-base capitalize pt-[22px] pb-3 border-b border-white-25 last:border-b-0`}
                  >
                    Tech News
                  </li>
                  <li
                    className={`font-["montserrat"] font-normal text-base capitalize pt-[22px] pb-3 border-b border-white-25 last:border-b-0`}
                  >
                    Product Reviews
                  </li>
                  <li
                    className={`font-["montserrat"] font-normal text-base capitalize pt-[22px] pb-3 border-b border-white-25 last:border-b-0`}
                  >
                    How-To Guides
                  </li>
                  <li
                    className={`font-["montserrat"] font-normal text-base capitalize pt-[22px] pb-3 border-b border-white-25 last:border-b-0`}
                  >
                    Lifestyle
                  </li>
                  <li
                    className={`font-["montserrat"] font-normal text-base capitalize pt-[22px] pb-3 border-b border-white-25 last:border-b-0`}
                  >
                    Emerging Technologies
                  </li>
                </ul>
              </div>
              <div className={``}>
                <h3
                  className={`inline-block font-["poppins"] font-semibold text-2xl text-black capitalize relative after:content=[''] after:w-full after:h-1 after:bg-orange after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 mb-11`}
                >
                  Recent Posts
                </h3>
                <div className={`flex flex-col gap-y-6`}>
                  {RecentBlogPostData.map((item, index) => (
                    <RecentBlogPost
                      key={index}
                      imageHref={item.imageHref}
                      title={item.title}
                      dated={item.dated}
                    />
                  ))}
                </div>
              </div>
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

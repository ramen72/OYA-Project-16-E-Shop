import React from "react";
import InputBoxComponent from "./InputBoxComponent";
import SearchIcon from "../assets/icons/SearchIcon";
import RecentBlogPostData from "../data/RecentBlogPostData";
import RecentBlogPost from "./RecentBlogPost";

const BlogLeftSideBar = () => {
  return (
    <>
      <div className={``}>
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
    </>
  );
};

export default BlogLeftSideBar;

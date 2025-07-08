import React from "react";

const RecentBlogPost = ({ imageHref, title, dated }) => {
  return (
    <>
      <div>
        <div
          className={`w-full h-[237px] bg-lightGray rounded-3xl overflow-hidden mb-6`}
        >
          <img src={imageHref} alt="blogPostImage" />
        </div>
        <h2
          className={`font-["poppins"] font-semibold text-xl text-black capitalize mb-2`}
        >
          {title}
        </h2>
        <p
          className={`font-["montserrat"] font-normal text-base text-black capitalize`}
        >
          {dated}
        </p>
      </div>
    </>
  );
};

export default RecentBlogPost;

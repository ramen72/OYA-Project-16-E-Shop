import React, { useState } from "react";
import Container from "../components/commonLayouts/Container";
import WishListData from "../data/WishListData";
import { FaRegTrashAlt } from "react-icons/fa";
import Button from "../components/Button";

const WishListPage = () => {
  const [isDellAndShareBtnShow, setIsDellAndShareBtnShow] = useState(true);
  return (
    <>
      <Container>
        <div className={`mt-16 mb-20`}>
          <div
            className={`flex justify-start items-center gap-x-8 font-["montserrat"] font-normal text-base text-black mb-12`}
          >
            <span
              className={`relative after:content=[''] after:w-[1px] after:h-4/5 after:bg-black after:absolute after:-right-4 after:top-1/2 after:-translate-y-1/2`}
            >
              Home
            </span>
            <span className={`font-bold capitalize`}>wishlist</span>
          </div>
          <h1
            className={`font-["poppins"] font-bold text-[56px] leading-[68px] text-black capitalize mb-7`}
          >
            Your wishlist
          </h1>
          <div className={``}>
            <div
              className={`bg-lightGray py-8 px-14 rounded-[15px] flex font-["montserrat"] font-bold text-base text-black`}
            >
              <div className={`w-[63.3295%] uppercase`}>
                <h3>PRODUCT</h3>
              </div>
              <div className={`w-[15.8381%] uppercase`}>
                <h3>PRICE</h3>
              </div>
              <div className={`w-[27.8324%] uppercase`}>
                <h3>Stock Status</h3>
              </div>
            </div>
            <ul>
              {WishListData.map((item, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setIsDellAndShareBtnShow(index)}
                  onMouseLeave={() => setIsDellAndShareBtnShow(null)}
                  className={`p-10 first:pt-8 rounded-[15px] flex items-center font-["montserrat"] font-bold text-base text-black border border-transparent transition-all duration-200 hover:border-black-25 relative`}
                >
                  <div
                    className={`w-[63.3295%] pr-[90px] flex justify-between items-center gap-x-[62px]`}
                  >
                    <div className={`w-[44.55%] h-[214px] overflow-hidden`}>
                      <img
                        src={item.imageUrl}
                        className={`h-full object-cover`}
                        alt="itemimage"
                      />
                    </div>
                    <div className={`w-[58.0056%]`}>
                      <p
                        className={`font-["montserrat"] font-normal text-base text-black tracking-[5px] uppercase mb-4`}
                      >
                        {item.category}
                      </p>
                      <h3
                        className={`font-["poppins"] font-semibold text-xl text-black`}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <div className={`w-[15.8381%] uppercase`}>
                    <h3
                      className={`font-["poppins"] font-semibold text-xl text-black`}
                    >
                      <span>$</span>
                      {item.price}
                    </h3>
                  </div>
                  <div
                    className={`w-[27.8324%] flex justify-start items-center gap-x-4`}
                  >
                    <h3
                      className={`font-["poppins"] font-semibold text-xl text-black capitalize ${
                        item.stockStatus === "In Stock"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {item.stockStatus}
                    </h3>
                  </div>
                  {isDellAndShareBtnShow === index && (
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 right-10 flex flex-col items-center gap-y-5`}
                    >
                      <button
                        className={`w-16 h-16 rounded-full text-orange border border-orange transition-all duration-300 hover:bg-orange hover:text-white flex justify-center items-center cursor-pointer`}
                      >
                        <FaRegTrashAlt className={`text-3xl`} />
                      </button>
                      <Button
                        text="add to cart"
                        bg="bg-transparent"
                        textColor="text-orange"
                        border="border"
                        borderColor="border-orange"
                        paddingY="py-3"
                        paddingX="px-5"
                        isHover={true}
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};

export default WishListPage;

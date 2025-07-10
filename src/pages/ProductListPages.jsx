import React, { useState } from "react";
import Container from "../components/commonLayouts/Container";
import ProductLayout from "../components/commonLayouts/ProductLayout";
import { ProductsDataForPagination } from "../data/ProductsDataForPagination";
import Pagination from "../components/commonLayouts/Pagination";
import CategoryLeftSideBar from "../components/CategoryLeftSideBar";
import BrandLeftSideBar from "../components/BrandLeftSideBar";
import PriceRange from "../components/PriceRange";
import { IoIosArrowDown } from "react-icons/io";
import { MdGridView } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import FooterTop from "../components/footer/FooterTop";

const ProductListPages = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 16;

  const startIndex = (currentPage - 1) * itemPerPage;
  const currentProducts = ProductsDataForPagination.slice(
    startIndex,
    startIndex + itemPerPage
  );

  return (
    <>
      <div className={`mt-16 mb-20`}>
        <Container>
          <div className={`flex justify-between mb-16`}>
            <div className={`w-[355px] relative`}>
              <div
                className={`bg-lightGray justify-between rounded-[25px] p-12 sticky top-0`}
              >
                <CategoryLeftSideBar />
                <BrandLeftSideBar />
                <PriceRange />
              </div>
            </div>
            <div className={`w-[1139px] relative`}>
              <div className={`pl-6`}>
                <h2
                  className={`font-["poppins"] font-semibold text-4xl leading-11 mb-6`}
                >
                  Products
                </h2>
                <div
                  className={`flex justify-end items-center gap-x-[49px] pb-12`}
                >
                  <div
                    className={`flex items-center gap-x-4 relative after:content=[""] after:w-[1px] after:h-8 after:bg-black-25 after:absolute after:-right-6  after:top-1/2 after:-translate-y-1/2`}
                  >
                    <p className={`font-["mMontserrat] font-normal text-base`}>
                      Sort by
                    </p>
                    <button
                      className={`w-[151px] font-["montserrat] font-bold text-base text-orange capitalize flex justify-between items-center`}
                    >
                      Popularity
                      <IoIosArrowDown />
                    </button>
                  </div>
                  <div
                    className={`flex items-center gap-x-4 relative after:content=[""] after:w-[1px] after:h-8 after:bg-black-25 after:absolute after:-right-6 after:top-1/2 after:-translate-y-1/2`}
                  >
                    <button
                      className={`w-[216px] font-["montserrat] font-bold text-base text-orange capitalize flex justify-between items-center`}
                    >
                      Price Low-to-High
                      <IoIosArrowDown />
                    </button>
                  </div>
                  <div className={`flex justify-end items-center gap-x-3`}>
                    <MdGridView className={`text-2xl text-orange`} />
                    <FaBars className={`text-2xl text-black`} />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-0">
                {currentProducts.map((item, index) => (
                  <ProductLayout
                    key={index}
                    imageSrc={item.imageSrc}
                    categories={`${item.categories}`}
                    title={item.title}
                    rating={item.rating}
                    totalRating={item.totalRating}
                    price={item.price}
                    discount={item.discount}
                    discountPercentage={item.discountPercentage}
                    discountedPrice={item.discountedPrice}
                  />
                ))}
              </div>
              <Pagination
                totalItems={ProductsDataForPagination.length}
                itemPerPage={itemPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                position={true}
              />
            </div>
          </div>
          <FooterTop />
        </Container>
      </div>
    </>
  );
};

export default ProductListPages;

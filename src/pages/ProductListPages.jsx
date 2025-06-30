import React, { useState } from "react";
import Container from "../components/commonLayouts/Container";
import ProductLayout from "../components/commonLayouts/ProductLayout";
import { ProductsDataForPagination } from "../data/ProductsDataForPagination";
import Pagination from "../components/commonLayouts/Pagination";
import CategoryLeftSideBar from "../components/CategoryLeftSideBar";
import BrandLeftSideBar from "../components/BrandLeftSideBar";
import PriceRange from "../components/PriceRange";

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
          <div className={`flex justify-between`}>
            <div className={`w-[355px]`}>
              <div
                className={`bg-lightGray justify-between rounded-[25px] p-12`}
              >
                <CategoryLeftSideBar />
                <BrandLeftSideBar />
                <PriceRange />
              </div>
            </div>
            <div className={`w-[1139px]`}>
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
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProductListPages;

import React, { useState } from "react";
import Container from "./commonLayouts/Container";
import ProductLayout from "./commonLayouts/ProductLayout";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import ArrowIcon from "../assets/icons/ArrowIcon";
import { BestSellerData } from "../data/BestSellerData";

const BestSeller = () => {
  const [newProductFilter, setNewProductFilter] = useState("");

  return (
    <>
      <div className="mt-20 px-2 sm:px-0">
        <Container>
          <div className="flex justify-between ">
            <div className="max-w-[902px]">
              <div className="flex justify-between items-center mb-12">
                <div>
                  <h2 className='font-["Poppins"] font-semibold text-4xl leading-12 text-black capitalize'>
                    Best Seller
                  </h2>
                </div>
                <div className="flex items-center gap-x-7 text-orange">
                  <span className='font-["Montserrat"] font-bold text-base leading-6'>
                    View All
                  </span>
                  <ArrowIcon />
                </div>
              </div>
              <div className="flex flex-wrap gap-5">
                {BestSellerData.map((item, index) => (
                  <ProductLayout
                    key={index}
                    // width={"w-[285px]"}
                    imageSrc={item.imageSrc}
                    categories={item.categories}
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
            </div>
            <div className="max-w-[544px]">
              <img src="images/promoBanner.svg" alt="promoBannerImage" />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BestSeller;

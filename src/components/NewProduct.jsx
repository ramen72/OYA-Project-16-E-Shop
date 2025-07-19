import React, { useState } from "react";
import ProductLayout from "./commonLayouts/ProductLayout";
import Container from "./commonLayouts/Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Button from "./Button";
import { NewProductData } from "./../data/NewProductData";
import { NewProductCategory } from "../data/NewProductCategory";

const currencies = [
  {
    category: "All Categories",
  },
  {
    category: "New Product",
  },
  {
    category: "Up Coming",
  },
];

const NewProduct = () => {
  const [newProductFilter, setNewProductFilter] = useState("");

  return (
    <>
      <div className="mt-20">
        <Container>
          <div className=" sm:flex justify-between items-center mb-12">
            <div>
              <h2 className='font-["Poppins"] font-semibold text-3xl sm:text-4xl leading-[46px] text-black capitalize'>
                new Products
              </h2>
            </div>
            <div className="flex items-center gap-x-4 text-orange">
              <span className='font-["Montserrat"] text-black text-base'>
                Sort by
              </span>
              <div className="">
                <select
                  value={newProductFilter}
                  name="category"
                  onChange={(e) => {
                    const category = NewProductCategory.find(
                      (c) => c.category === e.target.value
                    );
                    setNewProductFilter(category.category);
                  }}
                  className='w-[233px] font-["Montserrat"] font-bold text-base'
                >
                  {NewProductCategory.map((category, index) => (
                    <option key={index} value={category.category}>
                      {category.category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col justify-start gap-6 my-7 mx-2 sm:mx-0">
            {NewProductData.map((item, index) => (
              <ProductLayout
                key={index}
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
          <div className="flex justify-center items-center mt-14">
            <Button
              text={"Load More"}
              bg="none"
              border="border-[1px]"
              textColor={"text-orange"}
              borderColor={"border-orange"}
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default NewProduct;

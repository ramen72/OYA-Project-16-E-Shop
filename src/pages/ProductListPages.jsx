import React, { useState } from "react";
import Container from "../components/commonLayouts/Container";
import ProductCategoriesData from "../data/ProductCategoriesData";
import { MdKeyboardArrowUp } from "react-icons/md";
import ProductBrandsData from "../data/ProductBrandsData";
import ProductLayout from "../components/commonLayouts/ProductLayout";
import { ProductsDataForPagination } from "../data/ProductsDataForPagination";
import Pagination from "../components/commonLayouts/Pagination";
import { Bounce, toast } from "react-toastify";

const ProductListPages = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
  const [isBrandsOpen, setIsBrandsOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isCategorySelected, setIsCategorySelected] = useState(
    ProductCategoriesData
  );
  const [isBrandSelected, setIsBrandSelected] = useState(ProductBrandsData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 16;

  // Categories Dropdown
  const handleClickForCategories = (id) => {
    const newProductCategoriesData = isCategorySelected.map((item) =>
      item.id === id
        ? { ...item, isCategorySelected: !item.isCategorySelected }
        : item
    );
    setIsCategorySelected(newProductCategoriesData);
  };

  // Brands Dropdown
  const handleClickForBrands = (id) => {
    const newProductBrandsData = isBrandSelected.map((item) =>
      item.id === id
        ? { ...item, isBrandSelected: !item.isBrandSelected }
        : item
    );
    setIsBrandSelected(newProductBrandsData);
  };

  // Input range
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000);

  const updateSlider = (type, value) => {
    const parseValue = parseInt(value);
    if (parseValue > 1000 || parseValue < 0) {
      if (type == "min") {
        setMinValue(0);
        console.log("Min and Max value must be in between 0 to 1000");
        return;
      } else {
        setMaxValue(1000);
        toast.error(`Min and Max value must be in between 0 to 1000`, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        console.log("Min and Max value must be in between 0 to 1000");
        return;
      }
    }

    if (isNaN(parseValue)) return;

    if (type == "min") {
      if (parseValue > maxValue) {
        setMinValue(maxValue);
        return;
      } else {
        setMinValue(parseValue);
        return;
      }
    } else {
      if (parseValue < minValue) {
        setMaxValue(minValue);
      } else {
        setMaxValue(parseValue);
      }
    }
  };

  const minPercent = (minValue / 1000) * 100;
  const maxPercent = (maxValue / 1000) * 100;

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
                {/* Category */}
                <div
                  className={`${
                    isCategoriesOpen && "border-b border-black-25 pb-10 mb-10"
                  }`}
                >
                  <button
                    onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                    className={`w-full font-["montserrat"] font-bold text-xl leading-6 text-black capitalize pb-5 flex justify-between items-center `}
                  >
                    Categories
                    <MdKeyboardArrowUp
                      className={`${
                        !isCategoriesOpen && "rotate-180"
                      } cursor-pointer`}
                    />
                  </button>
                  <ul
                    className={`flex flex-col gap-y-3 font-['montserrat'] font-normal text-base leading-6 text-black capitalize overflow-hidden ${
                      !isCategoriesOpen && "scale-y-0 h-0"
                    } transition-all duration-300`}
                  >
                    {isCategorySelected.map((item) => (
                      <li
                        key={item.id}
                        className={`${item.isCategorySelected && "font-bold"}`}
                      >
                        <input
                          type="checkbox"
                          onChange={() => handleClickForCategories(item.id)}
                          checked={item.isCategorySelected}
                          name=""
                          id=""
                          className={`mr-2`}
                        />{" "}
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Brand */}
                <div
                  className={`${
                    isBrandsOpen && "border-b border-black-25 pb-10 mb-10"
                  }`}
                >
                  <button
                    onClick={() => setIsBrandsOpen(!isBrandsOpen)}
                    className={`w-full font-["montserrat"] font-bold text-xl leading-6 text-black capitalize pb-5 flex justify-between items-center `}
                  >
                    Brands
                    <MdKeyboardArrowUp
                      className={`${
                        !isBrandsOpen && "rotate-180"
                      } cursor-pointer`}
                    />
                  </button>
                  <ul
                    className={`flex flex-col gap-y-3 font-['montserrat'] font-normal text-base leading-6 text-black capitalize overflow-hidden ${
                      !isBrandsOpen && "scale-y-0 h-0"
                    } transition-all duration-300`}
                  >
                    {isBrandSelected.map((item) => (
                      <li
                        key={item.id}
                        className={`${item.isBrandSelected && "font-bold"}`}
                      >
                        <input
                          type="checkbox"
                          onChange={() => handleClickForBrands(item.id)}
                          checked={item.isBrandSelected}
                          name=""
                          id=""
                          className={`mr-2`}
                        />{" "}
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Price */}
                <div className={``}>
                  <button
                    onClick={() => setIsPriceOpen(!isPriceOpen)}
                    className={`w-full font-["montserrat"] font-bold text-xl leading-6 text-black capitalize pb-5 flex justify-between items-center `}
                  >
                    Price
                    <MdKeyboardArrowUp
                      className={`${
                        !isPriceOpen && "rotate-180"
                      } cursor-pointer`}
                    />
                  </button>
                  <div
                    className={`flex flex-col gap-y-3 font-['montserrat'] font-normal text-base leading-6 text-black capitalize  ${
                      !isPriceOpen && "scale-y-0 h-0"
                    } transition-all duration-300`}
                  >
                    <div className={`w-[259px]`}>
                      <div className={`flex items-center gap-x-[11px] mb-10`}>
                        <div
                          className={` w-[124px] flex justify-center items-center gap-x-1 border border-black-50 py-7 rounded-[10px] font-["Montserrat"] font-normal text-base`}
                        >
                          <span>$</span>
                          <input
                            type="number"
                            onChange={(e) =>
                              updateSlider("min", e.target.value)
                            }
                            min={0}
                            max={1000}
                            step={1000}
                            value={minValue}
                          />
                        </div>
                        <div
                          className={` w-[124px] flex justify-center items-center gap-x-1 border border-black-50 py-7 rounded-[10px] font-["Montserrat"] font-normal text-base`}
                        >
                          <span>$</span>
                          <input
                            type="number"
                            onChange={(e) =>
                              updateSlider("max", e.target.value)
                            }
                            min={0}
                            max={1000}
                            step={1000}
                            value={maxValue}
                          />
                        </div>
                      </div>
                      <div
                        className={`relative w-full h-0.5 bg-black-25 rounded`}
                      >
                        <div
                          className={`h-full bg-orange rounded absolute top-1/2 -translate-y-1/2`}
                          style={{
                            left: `${minPercent}%`,
                            width: `${
                              maxPercent - minPercent >= 100
                                ? 100
                                : maxPercent - minPercent
                            }%`,
                          }}
                        ></div>
                        <input
                          type="range"
                          value={minValue}
                          min={0}
                          max={1000}
                          step={1}
                          onChange={(e) => updateSlider("min", e.target.value)}
                          className="w-full h-0.5 bg-transparent pointer-events-none appearance-none absolute"
                        />
                        <input
                          type="range"
                          min={0}
                          max={1000}
                          value={maxValue}
                          step={1}
                          onChange={(e) => updateSlider("max", e.target.value)}
                          className="w-full h-0.5 bg-transparent pointer-events-none appearance-none absolute"
                        />
                      </div>
                    </div>
                  </div>
                </div>
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

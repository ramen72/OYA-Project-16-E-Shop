import React, { useState } from "react";
import Container from "../components/commonLayouts/Container";
import ProductCategoriesData from "../data/ProductCategoriesData";
import { MdKeyboardArrowUp } from "react-icons/md";

const ProductListPages = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
  const [isCategorySelected, setIsCategorySelected] = useState(
    ProductCategoriesData
  );
  const handleClickForCategories = (id) => {
    const newProductCategoriesData = isCategorySelected.map((item) => {
      item.id === id
        ? { ...item, isCategorySelected: !item.isCategorySelected }
        : item;
    });
    setIsCategorySelected(newProductCategoriesData);
  };

  // Input range
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000);

  const updateSlider = (type, value) => {
    if (type == "min") {
      const newMinValue = Math.min(parseInt(value), maxValue);
      setMinValue(newMinValue);
    } else {
      const newMaxValue = Math.max(parseInt(value), minValue);
      setMaxValue(newMaxValue);
    }
  };

  const minPercent = (minValue / 1000) * 100;
  const maxPercent = (maxValue / 1000) * 100;
  return (
    <>
      <div className={`mt-16 mb-20`}>
        <Container>
          <div className={`flex justify-between`}>
            <div
              className={`w-[355px] bg-lightGray justify-between rounded-[25px] p-12`}
            >
              {/* Category */}
              <div
                className={`${
                  isCategoriesOpen && "border-b border-black-25 pb-10"
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
              <div className="border-b border-black-25 py-10">tt</div>
              <div className={`pt-10`}>
                <h3
                  className={`font-['montserrat'] font-bold text-xl text-black mb-6`}
                >
                  Price
                </h3>
                <div className={`w-[259px]`}>
                  <div className={`flex justify-between mb-10`}>
                    <span
                      className={` border border-black-50 py-7 px-11 rounded-[10px] font-["Montserrat"]`}
                    >
                      $ {minValue}
                    </span>
                    <span
                      className={` border border-black-50 py-7 px-11 rounded-[10px] font-["Montserrat"]`}
                    >
                      $ {maxValue}
                    </span>
                  </div>
                  <div className={`relative w-full h-0.5 bg-black-25 rounded`}>
                    <div
                      className={`h-full bg-orange rounded absolute top-1/2 -translate-y-1/2`}
                      style={{
                        left: `${minPercent}%`,
                        width: `${maxPercent - minPercent}%`,
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
            <div className={`w-[1139px] border h-6`}></div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProductListPages;

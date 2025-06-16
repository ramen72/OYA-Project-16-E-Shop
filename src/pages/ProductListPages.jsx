import React, { useState } from "react";
import Container from "../components/commonLayouts/Container";
import ProductCategoriesData from "../data/ProductCategoriesData";
import { MdKeyboardArrowUp } from "react-icons/md";

const ProductListPages = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
  const [isCategorySelected, setIsCategorySelected] = useState(
    ProductCategoriesData
  );
  console.log(isCategorySelected);
  const handleClickForCategories = (id) => {
    const newProductCategoriesData = isCategorySelected.map((item) => {
      item.id === id
        ? { ...item, isCategorySelected: !item.isCategorySelected }
        : item;
    });
    setIsCategorySelected(newProductCategoriesData);
  };
  return (
    <>
      <div className={`mt-16 mb-20`}>
        <Container>
          <div className={`flex justify-between`}>
            <div
              className={`w-[355px] bg-lightGray justify-between rounded-[25px] p-12`}
            >
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className={`w-full font-['montserrat'] font-bold text-xl leading-6 text-black capitalize pb-6 flex justify-between items-center`}
              >
                Categories
                <MdKeyboardArrowUp
                  className={`${!isCategoriesOpen && "rotate-180"}`}
                />
              </button>
              <ul
                className={`flex flex-col gap-y-3 font-['montserrat'] font-normal text-base leading-6 text-black capitalize overflow-hidden ${
                  !isCategoriesOpen && "scale-y-0 h-0"
                } transition-all duration-300 `}
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
            <div className={`w-[1139px] border h-6`}></div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProductListPages;

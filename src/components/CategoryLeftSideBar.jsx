import React, { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import ProductCategoriesData from "../data/ProductCategoriesData";

const CategoryLeftSideBar = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
  const [isCategorySelected, setIsCategorySelected] = useState(
    ProductCategoriesData
  );

  const handleClickForCategories = (id) => {
    const newProductCategoriesData = isCategorySelected.map((item) =>
      item.id === id
        ? { ...item, isCategorySelected: !item.isCategorySelected }
        : item
    );
    setIsCategorySelected(newProductCategoriesData);
  };

  return (
    <>
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
            className={`${!isCategoriesOpen && "rotate-180"} cursor-pointer`}
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
    </>
  );
};

export default CategoryLeftSideBar;

import React, { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import ProductBrandsData from "../data/ProductBrandsData";

const BrandLeftSideBar = () => {
  const [isBrandsOpen, setIsBrandsOpen] = useState(true);
  const [isBrandSelected, setIsBrandSelected] = useState(ProductBrandsData);

  const handleClickForBrands = (id) => {
    const newProductBrandsData = isBrandSelected.map((item) =>
      item.id === id
        ? { ...item, isBrandSelected: !item.isBrandSelected }
        : item
    );
    setIsBrandSelected(newProductBrandsData);
  };

  return (
    <>
      <div
        className={`${isBrandsOpen && "border-b border-black-25 pb-10 mb-10"}`}
      >
        <button
          onClick={() => setIsBrandsOpen(!isBrandsOpen)}
          className={`w-full font-["montserrat"] font-bold text-xl leading-6 text-black capitalize pb-5 flex justify-between items-center `}
        >
          Brands
          <MdKeyboardArrowUp
            className={`${!isBrandsOpen && "rotate-180"} cursor-pointer`}
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
    </>
  );
};

export default BrandLeftSideBar;

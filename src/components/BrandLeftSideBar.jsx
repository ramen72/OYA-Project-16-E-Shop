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
        {isBrandsOpen && (
          <ul
            className={`flex flex-col gap-y-3 font-['montserrat'] font-normal text-base leading-6 text-black capitalize transition-all duration-300`}
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
                  className={`mr-2 appearance-none w-4 h-4 border border-[#303030] rounded relative checked:bg-[#ff624c] checked:border-[#ff624c] checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[-4px] checked:after:left-[2px] checked:after:text-sm`}
                />
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default BrandLeftSideBar;

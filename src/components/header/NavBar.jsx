import React, { useEffect, useRef, useState } from "react";
import Container from "../commonLayouts/Container";
import { Link } from "react-router-dom";
import { IoHandLeft } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";
import MenuBarIcon from "../../assets/icons/MenuBarIcon";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] =
    useState(false);
  const dropdownRef = useRef(null);
  const categoriesDropdownRef = useRef(null);

  // Product Dropdown
  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);

  const handleProductDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Categories DropdownOpen
  useEffect(() => {
    const handleClickOutSideOfCat = (e) => {
      if (
        categoriesDropdownRef.current &&
        !categoriesDropdownRef.current.contains(e.target)
      ) {
        setIsCategoriesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutSideOfCat);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSideOfCat);
    };
  }, []);

  const handleCategoriesDropdown = () => {
    setIsCategoriesDropdownOpen(!isCategoriesDropdownOpen);
  };

  return (
    <>
      <div className="bg-orange py-6 text-white">
        <Container>
          <div className="flex justify-between items-center font-['Montserrat'] font-bold text-base">
            <div>
              <ul className="flex items-center gap-x-20">
                <li
                  ref={categoriesDropdownRef}
                  className="flex items-center gap-x-4 cursor-pointer relative"
                >
                  <MenuBarIcon />
                  <button
                    onClick={handleCategoriesDropdown}
                    className="cursor-pointer flex items-center gap-x-1"
                  >
                    All Categories{" "}
                    <RiArrowDownSLine
                      className={`text-2xl ${
                        isCategoriesDropdownOpen && "rotate-180"
                      }`}
                    />
                  </button>
                  {isCategoriesDropdownOpen && (
                    <div className="w-56 bg-white absolute top-9 z-10 mt-2 rounded-md shadow-lg overflow-hidden">
                      <ul className='py-2 font-["Montserrat] font-normal text-base leading-6 text-black'>
                        <li className="px-4 py-2 transition-all duration-200 hover:bg-gray-200 cursor-pointer">
                          Computers & Tablets
                        </li>
                        <li className="px-4 py-2 transition-all duration-200 hover:bg-gray-200 cursor-pointer">
                          Mobile & Accessories
                        </li>
                        <li className="px-4 py-2 transition-all duration-200 hover:bg-gray-200 cursor-pointer">
                          TV & Home Theater
                        </li>
                        <li className="px-4 py-2 transition-all duration-200 hover:bg-gray-200 cursor-pointer">
                          Audio & Headphones
                        </li>
                        <li className="px-4 py-2 transition-all duration-200 hover:bg-gray-200 cursor-pointer">
                          Cameras & Camcorders
                        </li>
                        <li className="px-4 py-2 transition-all duration-200 hover:bg-gray-200 cursor-pointer">
                          Gaming Equipment
                        </li>
                        <li className="px-4 py-2 transition-all duration-200 hover:bg-gray-200 cursor-pointer">
                          Home Appliances
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li ref={dropdownRef} className="relative">
                  <button
                    onClick={handleProductDropdown}
                    className="cursor-pointer flex items-center gap-x-1"
                  >
                    Products{" "}
                    <RiArrowDownSLine
                      className={`text-2xl ${isDropdownOpen && "rotate-180"}`}
                    />
                  </button>
                  {isDropdownOpen && (
                    <div className="w-48 bg-white absolute top-9 z-10 mt-2 rounded-md shadow-lg overflow-hidden">
                      <div className='py-2 font-["Montserrat] font-normal text-base leading-6 text-black'>
                        <Link
                          to={"/product-list"}
                          className="block px-4 py-2 transition-all duration-200 hover:bg-gray-200 cursor-pointer"
                        >
                          Product List
                        </Link>
                        <li className="px-4 py-2 transition-all duration-200 hover:bg-gray-200 cursor-pointer">
                          Product-2
                        </li>
                        <li className="px-4 py-2 transition-all duration-200 hover:bg-gray-200 cursor-pointer">
                          Product-3
                        </li>
                        <li className="px-4 py-2 transition-all duration-200 hover:bg-gray-200 cursor-pointer">
                          Product-4
                        </li>
                        <li className="px-4 py-2 transition-all duration-200 hover:bg-gray-200 cursor-pointer">
                          Product-5
                        </li>
                        <li className="px-4 py-2 transition-all duration-200 hover:bg-gray-200 cursor-pointer">
                          Product-6
                        </li>
                      </div>
                    </div>
                  )}
                </li>
                <li>
                  <Link to={"/blogs"}>Blogs</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex items-center gap-x-20">
                <li className="flex items-center gap-x-1 cursor-pointer">
                  <Link to={"/product-list"}>LIMITED SALE</Link>
                  <IoHandLeft />
                </li>
                <li>
                  <Link to={"/product-list"}>Best Seller</Link>
                </li>
                <li>
                  <Link to={"/blogs"}>New Arrival</Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NavBar;

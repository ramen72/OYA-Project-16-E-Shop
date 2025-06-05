import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Currencies } from "../../../data/currencies";
import { Countries } from "../../../data/Countries";
import FacebookIcon from "../../../assets/icons/FacebookIcon";
import InstagramIcon from "../../../assets/icons/InstagramIcon";
import TwitterIcon from "../../../assets/icons/TwitterIcon";

const TopRightBar = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(Currencies[0].code);

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex justify-end items-center gap-x-[49px]">
        {/* Custom Dropdown for currency*/}
        <div>
          <select
            value={selectedCurrency}
            name="currency"
            onChange={(e) => {
              const currency = Currencies.find(
                (c) => c.code === e.target.value
              );
              setSelectedCurrency(currency.code);
            }}
          >
            {Currencies.map((currency, index) => (
              <option key={index} value={currency.code}>
                {currency.symbol} {currency.code}
              </option>
            ))}
          </select>
        </div>
        <div className='relative before:content-[""] before:absolute before:w-[1px] before:h-8 before:bg-[#BFBFBF] before:-left-6 before:top-1/2 before:-translate-1/2 after:content-[""] after:absolute after:w-[1px] after:h-8 after:bg-[#BFBFBF] after:-right-6 after:top-1/2 after:-translate-1/2'>
          <select
            name="country"
            className="text-right hidden"
            value={selectedCountry?.value || ""}
            onChange={(e) => {
              const country = Countries.find((c) => c.value === e.target.value);
            }}
          >
            {Countries.map((country, index) => (
              <option key={index} value={country.value}>
                {country.name}
              </option>
            ))}
          </select>

          {/* Custom Dropdown Country*/}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="w-[112px] cursor-pointer flex justify-start items-center"
          >
            {selectedCountry ? (
              <>
                <img
                  src={selectedCountry?.flag}
                  alt={selectedCountry?.name}
                  className="w-5 h-4 mr-2"
                />
                <span className="mr-5">{selectedCountry?.language}</span>
                <FaAngleDown />
              </>
            ) : (
              <span className="flex items-center gap-x-[10.5px]">
                <>
                  <img
                    src={Countries[0].flag}
                    alt={Countries[0].name}
                    className="w-5 h-4"
                  />
                  <span>{Countries[0].language}</span>
                </>
                <FaAngleDown className={`${isOpen && "rotate-180"}`} />
              </span>
            )}
          </div>

          {/* Option list */}
          {isOpen && (
            <ul className="absolute w-full border border-gray-300 bg-white shadow-lg z-10">
              {Countries.map((country, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(country)}
                  className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer"
                >
                  <img
                    src={country?.flag}
                    alt={country?.name}
                    className="w-5 h-4 mr-2"
                  />
                  {country.language}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex justify-end items-center gap-x-6">
          <Link to={"/"}>
            <FacebookIcon />
          </Link>
          <Link to={"/"}>
            <TwitterIcon />
          </Link>
          <Link to={"/"}>
            <InstagramIcon />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopRightBar;

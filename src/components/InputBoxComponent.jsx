import React from "react";
import { IoMdStar } from "react-icons/io";

const InputBoxComponent = ({
  labelText = "Add Label Text",
  mandatory = false,
  inputType = "text",
  bg = "bg-transparent",
  border = true,
  placeholderText = "Add placeholder Text",
  isTextarea = false,
  textareaHeight = "h-[173px]",
  isDropdown = false,
  selectOptions,
}) => {
  return (
    <>
      <label
        className={`flex justify-start items-center mb-3 font-["montserrat"] font-bold text-xl`}
      >
        {labelText}
        {mandatory && (
          <sup>
            <IoMdStar className={`text-sm text-red-600`} />
          </sup>
        )}
      </label>
      {isTextarea ? (
        <textarea
          className={`w-full ${textareaHeight} py-[25px] px-8 border border-solid border-black-25 rounded-[10px]`}
          placeholder={placeholderText}
        ></textarea>
      ) : isDropdown ? (
        <div className="relative">
          <select className="appearance-none w-full border border-gray-300 rounded-md py-[25px] px-8 text-black focus:outline-none focus:ring-2 focus:ring-blue-500">
            {selectOptions.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
            {/* <option>BMW</option>
            <option>Audi</option> */}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      ) : (
        <input
          type={inputType}
          className={`w-full py-[25px] px-8 ${bg} ${
            border && "border border-solid border-black-25"
          } rounded-[10px] placeholder:font-["montserrat"] placeholder:font-normal placeholder:text-xl placeholder:text-black-75`}
          placeholder={placeholderText}
        />
      )}
    </>
  );
};

export default InputBoxComponent;

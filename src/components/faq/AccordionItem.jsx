import React from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const AccordionItem = ({ title, content, onToggle, isOpen }) => {
  return (
    <>
      {/* As per me */}
      <div onClick={onToggle} className="bg-white mb-6 last:mb-0 rounded-3xl">
        <button
          className={`w-full px-12 pt-8 ${
            isOpen ? "pb-0" : "pb-8"
          } font-["Poppins"] font-semibold leading-7 text-2xl text-left text-black cursor-pointer flex items-center gap-x-8 `}
        >
          {isOpen ? (
            <IoIosArrowDown className="border border-orange text-orange p-2 text-[32px] rounded-full" />
          ) : (
            <IoIosArrowForward className="bg-orange text-white p-2 text-[32px] rounded-full" />
          )}
          {title}
        </button>
        {isOpen && (
          <div className="p-4 bg-white rounded-3xl ">
            <p className='text-justify pl-[100px] pr-14 font-["Montserrat"] text-xl leading-[30px] text-black-75'>
              {content}
            </p>
          </div>
        )}
      </div>

      {/* As per Video */}

      {/* <div onClick={onToggle} className="mb-6 w-full p-3 text-left bg-white py-8 px-12 pl-[112px] rounded-[25px] font-['Poppins'] font-semibold text-2xl relative ">
                <button className={`cursor-pointer flex items-center gap-x-8 font-['Poppins'] font-semibold leading-7 text-2xl text-left`}>
                    <div className={`w-8 h-8 rounded-full ${isOpen ? "bg-transparent border border-[#FF624C] !text-[#FF624C] rotate-[90deg]" : "bg-[#FF624C]"} text-[20px] flex items-center justify-center text-white mr-[16px] absolute top-8 left-12`}>
                        <IoIosArrowForward />
                    </div>
                    {title}
                </button>
                {
                    isOpen &&
                    <div className={`font-["Montserrat"] font-normal text-base text-[#000] mt-6`}>
                        <p className='text-justify'>{content}</p>                    
                    </div>
                }
            </div> */}
    </>
  );
};

export default AccordionItem;

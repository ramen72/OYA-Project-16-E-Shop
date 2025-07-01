import React, { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const PriceRange = () => {
  const [isPriceOpen, setIsPriceOpen] = useState(true);
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

  return (
    <>
      <div className={``}>
        <button
          onClick={() => setIsPriceOpen(!isPriceOpen)}
          className={`w-full font-["montserrat"] font-bold text-xl leading-6 text-black capitalize pb-5 flex justify-between items-center `}
        >
          Price
          <MdKeyboardArrowUp
            className={`${!isPriceOpen && "rotate-180"} cursor-pointer`}
          />
        </button>
        {isPriceOpen && (
          <div
            className={`flex flex-col gap-y-3 font-['montserrat'] font-normal text-base leading-6 text-black capitalize transition-all duration-300`}
          >
            <div className={`w-[259px]`}>
              <div className={`flex items-center gap-x-[11px] mb-10`}>
                <div
                  className={` w-[124px] flex justify-center items-center gap-x-1 border border-black-50 py-7 rounded-[10px] font-["Montserrat"] font-normal text-base`}
                >
                  <span>$</span>
                  <input
                    type="number"
                    onChange={(e) => updateSlider("min", e.target.value)}
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
                    onChange={(e) => updateSlider("max", e.target.value)}
                    min={0}
                    max={1000}
                    step={1000}
                    value={maxValue}
                  />
                </div>
              </div>
              <div className={`relative w-full h-0.5 bg-black-25 rounded`}>
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
        )}
      </div>
    </>
  );
};

export default PriceRange;

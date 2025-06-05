import React from "react";

const Button = ({
  text,
  bg = "bg-[#FF624C]",
  font = "font-montserrat",
  fontWeight = "font-bold",
  size = "text-xl",
  textColor = "text-white",
  paddingY = "py-4",
  paddingX = "px-10",
  border = "border-none",
  borderColor = "border-transparent",
  radius = "rounded-[10px]",
  cursor = "cursor-pointer",
}) => {
  return (
    <button
      className={`${bg} ${font} ${fontWeight} ${size} ${textColor} ${paddingY} ${paddingX} ${border} ${borderColor} ${radius} ${cursor}`}
    >
      {text}
    </button>
  );
};
export default Button;

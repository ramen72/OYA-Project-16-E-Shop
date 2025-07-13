import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  btnWidth,
  href = "#",
  text = "Button Text",
  bg = "bg-[#FF624C]",
  border = "border-none",
  borderColor = "border-transparent",
  font = "font-montserrat",
  fontWeight = "font-bold",
  size = "text-xl",
  textColor = "text-white",
  paddingY = "py-4",
  paddingX = "px-10",
  radius = "rounded-[10px]",
  cursor = "cursor-pointer",
  displayType = "inline-block",
  isHover = false,
  hoverTextColor = "text-white",
  hoverBgColor = "bg-orange",
}) => {
  return (
    <Link
      to={href}
      className={` ${displayType} text-center capitalize ${btnWidth} ${bg} ${font} ${fontWeight} ${size} ${textColor} ${paddingY} ${paddingX} ${border} ${borderColor} ${radius} ${cursor} transition-all duration-300 ${
        isHover ? `hover:${hoverBgColor} hover:${hoverTextColor}` : ""
      }`}
    >
      {text}
    </Link>
  );
};
export default Button;

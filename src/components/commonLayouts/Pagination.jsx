import React, { useState } from "react";

const Pagination = ({ totalItems, itemPerPage, currentPage, onPageChange }) => {
  const [isPaginationHover, setIsPaginationHover] = useState(false);
  const [active, setActive] = useState(1);

  const totalPages = Math.ceil(totalItems / itemPerPage);
  const maxPagesToShow = 5;

  const pages = [];
  if (totalPages <= maxPagesToShow) {
    for (let i = 0; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    const startPages = [1, 2];
    const endPages = [totalPages - 1, totalPages];
    const middlePages = [currentPage - 1, currentPage, currentPage + 1].filter(
      (p) => p > 2 && p < totalPages - 1
    );
    const uniquePages = Array.from(
      new Set([...startPages, ...middlePages, ...endPages])
    ).sort((a, b) => a - b);

    for (let i = 0; i < uniquePages.length; i++) {
      pages.push(uniquePages[i]);
      if (
        i < uniquePages.length - 1 &&
        uniquePages[i + 1] - uniquePages[i] > 1
      ) {
        pages.push("...");
      }
    }
  }

  //   number handleClick
  const handleNumberClick = (item) => {
    onPageChange(item);
    setActive(item);
    console.log(item);
  };
  return (
    <>
      <div className="flex justify-center items-center gap-2">
        <button
          onClick={() => handleNumberClick(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded text-black font-["poppins"] text-3xl cursor-pointer transform transition-all duration-300 hover:bg-orange hover:text-white`}
        >
          &lt;
        </button>
        {pages.map((item, index) => (
          <button
            key={index}
            onClick={() => handleNumberClick(item)}
            className={`w-12 h-12 rounded text-black font-["poppins"] text-xl cursor-pointer transform transition-all duration-300 hover:bg-orange hover:text-white ${
              isPaginationHover && "bg-orange text-white"
            } ${active == item && "bg-orange text-white"}`}
          >
            {item}
          </button>
        ))}
        <button
          onClick={() => handleNumberClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded text-black font-["poppins"] text-3xl cursor-pointer transform transition-all duration-300 hover:bg-orange hover:text-white`}
        >
          &gt;
        </button>
      </div>
      <span>
        Showing{" "}
        {itemPerPage * (currentPage - 1) < 1
          ? 1
          : itemPerPage * (currentPage - 1)}{" "}
        - {currentPage * itemPerPage} of {totalItems} results.
      </span>
    </>
  );
};

export default Pagination;

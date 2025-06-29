import React, { useState } from "react";

const Pagination = ({ totalItems, itemPerPage, currentPage, onPageChange }) => {
  const [isPaginationHover, setIsPaginationHover] = useState(false);

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
        uniquePages[i + 1] - uniquePages[1] > 1
      ) {
        pages.push("...");
      }
    }
  }

  // const pagesToShowBeforeAfter = 3;
  // let startPage = Math.max(1, currentPage - pagesToShowBeforeAfter);
  // let endPage = Math.min(totalPages, currentPage + pagesToShowBeforeAfter);

  // if (endPage - startPage + 1 < maxPagesToShow) {
  //   if (startPage > 1) {
  //     startPage = Math.max(1, endPage - maxPagesToShow + 1);
  //   }
  //   endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
  // }
  // const pageNumber = [];
  // for (let i = startPage; i <= endPage; i++) {
  //   pageNumber.push(i);
  // }

  //   number handleClick
  const handleNumberClick = (item) => {
    console.log(item);
  };
  return (
    <>
      <div className="flex justify-center items-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded text-black font-["poppins"] text-3xl cursor-pointer transform transition-all duration-300 hover:bg-orange hover:text-white`}
        >
          &lt;
        </button>
        {pages.map((item, index) => (
          <button
            key={index}
            onClick={() => onPageChange(item)}
            className={`w-12 h-12 rounded text-black font-["poppins"] text-xl cursor-pointer transform transition-all duration-300 hover:bg-orange hover:text-white ${
              isPaginationHover && "bg-orange text-white"
            }`}
          >
            {item}
          </button>
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
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

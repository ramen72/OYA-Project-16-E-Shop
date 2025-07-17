import React from "react";

import Container from "../commonLayouts/Container";
import TopLeftBar from "./topBarComponents/TopLeftBar";
import TopRightBar from "./topBarComponents/TopRightBar";

const TopBar = () => {
  return (
    <>
      <div className="border-b border-black-25 border-solid py-[22px]">
        <Container>
          <div className="sm:flex sm:justify-between sm:items-center font-['Montserrat'] font-normal text-sm mx-1 sm:mx-0">
            <TopLeftBar />
            <TopRightBar />
          </div>
        </Container>
      </div>
    </>
  );
};

export default TopBar;

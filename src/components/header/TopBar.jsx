import React from "react";

import Container from "../commonLayouts/Container";
import TopLeftBar from "./topBarComponents/TopLeftBar";
import TopRightBar from "./topBarComponents/TopRightBar";

const TopBar = () => {
  return (
    <>
      <div className="border-b border-black-25 border-solid py-[22px]">
        <Container>
          <div className="flex justify-between items-center font-['Montserrat'] font-normal text-sm">
            <TopLeftBar />
            <TopRightBar />
          </div>
        </Container>
      </div>
    </>
  );
};

export default TopBar;

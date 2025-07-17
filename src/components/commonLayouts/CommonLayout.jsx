import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const CommonLayout = () => {
  return (
    <>
      <div className={`overflow-x-hidden`}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default CommonLayout;

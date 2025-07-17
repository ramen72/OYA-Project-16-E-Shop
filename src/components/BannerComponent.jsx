import React from "react";
import Container from "./commonLayouts/Container";
import { Link } from "react-router-dom";

const BannerComponent = () => {
  return (
    <>
      <div className="sm:mt-8 mb-10 sm:mb-20">
        <Container>
          <Link to={"/"}>
            <img src={"images/bannerImage.svg"} alt="BannerImage" />
          </Link>
        </Container>
      </div>
    </>
  );
};

export default BannerComponent;

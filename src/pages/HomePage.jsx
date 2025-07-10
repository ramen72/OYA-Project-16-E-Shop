import React from "react";
import BannerComponent from "../components/BannerComponent";
import FacilityComponent from "../components/FacilityComponent";
import FeaturedProduct from "../components/FeaturedProduct";
import OfferSection from "../components/OfferSection";
import NewProduct from "../components/NewProduct";
import BestSeller from "../components/BestSeller";
import Faq from "../components/faq/Faq";
import TechTalk from "../components/TechTalk";
import SpringSale from "../components/SpringSale";
import Brands from "../components/Brands";
import FooterTop from "../components/footer/FooterTop";

const currencies = [
  {
    name: "Bangladeshi Taka",
    code: "BDT",
    symbol: "৳",
    country: "Bangladesh",
    exchange_rate_to_usd: 0.0091,
  },
  {
    name: "United States Dollar",
    code: "USD",
    symbol: "$",
    country: "United States",
    exchange_rate_to_usd: 1,
  },
  {
    name: "Euro",
    code: "EUR",
    symbol: "€",
    country: "European Union",
    exchange_rate_to_usd: 1.08,
  },
  {
    name: "British Pound",
    code: "GBP",
    symbol: "£",
    country: "United Kingdom",
    exchange_rate_to_usd: 1.25,
  },
  {
    name: "Japanese Yen",
    code: "JPY",
    symbol: "¥",
    country: "Japan",
    exchange_rate_to_usd: 0.0064,
  },
  {
    name: "Indian Rupee",
    code: "INR",
    symbol: "₹",
    country: "India",
    exchange_rate_to_usd: 0.012,
  },
];

const HomePage = () => {
  return (
    <>
      <BannerComponent />
      <FacilityComponent />
      <FeaturedProduct />
      <OfferSection />
      <NewProduct />
      <SpringSale />
      <BestSeller />
      <Faq />
      <TechTalk />
      <Brands />
      <FooterTop />
    </>
  );
};

export default HomePage;

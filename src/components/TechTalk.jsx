import React from "react";
import Container from "./commonLayouts/Container";
import TechTalkCard from "./TechTalkCard";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import ArrowIcon from "../assets/icons/ArrowIcon";

const TechTalk = () => {
  return (
    <>
      <div className="h-[915px] bg-white pt-20">
        <Container>
          <h2
            className={`font-["Poppins"] font-semibold text-4xl leading-11 text-black capitalize`}
          >
            Tech Talk
          </h2>
          <div className="flex justify-between items-center mb-12 mt-6">
            <div>
              <p
                className={`font-["Montserrat"] font-normal text-[20px] leading-[30px] text-black`}
              >
                Stay up to date with the latest trends, reviews, and insights
                from our experts.
              </p>
            </div>
            <div className="flex items-center gap-x-7 text-orange">
              <span className='font-["Montserrat"] font-bold text-base leading-6'>
                View All
              </span>
              <ArrowIcon />
            </div>
          </div>
          <div className={`flex flex-wrap`}>
            <TechTalkCard />
            <TechTalkCard />
            <TechTalkCard />
          </div>
        </Container>
      </div>
    </>
  );
};

export default TechTalk;

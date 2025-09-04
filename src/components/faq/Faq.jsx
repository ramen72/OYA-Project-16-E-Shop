import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import Container from "../commonLayouts/Container";
import Button from "../Button";
import { AccordionData } from "../../data/AccordionData";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(AccordionData.length - 1);

  return (
    <>
      <div className="sm:mt-16 sm:py-16 py-8 px-2 sm:px-0 bg-[#F4F4F4]">
        <Container>
          <div className="flex flex-col-reverse sm:flex-row justify-between sm:items-end relative">
            <div className="sm:w-[902px] ">
              {AccordionData.map((item, index) => (
                <AccordionItem
                  key={index}
                  title={item.title}
                  content={item.content}
                  onToggle={() => {
                    setOpenIndex(openIndex === index ? null : index);
                  }}
                  isOpen={openIndex === index}
                />
              ))}
            </div>
            <div className="sm:w-[544px] ">
              <img
                src="images/faqDots.svg"
                alt="Dots"
                className="absolute top-0 right-0 hidden sm:block"
              />
              <h3
                className={`max-w-[325px] font-["Poppins"] font-semibold text-2xl sm:text-textSize-38 leading-[46px] text-black sm:mt-44`}
              >
                Frequently Asked Questions
              </h3>
              <p
                className={`max-w-[395px] font-["Montserrat"] font-normal leading-[30px] text-lg sm:text-xl text-black sm:mt-6 mb-6 sm:mb-16`}
              >
                Questions that get asked the most by our clients. Get any
                burning questions?
              </p>
              <div className={`mb-6 sm:mb-0`}>
                <Button text={"Ask A Question"} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Faq;

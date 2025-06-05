import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import Container from "../commonLayouts/Container";
import Button from "../Button";
import { AccordionData } from "../../data/AccordionData";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(AccordionData.length - 1);

  return (
    <>
      <div className="mt-16 py-16 bg-[#F4F4F4]">
        <Container>
          <div className="flex justify-between items-end relative">
            <div className="w-[902px] ">
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
            <div className="w-[544px] ">
              <img
                src="images/faqDots.svg"
                alt="Dots"
                className="absolute top-0 right-0"
              />
              <h3
                className={`max-w-[325px] font-["Poppins"] font-semibold text-[38px] leading-[46px] text-black mt-44`}
              >
                Frequently Asked Questions
              </h3>
              <p
                className={`max-w-[395px] font-["Montserrat"] font-normal leading-[30px] text-xl text-black mt-6 mb-16`}
              >
                Questions that get asked the most by our clients. Get any
                burning questions?
              </p>
              <Button text={"Ask A Question"} />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Faq;

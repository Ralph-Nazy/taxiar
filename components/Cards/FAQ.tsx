"use client"
import React, { useState } from "react";
import { RiArrowDownSLine, RiArrowLeftSLine } from "react-icons/ri";


interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const FAQ: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion relative">
      {items.map((item, index) => (
        <div
          key={index}
          className={`bg-white shadow-md rounded-br-[20px] mb-6 ${index === activeIndex ? "active" : ""}`}
        >
          <div
            className={`text-[18px] leading-[26px] bg-taxiar-9 p-3 rounded-br-[20px] relative font-Josefin font-[700] text-taxiar-2 cursor-pointer ${index === activeIndex ? "active" : "border-taxiar-1"}`}
            onClick={() => handleClick(index)}
          >
            {item.title}
            <span className="absolute right-0 top-0 bg-taxiar-1 text-taxiar-2 rounded-br-[20px] p-4">
              {index === activeIndex ? <RiArrowDownSLine className="text-taxiar-2" /> : <div className="
              text-taxiar-2">
              <RiArrowLeftSLine
               className=""/></div>}
            </span>
          </div>
          {index === activeIndex && (
            <div
              className="text-[16px] leading-[26px] p-5
              text-taxiar-13 font-[400]
              "
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default FAQ;

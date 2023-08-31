import Image from "next/image";
import React from "react";
import { RiArrowLeftDoubleFill, RiArrowRightDoubleLine, RiGraduationCapLine } from "react-icons/ri";

type SubTitleProp = {
  title: string;
};
const SubTitleIconCenter: React.FC<SubTitleProp> = ({ title }) => {
  return (
    <span className="outline-none inline-flex items-center justify-center uppercase font-Jost font-[500] text-[16px] leading-[22px]  text-taxiar-1">
      <Image 
        src="/assets/images/icons/title-icon.svg"
        width="28"
        height="26"
        alt="Taxiar"
        className="mr-2"
      />
      <span className="">{title}</span> 
    </span>
  );
};
export default SubTitleIconCenter;

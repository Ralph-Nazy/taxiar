import React from "react";
import { RiArrowLeftDoubleFill, RiArrowRightDoubleLine, RiGraduationCapLine } from "react-icons/ri";

type SubTitleProp = {
  title: string;
};
const SubTitleDefault: React.FC<SubTitleProp> = ({ title }) => {
  return (
    <span className="outline-none inline-flex items-center justify-center uppercase font-Jost font-[500] text-[16px] leading-[22px]  text-taxiar-1">
      <RiArrowLeftDoubleFill className="mr-2" />
      <span className="">{title}</span>
      <RiArrowRightDoubleLine className="ml-2" />
    </span>
  );
};
export default SubTitleDefault;

import React from "react"; 
import { RiArrowLeftDoubleFill} from "react-icons/ri";

type SubTitleProp = {
  title: string;
};
const SubTitleLeftIcon: React.FC<SubTitleProp> = ({ title }) => {
  return (
    <span className="outline-none inline-flex items-center uppercase font-Jost font-[500] text-[16px] leading-[22px]  text-taxiar-1">
      <RiArrowLeftDoubleFill className="mr-2" />
      <span className="">{title}</span> 
    </span>
  );
};
export default SubTitleLeftIcon;

import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiDoubleQuotesR, RiStarSFill } from "react-icons/ri";

interface TestimonialProps {
  name: string;
  title: string;
  img: string;
  desc: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  title,
  img,
  desc,
}) => {
  return (
    <div className="bg-white shadow-md p-8 relative group mb-6 border-b-[3px] border-taxiar-2 hover:border-taxiar-1">
      <div className="grid grid-cols-1">
        <p>{desc}</p>
        <div className="flex items-start space-x-4 mt-3">
          <div className="flex-shrink-0">
            <Image src={img} alt={name} height="60" width="60" className="" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-taxiar-2 font-[700] text-[17px] leading-[26px] mb-1">
              {name}
            </h3>
            <p className="text-taxiar-1 capitalize text-[14px] font-[400]">
              {title}
            </p>
          </div>
        </div>
      </div>
      <RiDoubleQuotesR className="absolute right-8 bottom-10 h-20 w-20 text-taxiar-3 opacity-10" />

      <div className="flex items-center justify-center mt-1 bg-taxiar-2 group-hover:bg-taxiar-1 absolute right-0 bottom-0 py-3 px-5 rounded-tl-[25px] ">
        <RiStarSFill className="text-taxiar-1 group-hover:text-taxiar-2 mr-1" />
        <RiStarSFill className="text-taxiar-1 group-hover:text-taxiar-2 mr-1" />
        <RiStarSFill className="text-taxiar-1 group-hover:text-taxiar-2 mr-1" />
        <RiStarSFill className="text-taxiar-1 group-hover:text-taxiar-2 mr-1" />
        <RiStarSFill className="text-taxiar-1 group-hover:text-taxiar-2" />
      </div>
    </div>
  );
};
export default TestimonialCard;

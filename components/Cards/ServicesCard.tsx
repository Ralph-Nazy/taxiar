import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowRightLine } from "react-icons/ri";

interface ServicesProps {
    title:string;
    icon: string;
    desc: string;
    url: string;
    numb: string;
}

const ServicesCard: React.FC<ServicesProps> = ({title, icon, desc, url, numb}) => {
  return (
    <div className="group cursor-pointer hover:shadow-xl bg-white hover:bg-taxiar-2 p-8">
      <div className="flex flex-col">
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex-shrink-0">
            <div
              className="inline-flex items-center p-5 text-taxiar-2
                         bg-taxiar-1"
            >
              <Image 
                src={icon}
                height={46}
                width={46}
                alt={title}
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="uppercase text-[14px] text-taxiar-13">service - {numb}</p>
            <h3 className="text-taxiar-2 group-hover:text-white text-[20px] uppercase font-[500] leading-[28px] mt-1">
            {title}
            </h3>
          </div>
        </div>
        <p className="text-taxiar-13">{desc}</p>
        <Link href={url} className="p-4 mt-6 flex items-center justify-center  capitalize text-[15px] min-[100px] border-[1px] border-taxiar-14 w-[180px]
              leading-[22px] font-[600] font-Josefin py-4 px-6 text-taxiar-2 bg-white group-hover:bg-taxiar-1 group-hover:text-taxiar-2 group-hover:border-taxiar-1">
            Read More <RiArrowRightLine className="ml-4" />
        </Link>
      </div>
    </div>
  );
};
export default ServicesCard;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowRightLine } from "react-icons/ri";

interface ServicesProps {
    title:string;
    image: string;
    desc: string;
    url: string; 
}

const ServicesCardTwo: React.FC<ServicesProps> = ({title, image, desc, url}) => {
  return (
    <div className="group shadow-md bg-white hover:bg-taxiar-2 p-8">
      <div className="flex flex-col">
        <Image 
          src={image}
          width={327}
          height={187}
          alt={title}
          className="mb-4"
        />
        <Link href={url}><h3 className="text-[24px] leading-[34px] group-hover:text-white text-taxiar-2 my-2 font-[600]">{title}</h3></Link>        
        <p className="text-taxiar-13">{desc}</p>
        <Link href={url} className="underline flex items-center  capitalize text-[15px]
              leading-[22px] font-[600] font-Josefin py-4  text-taxiar-2  group-hover:text-taxiar-1 ">
            Read More <RiArrowRightLine className="ml-4" />
        </Link>
      </div>
    </div>
  );
};
export default ServicesCardTwo;

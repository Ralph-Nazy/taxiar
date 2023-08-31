import Image from "next/image"; 
import React from "react";

interface ProcessProps {
    title: string
    desc: string
    numb: string
    icon: string
}

const ProcessCircle: React.FC<ProcessProps> = ({title, desc, numb, icon}) => {
  return (
    <div className="relative mt-12 lg:mt-6 text-center rounded-[10%] w-full h-64 bg-white shadow-sm inline-flex items-center p-8">
      <div
        className="inline-flex items-center p-4 absolute top-[-15%]  left-1/2 transform -translate-x-1/2 text-white
                    bg-taxiar-1 rounded-full
                    hover:bg-taxiar-1 hover:text-taxiar-2"
      >
        <Image
          src={icon}
          width={40}
          height={40}
          alt={title}
        />
      </div>
      <div className="flex flex-col">
        <h4 className="uppercase font-[700] text-taxiar-2 text-[20px] leading-[30px] mb-2">
          {title}
        </h4>
        <p className="text-taxiar-13">
          {desc}
        </p>
        
      <div
        className="inline-flex items-center mt-6 absolute bottom-[-8%]  left-1/2 transform -translate-x-1/2 py-2 px-4 text-white
                    bg-taxiar-2 rounded-[15%]"
      >
        <p className=" text-taxiar-1 font-Josefin font-[700] text-[24px] leading-[32px]">
          {numb}
        </p>
      </div>
      </div>
    </div>
  );
};
export default ProcessCircle;

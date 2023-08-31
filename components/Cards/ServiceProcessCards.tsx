import React from "react";

interface StepsProps {
    title: string;
    desc: string;
    numb: string;
}

const ServiceProcessCards: React.FC<StepsProps>=({title, desc, numb})=> {

    return(
        <div className="relative rounded-[200px] border-[1px] border-taxiar-9 py-[30px] px-[16px] text-center">
            <div className="font-[700] text-[20px] flex items-center justify-center absolute h-14 w-14
             text-center left-0 top-[-20%] bg-taxiar-1 border-[10px] border-[#FFF9E8]
            rounded-[50%] text-taxiar-2 p-6">
                {numb}
            </div>
            <h5 className="text-[18px] lg:text-[20px] text-taxiar-2 font-[600] leading-[30px] uppercase mb-1">{title}</h5>
            <p>{desc}</p>
        </div>
    )
}
export default ServiceProcessCards;
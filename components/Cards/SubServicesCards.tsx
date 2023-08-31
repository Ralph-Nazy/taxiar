import Image from "next/image";
import React from "react";

interface SubServiceProps {
  title: string;
  desc: string;
}

const SubServicesCards: React.FC<SubServiceProps> = ({ title, desc }) => {
  return (
    <div className="p-5 border-t-[4px] border-taxiar-1 text-center shadow-md">
      <Image
        src="/assets/images/icons/service_feature_1_1.svg"
        width={50}
        height={35}
        alt={title}
        className="mx-auto mb-4"
      />
      <h4 className="text-[18px] lg:text-[20px] text-taxiar-2 font-[600] leading-[30px] uppercase mb-1">
        {title}
      </h4>
      <p>{desc}</p>
    </div>
  );
};

export default SubServicesCards;

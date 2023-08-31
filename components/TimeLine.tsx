import Image from "next/image";
import React from "react";

const TimeLine: React.FC<{}> = () => {
  return (
    <ol className="items-center mt-10 sm:flex">
      <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
          <div className="z-10 flex items-center justify-center  rounded-full shrink-0">
            <Image
              src="/assets/images/icons/counter_2_1.svg"
              width={80}
              height={80}
              alt="Counter"
            />
          </div>
          <div className="hidden sm:flex w-full bg-taxiar-9 h-0.5 bg-opacity-10"></div>
        </div>
        <div className="mt-3 sm:pr-8">
          <h3 className="font-[700] text-[44px] leading-[54px] mt-4 text-white">
            32.5k<span className="font-[400] text-taxiar-1">+</span>
          </h3>
          <p className="text-taxiar-13">Special Vehicles</p>
        </div>
      </li>
      <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
          <div className="z-10 flex items-center justify-center  rounded-full shrink-0">
            <Image
              src="/assets/images/icons/counter_2_2.svg"
              width={80}
              height={80}
              alt="Counter"
            />
          </div>
          <div className="hidden sm:flex w-full bg-taxiar-9 h-0.5 bg-opacity-10"></div>
        </div>
        <div className="mt-3 sm:pr-8">
          <h3 className="font-[700] text-[44px] leading-[54px] mt-4 text-white">
            18.5k<span className="font-[400] text-taxiar-1">+</span>
          </h3>
          <p className="text-taxiar-13">People Dropped</p>
        </div>
      </li>
      <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
          <div className="z-10 flex items-center justify-center  rounded-full shrink-0">
            <Image
              src="/assets/images/icons/counter_2_3.svg"
              width={80}
              height={80}
              alt="Counter"
            />
          </div>
          <div className="hidden sm:flex w-full bg-taxiar-9 h-0.5 bg-opacity-10"></div>
        </div>
        <div className="mt-3 sm:pr-8">
          <h3 className="font-[700] text-[44px] leading-[54px] mt-4 text-white">
            68.5k<span className="font-[400] text-taxiar-1">+</span>
          </h3>
          <p className="text-taxiar-13">Satisfied Clients</p>
        </div>
      </li>
    </ol>
  );
};
export default TimeLine;

import Image from "next/image";
import React from "react";

const TimeLineDefault: React.FC<{}> = () => {
  return (
    <ol className="items-center justify-center sm:flex">
      <li className="relative mb-6 sm:mb-0 w-full lg:w-[25%]">
        <div className="flex items-center">
          <div className="z-10 flex items-start pt-3 justify-center w-[130px] h-[130px] bg-[url('/assets/images/bg/counter_shape.png')] bg-cover bg-center bg-no-repeat shrink-0">
            <Image
              src="/assets/images/icons/counter_3_1.svg"
              width={50}
              height={50}
              alt="Counter"
            />
          </div>
          <div className="hidden sm:flex w-full bg-taxiar-9 h-0.5"></div>
        </div>
        <div className="mt-3 sm:pr-8">
          <h3 className="font-[700] text-[44px] leading-[54px] mt-4 text-taxiar-2">
            32.5k<span className="font-[400] text-taxiar-1">+</span>
          </h3>
          <p className="text-taxiar-13">Special Vehicles</p>
        </div>
      </li>
      <li className="relative mb-6 sm:mb-0 lg:w-[25%]">
        <div className="flex items-center">
          <div className="z-10 flex items-start pt-3 justify-center w-[130px] h-[130px] bg-[url('/assets/images/bg/counter_shape.png')] bg-cover bg-center bg-no-repeat shrink-0">
            <Image
              src="/assets/images/icons/counter_3_2.svg"
              width={50}
              height={50}
              alt="Counter"
            />
          </div>
          <div className="hidden sm:flex w-full bg-taxiar-9 h-0.5"></div>
        </div>
        <div className="mt-3 sm:pr-8">
          <h3 className="font-[700] text-[44px] leading-[54px] mt-4 text-taxiar-2">
            18.5k<span className="font-[400] text-taxiar-1">+</span>
          </h3>
          <p className="text-taxiar-13">People Dropped</p>
        </div>
      </li>
      <li className="relative mb-6 sm:mb-0 lg:w-[25%]">
        <div className="flex items-center">
          <div className="z-10 flex items-start pt-3 justify-center w-[130px] h-[130px] bg-[url('/assets/images/bg/counter_shape.png')] bg-cover bg-center bg-no-repeat shrink-0">
            <Image
              src="/assets/images/icons/counter_3_3.svg"
              width={50}
              height={50}
              alt="Counter"
            />
          </div>
          <div className="hidden sm:flex w-full bg-taxiar-9 h-0.5"></div>
        </div>
        <div className="mt-3 sm:pr-8">
          <h3 className="font-[700] text-[44px] leading-[54px] mt-4 text-taxiar-2">
            26.5k<span className="font-[400] text-taxiar-1">+</span>
          </h3>
          <p className="text-taxiar-13">Road Trips Done</p>
        </div>
      </li>
      <li className="relative mb-6 sm:mb-0 lg:w-[25%]">
        <div className="flex items-center">
          <div className="z-10 flex items-start pt-3 justify-center w-[130px] h-[130px] bg-[url('/assets/images/bg/counter_shape.png')] bg-cover bg-center bg-no-repeat shrink-0">
            <Image
              src="/assets/images/icons/counter_3_4.svg"
              width={50}
              height={50}
              alt="Counter"
            />
          </div>
          <div className="hidden sm:flex w-full bg-taxiar-9 h-0.5"></div>
        </div>
        <div className="mt-3 sm:pr-8">
          <h3 className="font-[700] text-[44px] leading-[54px] mt-4 text-taxiar-2">
            68.5k<span className="font-[400] text-taxiar-1">+</span>
          </h3>
          <p className="text-taxiar-13">Satisfied Clients</p>
        </div>
      </li>
    </ol>
  );
};
export default TimeLineDefault;

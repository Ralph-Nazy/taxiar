import { SubTitleLeftIcon } from "@/components";
import Image from "next/image";
import React from "react";
import { RiArrowRightLine, RiCheckboxCircleLine } from "react-icons/ri";

const AboutSection = () => {
  return (
    <div className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-10 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className=" relative">
            <Image 
              src="/assets/images/about_1_1.jpg"
              width={491}
              height={507}
              alt="About Us"
            />
            <Image 
              src="/assets/images/about_1_2.jpg"
              width={252}
              height={247}
              alt="About Us"
              className="absolute z-50 bottom-[40%] right-0 border-[6px] border-white hidden lg:block"
            />
            <div className="text-center w-[220px] bg-white p-6 absolute right-0 bottom-[5%] shadow-md">
              <p className="font-[500] font-Josefin text-[18px] leading-[28px] text-taxiar-2">Started Journey</p>
              <p className="text-taxiar-1 font-Josefin font-[700] text-[70px] leading-[80px]">1986</p>
            </div>
          </div>
          <div className="">
            <SubTitleLeftIcon title={"About Our Company"} />
            <h2
              className="text-taxiar-2 font-[700] mt-3 mb-3 text-[26px] 
                    leading-[32px] lg:text-[42px] lg:leading-[50px]"
            >
              Best Taxi Services For You
            </h2>
            <p className="mb-4">
              Authoritatively simplify open-source resources via backend
              visualize business e-markets before parallel convergence optimize
              sticky and idea-sharing rather than unique solutions.
            </p>
            <p>
              Authoritatively simplify open-source resources via backend
              visualize business e-markets before parallel convergence optimize
              sticky and idea-sharing rather than unique solutions.
            </p>
            <div className="bg-taxiar-9 p-4 mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="md:col-span-4 hidden lg:block">
                  <Image
                    src="/assets/images/map.jpg"
                    width={152}
                    height={88}
                    alt="About Map"
                    className=" w-full"
                  />
                </div>
                <div className="md:col-span-8">
                  <ul className="max-w-md space-y-1 list-inside">
                    <li className="flex items-center">
                      <RiCheckboxCircleLine className="mr-2 text-taxiar-1 flex-shrink-0" />
                      Easy & Emergency Solutions Anytime</li>
                    <li className="flex items-center">
                      <RiCheckboxCircleLine className="mr-2 text-taxiar-1 flex-shrink-0" />
                      Getting Affordable price upto 2 years</li>
                    <li className="flex items-center">
                      <RiCheckboxCircleLine className="mr-2 text-taxiar-1 flex-shrink-0" />
                      More Reliable & Experienced Teams</li>
                  </ul>
                </div>
              </div>
            </div>
            <button
              className="outline-none inline-flex mt-6 items-center justify-center capitalize text-[15px]
              leading-[22px] font-[600] font-Josefin py-4 px-6 text-taxiar-2 bg-taxiar-1
               hover:bg-taxiar-2 hover:text-taxiar-1"
              type="submit" 
            >
               Discover More
              <RiArrowRightLine className="ml-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

import React from "react";
import Image from "next/image";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterFill,
  RiWhatsappLine,
} from "react-icons/ri";
import Link from "next/link";
import { TeamCarousel } from "@/components";

const DriverDetailSection = () => {
  return (
    <div className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-10 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-8 gap-10">
          <div className="order-2 lg:order-1">
            <Image
              src="/assets/images/team/team-details.jpg"
              width={595}
              height={486}
              alt="About Us"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p>Expert Driver</p>
            <h2
              className="text-taxiar-2 font-[700] mt-3 mb-3 text-[26px] 
                    leading-[32px] lg:text-[42px] lg:leading-[50px]"
            >
              Sophia Isabella
            </h2>
            <p className="mb-3">
              A taxi driver is a professional who operates a vehicle to
              transport passengers from one location to another. They play a
              crucial role in providing convenient and reliable transportation
              services in urban areas and beyond. Here is an overview of the
              life and responsibilities of a taxi driver.
            </p>
            <ul className="max-w-md font-Josefin">
              <li className="flex flex-col py-1">
                <p className="">
                  <span className="text-taxiar-2 mr-4">Phone Number: </span>
                  yourname@flowbite.com
                </p>
              </li>
              <li className="flex flex-col py-1">
                <p className="">
                  <span className="text-taxiar-2 mr-4">Email: </span>
                  sophiaisabella@gmail.com
                </p>
              </li>
              <li className="flex flex-col py-1">
                <p className="">
                  <span className="text-taxiar-2 mr-4">Website: </span>
                  https://example.com
                </p>
              </li>
              <li className="flex flex-col py-1">
                <p className="">
                  <span className="text-taxiar-2 mr-4">Experience: </span>22
                  Years
                </p>
              </li>
            </ul>
            <ul className="flex flex-wrap mt-5">
              <li className="mr-3">
                <Link
                  className="inline-flex items-center p-3  text-taxiar-2
                    bg-taxiar-9 rounded-full
                         hover:bg-taxiar-1 hover:text-taxiar-2"
                  href="#"
                >
                  <RiFacebookFill />
                </Link>
              </li>
              <li className="mr-3">
                <Link
                  className="inline-flex items-center p-3  text-taxiar-2
                    bg-taxiar-9 rounded-full
                    hover:bg-taxiar-1 hover:text-taxiar-2"
                  href="#"
                >
                  <RiTwitterFill />
                </Link>
              </li>
              <li className="mr-3">
                <Link
                  className="inline-flex items-center p-3  text-taxiar-2
                    bg-taxiar-9 rounded-full
                    hover:bg-taxiar-1 hover:text-taxiar-2"
                  href="#"
                >
                  <RiWhatsappLine />
                </Link>
              </li>
              <li className="mr-3">
                <Link
                  className="inline-flex items-center p-3 text-taxiar-2
                    bg-taxiar-9 rounded-full
                    hover:bg-taxiar-1 hover:text-taxiar-2"
                  href="#"
                >
                  <RiInstagramLine />
                </Link>
              </li>
              <li className="">
                <Link
                  className="inline-flex items-center p-3  text-taxiar-2
                    bg-taxiar-9 rounded-full
                    hover:bg-taxiar-1 hover:text-taxiar-2"
                  href="#"
                >
                  <RiLinkedinFill />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-10">
          <div className="">
            <h3
              className="text-taxiar-2 font-[700] mt-3 mb-3 text-[22px] 
                    leading-[32px] lg:text-[30px] lg:leading-[40px]"
            >
              About Me
            </h3>
            <p>
              A taxi driver is a professional who operates a vehicle to
              transport passengers from one location to another. They play a
              crucial role in providing convenient and reliable transportation
              services in urban areas and beyond. Here is an overview of the
              life and responsibilities of a taxi driver. A taxi drivers
              primary responsibility is to safely and efficiently transport
              passengers to their desired destinations. They pick up passengers
              from designated taxi stands, respond to customer requests, or may
              be hailed from the street. Taxi drivers are typically
              knowledgeable about local roads, traffic patterns, and popular
              destinations. They must follow traffic regulations, drive
              defensively, and ensure passenger safety throughout the journey.
            </p>
          </div>
          <div className="">
            <h3
              className="text-taxiar-2 font-[700] mt-3 mb-3 text-[22px] 
                    leading-[32px] lg:text-[30px] lg:leading-[40px]"
            >
              Professional Skills
            </h3>
            <p>
              Driving guidelines are rules and recommendations that help drivers
              to drive safely and responsibly on the road.
            </p>

            <div>
              <div className="flex justify-between mb-1 mt-5">
                <span className="text-[18px] leading-[28px] font-Josefin font-[600] text-taxiar-2">
                  Protection
                </span>
                <span className="text-[18px] leading-[28px] font-Josefin font-[600] text-taxiar-2">
                  80%
                </span>
              </div>
              <div className="w-full bg-taxiar-9 rounded-full h-2.5">
                <div
                  className=" bg-taxiar-1 h-2.5 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1 mt-5">
                <span className="text-[18px] leading-[28px] font-Josefin font-[600] text-taxiar-2">
                  Driving
                </span>
                <span className="text-[18px] leading-[28px] font-Josefin font-[600] text-taxiar-2">
                  99%
                </span>
              </div>
              <div className="w-full bg-taxiar-9 rounded-full h-2.5">
                <div
                  className=" bg-taxiar-1 h-2.5 rounded-full"
                  style={{ width: "99%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1 mt-5">
                <span className="text-[18px] leading-[28px] font-Josefin font-[600] text-taxiar-2">
                  Road Test
                </span>
                <span className="text-[18px] leading-[28px] font-Josefin font-[600] text-taxiar-2">
                  75%
                </span>
              </div>
              <div className="w-full bg-taxiar-9 rounded-full h-2.5">
                <div
                  className=" bg-taxiar-1 h-2.5 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-6 gap-10">
        <h2
              className="text-taxiar-2 font-[700] text-center mt-3 text-[26px] 
                    leading-[32px] lg:text-[42px] lg:leading-[50px]"
            >
              Our Others Drivers
            </h2>
            <TeamCarousel />
        </div>
      </div>
    </div>
  );
};

export default DriverDetailSection;

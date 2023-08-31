import { SubTitleDefault, TaxiCarouselOne } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowRightLine, RiCheckboxCircleLine } from "react-icons/ri";

const TaxiDetailSection = () => {
  return (
    <div className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-10 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 border-[1px] border-taxiar-9 mb-8 gap-10 shadow-md p-8">
          <div className="bg-taxiar-9 p-10 flex items-center">
            <Image
              src="/assets/images/taxi/taxi_details.png"
              width={530}
              height={286}
              alt="Taxi Details"
            />
          </div>
          <div>
            <p>R5.50/KM</p>
            <h2
              className="text-taxiar-2 font-[700] mt-3 mb-3 text-[26px] 
                    leading-[32px] lg:text-[42px] lg:leading-[50px]"
            >
              Mercedes-Benz AZ 2018
            </h2>
            <p>
              Mercedes-Benz is a German automobile manufacturer that produces
              luxury cars, sedans, SUVs, coupes, roadsters, convertibles and
              more. It is known for it high-performance vehicle.
            </p>
            <div className="grid grid-cols-2 gap-4  text-[13px] uppercase">
              <ul className="max-w-md space-y-1 list-inside">
                <li className="flex flex-col">
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center p-2  text-white   bg-taxiar-11 rounded-full">
                        <Image
                          src="/assets/images/icons/taxi_f_1_1.svg"
                          width={15}
                          height={15}
                          alt="Taxi Details"
                          className=""
                        />
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="block">Car Doors:</p>
                    </div>
                    <div className="text-right items-end justify-end">
                      <p>4</p>
                    </div>
                  </div>
                </li>
                <li className="flex flex-col">
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center p-2  text-white   bg-taxiar-11 rounded-full">
                        <Image
                          src="/assets/images/icons/taxi_f_1_2.svg"
                          width={15}
                          height={15}
                          alt="Taxi Details"
                          className=""
                        />
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="block">Passengers:</p>
                    </div>
                    <div className="text-right items-end justify-end">
                      <p>4</p>
                    </div>
                  </div>
                </li>
                <li className="flex flex-col">
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center p-2  text-white   bg-taxiar-11 rounded-full">
                        <Image
                          src="/assets/images/icons/taxi_f_1_2.svg"
                          width={15}
                          height={15}
                          alt="Taxi Details"
                          className=""
                        />
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="block">Air Condition:</p>
                    </div>
                    <div className="text-right items-end justify-end">
                      <p>Yes</p>
                    </div>
                  </div>
                </li> 
              </ul>
              <ul className="max-w-md space-y-1 list-inside">
              <li className="flex flex-col">
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center p-2  text-white   bg-taxiar-11 rounded-full">
                        <Image
                          src="/assets/images/icons/taxi_f_1_4.svg"
                          width={15}
                          height={15}
                          alt="Taxi Details"
                          className=""
                        />
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="block">Luggages:</p>
                    </div>
                    <div className="text-right items-end justify-end">
                      <p>3</p>
                    </div>
                  </div>
                </li> 
                <li className="flex flex-col">
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center p-2  text-white   bg-taxiar-11 rounded-full">
                        <Image
                          src="/assets/images/icons/taxi_f_1_4.svg"
                          width={15}
                          height={15}
                          alt="Taxi Details"
                          className=""
                        />
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="block">Heated Seats:</p>
                    </div>
                    <div className="text-right items-end justify-end">
                      <p>Yes</p>
                    </div>
                  </div>
                </li>   
              </ul>
            </div>
            <Link href={'/booking'} className="p-4 mt-6 flex items-center justify-center  capitalize text-[15px] w-[180px]
              leading-[22px] font-[600] font-Josefin py-4 px-6 text-taxiar-2 bg-taxiar-1 hover:bg-taxiar-2 hover:text-taxiar-1 ">
            Book Now <RiArrowRightLine className="ml-4" />
        </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-10">
          <div className="">
            <h3
              className="text-taxiar-2 font-[700] mt-3 mb-3 text-[22px] 
                    leading-[32px] lg:text-[30px] lg:leading-[40px]"
            >
              Description
            </h3>
            <p>
              Taxis may vary in their quality and cleanliness, depending on the
              driver and the company. Some taxis may be old, dirty, or poorly
              maintained. Some taxi drivers may be rude, dishonest, or
              unprofessional. Taxis may not be easily available in some areas,
              such as rural or suburban locations, or during bad weather or
              special events. Taxis may also be scarce during high demand
              periods, such as rush hours or holidays.
            </p>
            <p>
              Taxis are usually more expensive than other modes of
              transportation, especially during peak hours or long distances.
              Taxis may also charge extra fees for tolls, luggage, or waiting
              time.
            </p>
          </div>
          <div className="">
            <h3
              className="text-taxiar-2 font-[700] mt-3 mb-3 text-[22px] 
                    leading-[32px] lg:text-[30px] lg:leading-[40px]"
            >
              Taxi Features
            </h3>
            <p>
              Some taxi drivers may be rude, dishonest, or unprofessional. Taxis
              may not be easily available in some areas, such as rural or
              suburban locations.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <ul className="max-w-md space-y-1 list-inside">
                <li className="flex items-center">
                  <RiCheckboxCircleLine className="mr-2 text-taxiar-1 flex-shrink-0" />
                  Multi-zone A/C
                </li>
                <li className="flex items-center">
                  <RiCheckboxCircleLine className="mr-2 text-taxiar-1 flex-shrink-0" />
                  Heated front seats
                </li>
                <li className="flex items-center">
                  <RiCheckboxCircleLine className="mr-2 text-taxiar-1 flex-shrink-0" />
                  Navigation system
                </li>
                <li className="flex items-center">
                  <RiCheckboxCircleLine className="mr-2 text-taxiar-1 flex-shrink-0" />
                  Leather seats
                </li>
                <li className="flex items-center">
                  <RiCheckboxCircleLine className="mr-2 text-taxiar-1 flex-shrink-0" />
                  Premium sound system
                </li>
              </ul>
              <ul className="max-w-md space-y-1 list-inside">
                <li className="flex items-center">
                  <RiCheckboxCircleLine className="mr-2 text-taxiar-1 flex-shrink-0" />
                  Bluetooth
                </li>
                <li className="flex items-center">
                  <RiCheckboxCircleLine className="mr-2 text-taxiar-1 flex-shrink-0" />
                  Adaptive Cruise Control
                </li>
                <li className="flex items-center">
                  <RiCheckboxCircleLine className="mr-2 text-taxiar-1 flex-shrink-0" />
                  Intermittent wipers
                </li>
                <li className="flex items-center">
                  <RiCheckboxCircleLine className="mr-2 text-taxiar-1 flex-shrink-0" />
                  Cooled Seats
                </li>
                <li className="flex items-center">
                  <RiCheckboxCircleLine className="mr-2 text-taxiar-1 flex-shrink-0" />
                  Keyes Start
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-4">
          <SubTitleDefault title={"Our Taxi"} />
        </div>
        <div className="grid grid-cols-1 text-center">
          <h2
            className="text-taxiar-2 font-[700] mt-3 mb-3 text-[26px] 
                    leading-[32px] lg:text-[42px] lg:leading-[50px]"
          >
            Best Related Taxi
          </h2>
        </div>
        <div className="grid grid-cols-1 mt-4">
          <TaxiCarouselOne />
        </div>
      </div>
    </div>
  );
};

export default TaxiDetailSection;

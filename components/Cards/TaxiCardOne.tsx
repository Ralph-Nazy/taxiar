import Image from "next/image";
import React from "react";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

interface TaxProps {
    make: string;
    costPerKm: string;
    passenger: number;
    luggage: number;
    baseRate: string;
    aircon: string;
    url: string;
    image: string;
    category: string;

}

const TaxiCardOne: React.FC<TaxProps> = ({make, costPerKm, passenger, luggage, baseRate, aircon, url, image, category}) => {
  return (
    <div className="flex flex-col shadow-md border-[1px] bg-white border-taxiar-9 p-8 rounded-t-[30px]">
      <Image
        src={image}
        width={281}
        height={150}
        alt={make}
        className="mx-auto"
      />
      <h3 className="text-taxiar-2 text-[24px] font-[600] leading-[34px] mt-5 mb-1 text-center">
      {make}
      </h3>
      <p className="text-center border-b-[1px] border-taxiar-14 pb-3 mb-4">
        {costPerKm}/km
      </p>
      <ul className="mt-3">
        <li className="flex flex-col">
          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <Image
                src="/assets/images/icons/taxi_f_2_1.svg"
                height="20"
                width="22"
                className=""
                alt="Passengers"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="block">Passengers:</p>
            </div>
            <div className="text-right items-end justify-end">
              <p>{passenger}</p>
            </div>
          </div>
        </li>
        <li className="flex flex-col">
          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <Image
                src="/assets/images/icons/taxi_f_2_2.svg"
                height="20"
                width="22"
                className=""
                alt="Luggages"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="block">Luggages:</p>
            </div>
            <div className="text-right items-end justify-end">
              <p>{luggage}</p>
            </div>
          </div>
        </li>
        <li className="flex flex-col">
          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <Image
                src="/assets/images/icons/taxi_f_2_3.svg"
                height="20"
                width="22"
                className=""
                alt="Base Rate"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="block">Base Rate:</p>
            </div>
            <div className="text-right items-end justify-end">
              <p>R{baseRate}</p>
            </div>
          </div>
        </li>
        <li className="flex flex-col">
          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <Image
                src="/assets/images/icons/taxi_f_2_4.svg"
                height="20"
                width="22"
                className=""
                alt="Air Conditioner"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="block">Air Conditioner:</p>
            </div>
            <div className="text-right items-end justify-end">
              <p>{aircon}</p>
            </div>
          </div>
        </li> 
      </ul>
      <Link href={''} className="p-4 mt-6 flex items-center justify-center  capitalize text-[15px] min-[100px] w-[100%]
              leading-[22px] font-[600] font-Josefin py-4 px-6 text-taxiar-2 bg-taxiar-1 hover:bg-taxiar-2 hover:text-taxiar-1 ">
            Book A Taxi Now <RiArrowRightLine className="ml-4" />
        </Link>
    </div>
  );
};
export default TaxiCardOne;

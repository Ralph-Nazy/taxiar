import React from "react";
import { SERVICE_DETAILS } from "@/data/data";
import Image from "next/image";
import { ServiceProcessCards, SubServicesCards, Categories, Download, CallToAction, Search } from "@/components";

const ServicesDetailSection = () => {
  return (
    <div className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-10 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 shadow-md p-8">
            <Image
              width={713}
              height={409}
              alt="Service Details"
              src={SERVICE_DETAILS.image}
              className="mb-8"
            />
            <h3 className="font-[700] font-Josefin text-taxiar-2 text-[24px] leading-[32px] lg:text-[36px] lg:leading-[41px] capitalize my-6">
              {SERVICE_DETAILS.title}
            </h3>
            <p>{SERVICE_DETAILS.intro}</p>
            <p>{SERVICE_DETAILS.secPara}</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-5">
              {SERVICE_DETAILS.subServices.map((service, index) => (
                <SubServicesCards
                  key={index}
                  title={service.title}
                  desc={service.desc}
                />
              ))}
            </div>
            <p>{SERVICE_DETAILS.third}</p>

            <h3 className="font-[700] font-Josefin text-taxiar-2 text-[24px] leading-[32px] lg:text-[36px] lg:leading-[41px] capitalize my-6">
              {SERVICE_DETAILS.subtile}
            </h3>
            <p>{SERVICE_DETAILS.subPOne}</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-14 mb-10">
              {SERVICE_DETAILS.steps.map((step, index) => (
                <ServiceProcessCards
                  key={index}
                  title={step.title}
                  desc={step.desc}
                  numb={step.numb}
                />
              ))}
            </div>

            <p>{SERVICE_DETAILS.subPTwo}</p>
          </div>
          <div className="lg:col-span-4">
            <Search />
            <Categories />
            <Download />
            <CallToAction />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetailSection;

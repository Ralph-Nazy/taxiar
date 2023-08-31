import { SubTitleDefault, TaxiCarouselOne } from "@/components";
import React from "react";

const OurTaxiHomeOneSection = () => {
  return (
    <>
      <div
        className="pt-16 pb-60 lg:pt-20 lg:pb-60"
        style={{
          background: `#1B1B1B url(/assets/images/bg/taxi_bg_2.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-10 lg:px-24">
          <div className="grid grid-cols-1 mt-4">
            <SubTitleDefault title={"Our Taxi"} />
          </div>
          <div className="grid grid-cols-1 text-center">
            <h2
              className="text-white font-[700] mt-3 mb-3 text-[26px] 
                    leading-[32px] lg:text-[42px] lg:leading-[50px]"
            >
              Choose Our Taxi Collection
            </h2>
          </div>
        </div>
      </div>
      <div className="mt-[-50%] lg:mt-[-17%] mb-16 lg:mb-20">
        <div className="container mx-auto px-10 lg:px-24">
          <div className="grid grid-cols-1 mt-4">
            <TaxiCarouselOne />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTaxiHomeOneSection;

import { OurPartnersCarousel } from "@/components";
import React from "react";

const OurPartners = () => {
  return (
    <div className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-10 lg:px-24">
        <div className="grid grid-cols-1 gap-4">
        <h2
              className="text-taxiar-2 text-center font-[700] mt-3 mb-3 text-[24px] 
                    leading-[30px] uppercase"
            >
              <span className="text-taxiar-1">10k+</span> Our Trusted Partner
            </h2>
            <OurPartnersCarousel />
        </div>
      </div>
    </div>
  );
};

export default OurPartners;

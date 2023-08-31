import { ServicesCardTwo } from "@/components";
import { SERVICES } from "@/data/data";
import React from "react";

export const ServicesSection = () => {
  return (
    <div className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-10 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, index) => (
            <ServicesCardTwo
                key={index} 
                title={service.title} 
                image={service.image} 
                desc={service.desc} 
                url={service.url}            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ServicesSection;

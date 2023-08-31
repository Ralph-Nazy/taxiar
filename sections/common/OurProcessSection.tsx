import { SubTitleIconCenter, ProcessCircle } from "@/components";
import React from "react";

const OurProcessSection: React.FC<{}> = () => {
  return (
    <div className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-10 lg:px-24">
        <div className="grid grid-cols-1">
          <SubTitleIconCenter title={"Our Working Process"} />
        </div>
        <div className="grid grid-cols-1 text-center">
          <h2
            className="text-taxiar-2 font-[700] mt-3 mb-3 text-[26px] 
                    leading-[32px] lg:text-[42px] lg:leading-[50px] capitalize"
          >
            Our Basic Work Process
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-5 "> 
            <ProcessCircle 
              title={"Searching Taxi"} 
              desc={"Taxi booking process is the process of requesting a taxi service."} 
              numb={"01"} 
              icon={"/assets/images/icons/process-1.svg"} 
            />  
            <ProcessCircle 
              title={"Book A Taxi"} 
              desc={"The user contacts the provider through a phone call, an app, a website."} 
              numb={"02"} 
              icon={"/assets/images/icons/process-2.svg"} 
            /> 
            <ProcessCircle 
              title={"Arrive safely"} 
              desc={"The user provides their pickup location, and preferred time of arrival."} 
              numb={"03"} 
              icon={"/assets/images/icons/process-3.svg"} 
            /> 
        </div>
      </div>
    </div>
  );
};

export default OurProcessSection;

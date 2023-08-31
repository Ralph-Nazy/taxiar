import { SubTitleLeft, ServicesCard, ServicesCarousel } from "@/components";
import React from "react";

const OurServicesCommon: React.FC<{}> =()=> {
    return(
        <div className="py-16 lg:py-20 bg-taxiar-9">
            <div className="container mx-auto px-10 lg:px-24">
                <div className="grid grid-cols-1">
                    <SubTitleLeft title={"Our Awesome Service"} />
                </div>
                <div className="grid grid-cols-1">
                    <h2 className="text-taxiar-2 font-[700] mt-3 mb-3 text-[26px] 
                    leading-[32px] lg:text-[42px] lg:leading-[50px]">Best Taxi Services For You</h2>
                </div>
                <div className="grid grid-cols-1 gap-4 mt-5">
                    <ServicesCarousel />
                </div>
            </div>
        </div>
    )
}
export default OurServicesCommon;
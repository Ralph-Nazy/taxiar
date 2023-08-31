import { MainServicesCarousel, SubTitleLeftIcon, TeamCard } from "@/components";
import React from "react";

interface TeamsProps {
    bg: string;
}

const HomeOneServiceSection: React.FC<TeamsProps> =({bg})=> {
    return(
        <div className={`py-16 lg:py-20 ${bg}`}>
            <div className="container mx-auto px-10 lg:px-24">
                <div className="grid grid-cols-1">
                    <SubTitleLeftIcon title={"Our Services"} />
                </div>
                <div className="grid grid-cols-1">
                    <h2 className="text-taxiar-2 font-[700] mt-3 mb-3 text-[26px] 
                    leading-[32px] lg:text-[42px] lg:leading-[50px]">Best Taxi Services for you</h2>
                </div>
                <div className="grid grid-cols-1 gap-4 mt-5">
                    <MainServicesCarousel />
                </div>
            </div>
        </div>
    )
}
export default HomeOneServiceSection;
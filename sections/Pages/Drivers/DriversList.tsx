import React from "react";
import { TEAM_MEMBERS } from "@/data/data";
import { SubTitleDefault, TeamCard } from "@/components";
const DriversList = () => {
  return (
    <div className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-10 lg:px-24">
        <div className="grid grid-cols-1">
          <SubTitleDefault title={"Team Members"} />
        </div>
        <div className="grid grid-cols-1 text-center">
          <h2
            className="text-taxiar-2 font-[700] mt-3 mb-3 text-[26px] 
                    leading-[32px] lg:text-[42px] lg:leading-[50px]"
          >
            Our Expert Drivers
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
          {TEAM_MEMBERS.map((team, index) => (
            <TeamCard
              key={index}
              name={team.name}
              url={team.url}
              title={team.title}
              img={team.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DriversList;

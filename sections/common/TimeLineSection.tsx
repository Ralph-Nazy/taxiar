import { TimeLineDefault } from "@/components";
import React from "react";

const TimeLineSection = () => {
  return (
    <div className="pb-16 lg:pb-20 bg-white">
      <div className="container mx-auto px-10 lg:px-24">
        <div className="grid grid-cols-1">
            <TimeLineDefault />
        </div>
      </div>
    </div>
  );
};

export default TimeLineSection;

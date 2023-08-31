import { SubTitleLeftIcon, TimeLine } from "@/components";
import Link from "next/link";
import React from "react";
import { RiPlayFill } from "react-icons/ri";

const VideoSection = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[300px]">
        <div
          className="flex items-center justify-center"
          style={{
            background: `#1B1B1B url(/assets/images/bg/video_1.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Link href={""}>
            <div className="rounded-full p-6 flex items-center bg-white my-40 border-[15px] border-taxiar-2 border-opacity-75">
              <RiPlayFill className="text-taxiar-1" />
            </div>
          </Link>
        </div>
        <div className="bg-taxiar-2 p-16 lg:p-20">
          <SubTitleLeftIcon title={"Why Choose Us"} />
          <h2
            className="text-white font-[700] mt-3 mb-3 text-[26px] 
                    leading-[32px] lg:text-[42px] lg:leading-[50px]"
          >
            We Ensure Your Happy To Taxi Journey
          </h2>
          <TimeLine />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;

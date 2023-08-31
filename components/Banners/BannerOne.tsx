import React from "react";
import { SubTitleLeftIcon } from "..";
import { RiArrowRightLine } from "react-icons/ri";
import Link from "next/link";

interface SliderProps {
    title: string;
    url: string;
    img: string;
    desc: string;
    tagline: string;
}

const BannerOne: React.FC<SliderProps> = ({title, url, img, desc, tagline}) => {
  return (
    <div className="w-full flex items-center h-[100vh] relative" style={{background: `url(${img})`, backgroundPosition: "center", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
        <div className="h-[100vh] flex items-center bg-[url('/assets/images/banner/hero_overlay_1.png')] bg-cover bg-center bg-no-repeat relative w-full">
      <div className="flex flex-col">
        <div className="container mx-auto px-10 lg:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <SubTitleLeftIcon title={tagline} />
              <h2
                className="text-white font-[700] mt-3 mb-3 text-[40px] 
                    leading-[50px] lg:text-[65px] capitalize lg:leading-[75px]"
              >
                {title}
              </h2>
              <p>
                {desc}
              </p>
              <Link href={url} className="p-4 mt-6 flex items-center justify-center  capitalize text-[15px] w-[180px]
              leading-[22px] font-[600] font-Josefin py-4 px-6 text-taxiar-2 bg-taxiar-1 hover:bg-taxiar-2 hover:text-taxiar-1 ">
            Discover More <RiArrowRightLine className="ml-4" />
        </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
export default BannerOne;

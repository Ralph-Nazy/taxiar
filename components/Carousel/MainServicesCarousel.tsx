"use client"

import React from "react"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {  ServicesCardTwo } from ".." 
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { SERVICES } from "@/data/data";

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };
  
  const customLeftArrow = (
    <div className="absolute arrow-btn top-[40%] left-0 text-center
    py-3 px-3 cursor-pointer text-taxiar-2 bg-white hover:bg-taxiar-1 hover:text-taxiar-2">
      <RiArrowLeftSLine />
    </div>
  );
  
  const customRightArrow = (
    <div className="absolute arrow-btn top-[40%] right-0 text-center
    py-3 px-3 cursor-pointer text-taxiar-2 bg-white hover:bg-taxiar-1 hover:text-taxiar-2">
      <RiArrowRightSLine />
    </div>
  );
const MainServicesCarousel: React.FC<{}>=()=> {

    return(
        <Carousel
        infinite={true}
        autoPlay={ true}
        arrows={true}
        autoPlaySpeed={5000}      
        showDots={false} 
        responsive={responsive}
        customLeftArrow={customLeftArrow}
        customRightArrow={customRightArrow}
        itemClass="px-4">
            {SERVICES.map((service, index) => (
            <ServicesCardTwo
                key={index} 
                title={service.title} 
                image={service.image} 
                desc={service.desc} 
                url={service.url}            />
          ))}   
    </Carousel>
    )
}
export default MainServicesCarousel;
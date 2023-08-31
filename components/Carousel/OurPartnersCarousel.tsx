"use client"

import React from "react"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {  PartnersCard } from ".." 
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { PARTNERS } from "@/data/data";

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 2,
    },
  };
  
  const customLeftArrow = (
    <div className="absolute arrow-btn top-[40%] left-0 text-center shadow-md
    py-3 px-3 cursor-pointer text-taxiar-2 bg-white hover:bg-taxiar-1 hover:text-taxiar-2">
      <RiArrowLeftSLine />
    </div>
  );
  
  const customRightArrow = (
    <div className="absolute arrow-btn top-[40%] right-0 text-center shadow-md
    py-3 px-3 cursor-pointer text-taxiar-2 bg-white hover:bg-taxiar-1 hover:text-taxiar-2">
      <RiArrowRightSLine />
    </div>
  );
const OurPartnersCarousel: React.FC<{}>=()=> {

    return(
        <Carousel
        infinite={true}
        autoPlay={ true}
        arrows={false}
        autoPlaySpeed={5000}      
        showDots={false} 
        responsive={responsive}
        customLeftArrow={customLeftArrow}
        customRightArrow={customRightArrow}
        itemClass="">
            {PARTNERS.map((partner, index)=>(
              <PartnersCard 
                key={index} 
                img={partner.img}     
            /> 
            ))}  
    </Carousel>
    )
}
export default OurPartnersCarousel;
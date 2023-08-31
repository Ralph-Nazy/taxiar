"use client"

import React from "react"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {  LatestNewsCard } from ".." 
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { BLOG_LIST } from "@/data/data";

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
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
const LatestNewsCarousel: React.FC<{}>=()=> {

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
            {BLOG_LIST.map((post, index)=>(
              <LatestNewsCard 
                key={index}
                title={post.title} 
                url={post.url} 
                date={post.date} 
                img={post.img} 
                author={post.author} 
                comments={post.comments}   
            /> 
            ))}  
    </Carousel>
    )
}
export default LatestNewsCarousel;
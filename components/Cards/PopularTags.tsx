import { TAGS } from "@/data/data";
import Link from "next/link";
import React from "react";
import { RiFolder5Fill } from "react-icons/ri";

const PopularTags: React.FC<{}> = () => {
  return (
    <div className="bg-taxiar-9 p-8 mb-6">
      <h3 className="font-[700] font-Josefin text-taxiar-2 text-[20px] leading-[32px]  uppercase mb-4">
        Popular Tags
      </h3>
      <ul className="max-w-md">
        {TAGS.map((tag, index) => ( 
            <Link key={index}  href={tag.url} 
              className="hover:bg-taxiar-1 inline-flex items-center
             bg-white hover:text-taxiar-2 py-2 px-3 m-1 text-[14px] leading-[18px] font-[600] text-taxiar-13"> 
                {tag.title} 
          </Link> 

        ))}
      </ul>
    </div>
  );
};

export default PopularTags;

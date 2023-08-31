import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowRightLine, RiDiscussFill, RiUser3Fill } from "react-icons/ri";

interface BlogListProps {
    title: string;
    url: string;
    date: string;
    img: string;
    author: string;
    comments: string; 
}

const LatestNewsCard: React.FC<BlogListProps>=({ title, url, date, img, author, comments})=> {
    return(
        <div className="flex flex-col shadow-md p-8 mb-8">
            <div className="relative">
            <Link href={url}>
                <Image 
                    src={img}
                    width={327}
                    height={220}
                    alt={title}
                    className="w-full"
                />
            </Link>
            <div className="absolute bg-white rounded-tr-[20px] text-taxiar-13 bottom-0 left-0 text-center py-2 px-3"> 
            <h6 className="text-[18px] font-Josefin text-taxiar-1 leading-[20px] font-[600]">
                      {" "}
                      {moment(date).format("DD")}
                    </h6>
                    <span className="text-[14px] leading-[16px]">
                      {" "}
                      {moment(date).format("MMMM YYYY")}
                    </span>
              </div>
            </div>
            <p className="flex items-center text-taxiar-13 text-[14px] font-[400] mt-4 mb-0">
          <RiUser3Fill className="inline-block mr-2 text-taxiar-1" />
          <span className="mr-4">{author}</span> 
          <RiDiscussFill className="mx-2 text-taxiar-1 inline-block" />
          <span className="capitalize">comments ({comments})</span>
        </p>
            <Link href={url} className="border-b-[1px] border-taxiar-9"><h3
              className="text-taxiar-2 font-[700] mt-3 mb-3 text-[23px] 
                    leading-[29px] hover:text-taxiar-1"
            >
              {title}
            </h3></Link> 
              <Link href={url} className="flex items-center mt-5 capitalize text-[15px]
              leading-[22px] font-[700] font-Josefin text-taxiar-1 hover:text-taxiar-2 ">
            Read More <RiArrowRightLine className="ml-4" /></Link>

        </div>
    )
}

export default LatestNewsCard;
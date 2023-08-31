import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowRightLine, RiDiscussFill, RiPriceTag3Fill, RiUser3Fill } from "react-icons/ri";

interface BlogListProps {
    title: string;
    url: string;
    date: string;
    img: string;
    author: string;
    comments: string;
    tag: string;
    intro: string;
}

const BlogListCard: React.FC<BlogListProps>=({ title, intro, url, date, img, author, comments, tag})=> {
    return(
        <div className="flex flex-col shadow-md p-8 mb-8">
            <div className="relative">
            <Link href={url}>
                <Image 
                    src={img}
                    width={713}
                    height={400}
                    alt={title}
                />
            </Link>
            <div className="absolute bg-white rounded-tr-[50px] text-taxiar-13 bottom-0 left-0 text-center py-2 px-3"> 
            <h6 className="text-[24px] font-Josefin text-taxiar-1 leading-[30px] font-[700]">
                      {" "}
                      {moment(date).format("DD")}
                    </h6>
                    <span className="text-[14px] leading-[18px]">
                      {" "}
                      {moment(date).format("MMMM YYYY")}
                    </span>
              </div>
            </div>
            <p className="flex items-center text-taxiar-13 text-[14px] font-[400] mt-4 mb-0">
          <RiUser3Fill className="inline-block mr-2 text-taxiar-1" />
          <span className="mr-4">{author}</span>
          <RiPriceTag3Fill className="inline-block mr-2 text-taxiar-1" />
          <span className="mr-4">{tag}</span>
          <RiDiscussFill className="mx-2 text-taxiar-1 inline-block" />
          <span className="capitalize">comments ({comments})</span>
        </p>
            <Link href={url}><h2
              className="text-taxiar-2 font-[700] mt-3 mb-3 text-[26px] 
                    leading-[32px] lg:text-[30px] lg:leading-[40px] hover:text-taxiar-1"
            >
              {title}
            </h2></Link>
            <p>{intro}</p>
              <Link href={url} className="p-4 mt-4 flex items-center justify-center  capitalize text-[15px] w-[180px]
              leading-[22px] font-[600] font-Josefin py-4 px-6 text-taxiar-2 bg-taxiar-1 hover:bg-taxiar-2 hover:text-taxiar-1 ">
            Read More <RiArrowRightLine className="ml-4" /></Link>

        </div>
    )
}

export default BlogListCard;
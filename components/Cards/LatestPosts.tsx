import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LATEST_POST_SIDEBAR } from "@/data/data"
import { RiArrowRightLine, RiCalendar2Line } from "react-icons/ri";
import moment from "moment";

const LatestPosts: React.FC<{}> = () => {
  return (
    <div className="bg-taxiar-9 p-8 mb-6">
      <h3 className="font-[700] font-Josefin text-taxiar-2 text-[20px] leading-[32px]  uppercase mb-4">
        Latest Posts
      </h3>
      <ul>
        {LATEST_POST_SIDEBAR.map((post, index) =>(
            <li key={index} className="pb-4 pt-4 cursor-pointer group"> 
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Image
                  src={post.img}
                  alt={post.title}
                  height="85"
                  width="85"
                  className={`rounded-[10px]`}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-[15px] leading-[26px] mb-0 text-taxiar-13`}>
                  <RiCalendar2Line className="inline mr-1 text-taxiar-1" />{" "}
                  {moment(post.date).format("DD MMMM YYYY")}
                </p>
                <h4 className={`text-[18px] leading-[24px] pt-1 text-taxiar-2 font-[500] group-hover:text-taxiar-1`}>
                    <Link href={post.url}>{post.title}</Link>
                </h4> 
              </div>
            </div> 
        </li>
        ))}
      
      </ul>
    </div>
  );
};
export default LatestPosts;

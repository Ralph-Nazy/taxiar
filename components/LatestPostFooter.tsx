import { LatestPost } from "@/data/types";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import React from "react";
import { RiArrowRightLine, RiTimeLine , RiCalendar2Line} from "react-icons/ri";

type Props = {
  title: string;
  date: string;
  img: string;
  url: string;
};

const LatestPostFooter: React.FC<Props> = ({ title, date, img, url }) => {
  return (
    <li className="pb-4 pt-4 cursor-pointer "> 
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Image
              src={img}
              alt={title}
              height="100"
              width="100"
              className={`rounded-[5px]`}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className={`text-[15px] leading-[26px] mb-0`}>
              <RiCalendar2Line className="inline mr-1 text-taxiar-1" />{" "}
              {moment(date).format("DD MMMM YYYY")}
            </p>
            <h4 className={`text-[18px] leading-[22px] pt-1 text-white`}>
              {title}
            </h4>
            <Link href={url} className={`text-[13px] text-taxiar-1 uppercase`}>
              Read More{" "}
              <RiArrowRightLine className="inline ml-1  font-Josefin font-[500]" />
            </Link>
          </div>
        </div> 
    </li>
  );
};
export default LatestPostFooter;

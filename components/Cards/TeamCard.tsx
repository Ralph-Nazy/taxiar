import React from "react"
import Link from "next/link";
import Image from "next/image";

interface TeamProps {
    name: string;
    url: string;
    title: string;
    img: string;
}

const TeamCard: React.FC<TeamProps> =({name, url, title, img})=> {
    return(
        <div 
          className="group cursor-pointer bg-qeducato-primary-3 hover:bg-white hover:shadow-xl"
        >
          <div className="flex flex-col">
            <Link href={url} className="">
              <Image
                src={img}
                width="290"
                height="301"
                alt={name}
                className="w-full"
              /> 
            </Link> 
            <div className="text-center group-hover:bg-white py-4">
              <Link href={url} className="text-taxiar-2">
                <h2
                  className="font-[700] text-[20px]
                        leading-[30px] mb-1 capitalize"
                >
                  {name}
                </h2>
              </Link>
              <p className="text-taxiar-1 text-[15px] leading-[19px] font-[500]">
                {title}
              </p> 
            </div>
          </div>
        </div> 
    )
}

export default TeamCard;    
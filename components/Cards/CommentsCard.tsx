import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react"
import { RiReplyFill } from "react-icons/ri";

const CommentsCard: React.FC<{}> =()=> {
    return(
        <div className="bg-taxiar-9 p-6 relative mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="lg:col-span-3">
                    <Image 
                        src="/assets/images/blog/comment-author-1.jpg"
                        width={120}
                        height={120}
                        alt="Blog"
                    />
                </div>
                <div className="lg:col-span-9">
                    <h3 className="text-taxiar-2 font-[700] text-[20px] leading-[30px]">Adam John</h3>
                    <p className="text-taxiar-13 text-[14px]">{moment("2023-08-10T19:20:02.363691+00:00").format(
                    "DD MMMM YYYY, h:mm:ss a"
                  )}</p>
                  <p className="text-[15px]">Credibly pontificate transparent quality vectors with quality mindshare. 
                    Efficiently architect </p>
                    <Link href={''} className="absolute top-6 right-6 flex 
                    items-center text-[16p] leading-[24px] text-taxiar-1 font-[600] hover:text-taxiar-2"><RiReplyFill className="inline-block mr-1" /> Reply</Link>
                </div>
            </div>
            
        </div>
    )
}
export default CommentsCard;
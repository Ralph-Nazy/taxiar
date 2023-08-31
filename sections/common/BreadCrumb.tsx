import React from "react"
import Link from "next/link"
import { RiArrowRightSLine } from "react-icons/ri";

type Props = {
    title: string
    url: string 
}

const BreadCrumb: React.FC<Props> =({
    title,
    url,
})=> {
    const defaultValues = {title: "Faq", url:"/faq"}

    return(
        <div className="py-10 relative min-h-[150px] lg:min-h-[200px]" style={{background: `url(/assets/images/header-bg/breadcrumb-bg.jpg)`, backgroundPosition:"center", backgroundSize:"cover"}}>
            <div className="flex flex-col items-center justify-center">
                <div className="container mx-auto py-10">
                    <div className="grid grid-cols-1"> 
                    <h1 className="text-white capitalize font-[500] text-center text-[28px] leading-[32px] lg:text-[40px] lg:leading-[56px]">{title}</h1>
                    <div className="inline-flex items-center justify-center capitalize text-[12px] font-Spartan py-3 px-6 text-taxiar-1
                         bg-qeducato-primary-1 rounded-full" >
                            <Link className="mr-1" href="/">Home</Link>
                            <RiArrowRightSLine className="mr-1" />
                            <Link href={url}>{title}</Link>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BreadCrumb;
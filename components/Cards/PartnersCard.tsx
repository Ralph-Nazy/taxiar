import Image from "next/image";
import React from "react";

interface PartnerProps {
    img:string;
}

const PartnersCard: React.FC<PartnerProps> =({img})=> {

    return(
        <div className="flex items-center p-10 border-[1px] border-taxiar-9">
            <Image 
                src={img}
                height={53}
                width={160}
                alt="Brand"
            />
        </div>
    )
}
export default PartnersCard;
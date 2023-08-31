import { CATEGORIES } from "@/data/data";
import Link from "next/link";
import React from "react";
import { RiFilePdfLine, RiArrowRightLine,RiFileTextLine} from "react-icons/ri";

const Download: React.FC<{}> = () => {
  return (
    <div className="bg-taxiar-9 p-8 mb-6">
      <h3 className="font-[700] font-Josefin text-taxiar-2 text-[20px] leading-[32px]  uppercase mb-4">
        Download
      </h3>
      <ul className="max-w-md divide-y divide-[#E0E0E0]">
        <li className="py-4">
          <Link href={""} className="group hover:text-taxiar-1">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <RiFilePdfLine className="mt-1 " />
              </div>
              <div className="flex-1 min-w-0">
                <p className="mb-0 uppercase text-taxiar-2 group-hover:text-taxiar-1 font-[700]">
                  Our Brochures
                </p>
                <p className="mb-0 uppercase text-[14px]">Download</p>
              </div>
              <div className="inline-flex items-center">
                  <span className="bg-taxiar-1 text-taxiar-2 group-hover:text-white p-2"><RiArrowRightLine  /></span>
              </div>
            </div>
          </Link>
        </li>
        <li className="py-4">
          <Link href={""} className="group hover:text-taxiar-1">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <RiFileTextLine className="mt-1 " />
              </div>
              <div className="flex-1 min-w-0">
                <p className="mb-0 uppercase text-taxiar-2 group-hover:text-taxiar-1 font-[700]">
                Company Details
                </p>
                <p className="mb-0 uppercase text-[14px]">Download</p>
              </div>
              <div className="inline-flex items-center">
                  <span className="bg-taxiar-1 text-taxiar-2 group-hover:text-white p-2"><RiArrowRightLine  /></span>
              </div>
            </div>
          </Link>
        </li>        
      </ul>
    </div>
  );
};

export default Download;
